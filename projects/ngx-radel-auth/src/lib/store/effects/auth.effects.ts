import {Inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, exhaustMap, filter, from, map, of, switchMap, tap, withLatestFrom} from "rxjs";
import {AUTH_CONFIG} from "../../services";
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {select, Store} from "@ngrx/store";
import {NgxRadelAuthState} from "../reducers";
import {AppUser} from "../../model";
import * as AuthActions from '../actions';
import * as fromAuthState from '../selectors/auth.selectors';


@Injectable()
export class AuthEffects {

  setupAuth$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.setupAuth),
    map((action) => {
      this.oauthService.configure(this.authConfig);
      return AuthActions.loadDiscoveryDocument();
    })
  ));

  authorize$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loadDiscoveryDocument),
    exhaustMap(() => from(this.oauthService.loadDiscoveryDocumentAndTryLogin()).pipe(
      switchMap(() => {
        const actions: any[] = [AuthActions.loadDiscoveryDocumentSuccess()];
        if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
          actions.push(this.oauthService.getRefreshToken() ? AuthActions.refreshToken() : AuthActions.notAuthorized());
        } else {
          actions.push(AuthActions.tokenReceived());
        }
        return actions;
      }),
      catchError((error: any) => of(AuthActions.missingConfig()))
    ))
  ));

  notAuthorized$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.notAuthorized),
    concatMap(event => of(event).pipe(
      withLatestFrom(this.store$.pipe(select(fromAuthState.selectRedirectToLoginWhenNotAuthorized)))
    )),
    filter(([action, redirectToLoginWhenNotAuthorized]) => redirectToLoginWhenNotAuthorized === true),
    map(() => AuthActions.getToken())
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => this.oauthService.logOut()),
    switchMap(() => [AuthActions.setUser({data: null})])
  ));

  tokenExpired$ = createEffect(() => this.oauthService.events.pipe(
    filter((event: any) => event.type === 'token_expires' && event.info === 'access_token'),
    concatMap(event => of(event).pipe(
      withLatestFrom(this.store$.pipe(select(fromAuthState.selectInitialized)))
    )),
    filter(([event, initialized]) => initialized === true),
    map(() => AuthActions.refreshToken())
  ));

  getToken$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.getToken),
    tap(() => this.oauthService.initCodeFlow()),
    catchError((e) => {
      console.error('An error has occurred during auth initialization:', e);
      this.store$.dispatch(AuthActions.missingConfig());
      return e;
    })
  ), {dispatch: false});

  refreshToken$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.refreshToken),
    exhaustMap(() => from(this.oauthService.refreshToken()).pipe(
      map(() => AuthActions.tokenReceived()),
      catchError(() => of(AuthActions.notAuthorized(), AuthActions.refreshTokenError()))
    ))
  ));

  tokenReceived$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.tokenReceived),
    map(() => {
      const claims: any = this.oauthService.getIdentityClaims();
      return AuthActions.setUser({
        data: {
          id: claims?.sub,
          name: claims?.name,
          email: claims?.email,
          roles: claims?.roles,
          avatar: claims?.avatar,
          tokenClaims: claims
        } as AppUser
      });
    })
  ));

  constructor(@Inject(AUTH_CONFIG) private authConfig: AuthConfig,
              private actions$: Actions,
              private store$: Store<NgxRadelAuthState>,
              private oauthService: OAuthService) {
  }

}
