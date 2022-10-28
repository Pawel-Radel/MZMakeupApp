import * as fromAppState from '../reducers';
import {createSelector} from "@ngrx/store";

export const selectInitialized = createSelector(
  fromAppState.selectAuthState,
  (authState) => authState.initialized
);

export const selectRedirectToLoginWhenNotAuthorized = createSelector(
  fromAppState.selectAuthState,
  (authState) => authState.redirectToLoginWhenNotAuthorized
);

export const selectSkipBasedOnTokenAbilities = createSelector(
  fromAppState.selectAuthState,
  (authState) => authState.skipBasedOnTokenAbilities
);
