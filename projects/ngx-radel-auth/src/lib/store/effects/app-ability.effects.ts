import {Inject, Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {concatMap, filter, map, of, withLatestFrom} from "rxjs";
import * as AuthActions from '../actions';
import {select, Store} from "@ngrx/store";
import {OAuthService} from "angular-oauth2-oidc";
import {VisitAbilityService} from "../../services";
import {Router} from "@angular/router";
import {PureAbility} from "@casl/ability";

@Injectable()
export class AppAbilityEffects {

  tokenReceived$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.tokenReceived),
    concatMap(action => of(action).pipe(
      withLatestFrom(
        this.store$.pipe(select(fromUserState.selectUserRoles)),
        this.store$.pipe(select(fromAuthState.selectSkipBasedOnTokenAbilities))
      )
    )),
    filter(([action, userRoles, skipBasedOnTokenAbilities]) => skipBasedOnTokenAbilities === false),
    map(([action, userRoles]) => {
      const claims: any = this.oauthService.getIdentityClaims();

      if (JSON.stringify(claims?.roles) !== JSON.stringify(userRoles)) {
        return claims?.roles;
      }

      return null;
    }),
    filter(newRoles => newRoles != null),
    switchMap((newRoles: string[]) => [
        AuthActions.refreshAbilities({userRoles: newRoles})
      ]
    )
  ));

  refreshUserAbilities$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.refreshAbilities),
    map((action: { userRoles: string[] }) => {
      const {can, rules} = new AbilityBuilder<AppAbility>(PureAbility);
      const roles = action.userRoles;
      const config: Map<string, UserRoleAbility> = this.abilitiesConfig;

      let defaultRouterUrl = '';

      roles.forEach(role => {
        const userRoleAbility: UserRoleAbility | undefined = config.get(role);
        if (userRoleAbility) {
          const abilityResource: AbilityResource = userRoleAbility.abilities;
          defaultRouterUrl = userRoleAbility.defaultPage;
          abilityResource?.create?.forEach(subject => {
            can('create', subject);
          });
          abilityResource?.update?.forEach(subject => {
            can('update', subject);
          });
          abilityResource?.read?.forEach(subject => {
            can('read', subject);
          });
          abilityResource?.delete?.forEach(subject => {
            can('delete', subject);
          });
          abilityResource?.manage?.forEach(subject => {
            can('manage', subject);
          });
          abilityResource?.visit?.forEach(subject => {
            can('visit', subject);
          });
        }
      });
      this.ability.update(rules);
      return AuthActions.updateAbilitiesSuccess({params: {defaultRouterUrl}});
    })
  ));

  checkRouteWhenAbilitiesUpdated$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.updateAbilitiesSuccess),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store$.pipe(select(fromRouter.selectUrl)))
    )),
    tap(([action, currentUrl]) => {
      const defaultRouterUrl = action.params.defaultRouterUrl;
      if (currentUrl && !this.visitAbilityService.canVisit(currentUrl)) {
        console.warn('Permission denied for this page! Navigating to default page');
        this.router.navigate([defaultRouterUrl]);
      }
    })
  ), {dispatch: false});

  constructor(@Inject(ABILITIES_CONFIG) private abilitiesConfig: Map<string, UserRoleAbility>,
              private actions$: Actions,
              private store$: Store<NgxSoftlabAuthState>,
              private ability: PureAbility,
              private router: Router,
              private visitAbilityService: VisitAbilityService,
              private oauthService: OAuthService) {
  }

}
