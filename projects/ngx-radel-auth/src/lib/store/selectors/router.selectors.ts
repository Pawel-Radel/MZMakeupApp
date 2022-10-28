import {getSelectors} from "@ngrx/router-store";
import * as fromAppState from '../reducers';

export const {
  selectQueryParams,    // select the current route query params
  selectRouteParams,    // select the current route params
  selectRouteData,      // select the current route data
  selectUrl            // select the current url
} = getSelectors(fromAppState.selectRouterState);
