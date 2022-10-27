import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

import * as fromAuth from 'ngx-softlab-auth';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

     // TODO ogarnąć własne store

    return this.store.pipe(select(fromAuth.selectUser))
      .pipe(
        tap((user) => console.log('USER ' + JSON.stringify(user))),
        map((user) => user !== null),
        filter(canActivate => canActivate === false),
        tap(() => this.router.navigate(['/dashboard']))
      );
  }

}
