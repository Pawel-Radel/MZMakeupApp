import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import {combineLatest, filter, map, Observable} from "rxjs";
import {VisitAbilityService} from "../services";
import {NgxRadelAuthState} from "../store/reducers";
import * as fromAbilities from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AbilityGuard implements CanActivate {

  constructor(private router: Router,
              private visitAbilityService: VisitAbilityService,
              private store: Store<NgxRadelAuthState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return combineLatest([this.store.select(fromAbilities.selectDefaultRouterUrl), this.store.select(fromAbilities.selectInitialized)])
      .pipe(
        filter(([url, initialized]) => initialized === true),
        map(([url, initialized]) => {
          const canVisit = this.visitAbilityService.canVisit(state.url);

          if (!canVisit) {
            if (this.visitAbilityService.canVisit(url || '/')) {
              console.warn('Permission denied for this page! Navigating to default page', state.url);
              this.router.navigate([url]);
            } else {
              console.error('Something went wrong! Permission denied for all pages, probably user doesn\'t have any role or permitted pages are not configured for user with defined role.');
            }

          }

          return canVisit;
        })
      );
  }

}
