import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export const ngxSoftlabAuthFeatureKey = 'ngx-softlab-auth';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as fromAbilities from './ability.reducer';
import * as fromUser from './user.reducer';
import * as fromAuth from './auth.reducer';

export interface NgxRadelAuthState {
  router: RouterReducerState;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromAbilities.abilitiesFeatureKey]: fromAbilities.State;
  [fromUser.userFeatureKey]: fromUser.State;
}

export const ngxSoftlabAuthReducers: ActionReducerMap<NgxRadelAuthState> = {
  router: routerReducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromAbilities.abilitiesFeatureKey]: fromAbilities.reducer,
  [fromUser.userFeatureKey]: fromUser.reducer,
} as any;


export const ngxRadelAuthState = createFeatureSelector<NgxRadelAuthState>(ngxSoftlabAuthFeatureKey);

export const selectAbilitiesState = createSelector(
  ngxRadelAuthState,
  (state: NgxRadelAuthState) => state[fromAbilities.abilitiesFeatureKey]
);

export const selectUserState = createSelector(ngxRadelAuthState, (state: NgxRadelAuthState) => state[fromUser.userFeatureKey]);
export const selectAuthState = createSelector(ngxRadelAuthState, (state: NgxRadelAuthState) => state[fromAuth.authFeatureKey]);
export const selectRouterState = createSelector(ngxRadelAuthState, (state: NgxRadelAuthState) => state.router);
