import * as fromAppState from '../reducers';
import {createSelector} from "@ngrx/store";
import * as fromUserState from '../reducers/user.reducer';

export const selectUser = createSelector(
  fromAppState.selectUserState,
  (userState) => userState.details
);

export const selectUserRoles = createSelector(
  fromAppState.selectUserState,
  (userState: fromUserState.State) => userState.details?.roles
);

export const selectLoggedIn = createSelector(
  selectUser,
  (appUser) => appUser != null
);

export const selectUserInitialized = createSelector(
  fromAppState.selectUserState,
  (userState) => userState.initialized
);
