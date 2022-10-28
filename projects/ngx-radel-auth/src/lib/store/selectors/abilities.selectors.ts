import * as fromAppState from '../reducers';
import {createSelector} from "@ngrx/store";

export const selectInitialized = createSelector(
  fromAppState.selectAbilitiesState,
  (abilitiesState) => abilitiesState.initialized
);

export const selectDefaultRouterUrl = createSelector(
  fromAppState.selectAbilitiesState,
  (abilitiesState) => abilitiesState.defaultRouterUrl
);
