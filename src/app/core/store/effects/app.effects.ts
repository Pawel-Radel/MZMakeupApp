import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {NgxRadelAuthState} from "../../../../../projects/ngx-radel-auth/src/lib/store/reducers";

@Injectable()
export class AppEffects {

  // TODO uncomment if need to start auth

  /*  init$ = createEffect(() => this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      tap(() => console.log("root init")),
      switchMap(() => [
        fromAuth.setupAuth({redirectToLoginWhenNotAuthorized: true})
      ])
    ));*/

  constructor(private actions$: Actions,
              private store: Store<NgxRadelAuthState>) {
  }
}
