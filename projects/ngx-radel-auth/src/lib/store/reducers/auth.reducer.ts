import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions';
import { AuthProperties } from '../../model';

export const authFeatureKey = 'auth';

export interface State {
  initialized: boolean;
  redirectToLoginWhenNotAuthorized: boolean;
  skipBasedOnTokenAbilities: boolean;
}

export const initialState: State = {
  initialized: false,
  redirectToLoginWhenNotAuthorized: false,
  skipBasedOnTokenAbilities: false
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.setupAuth, ((state, props: AuthProperties ) => ({
    ...state,
    initialized: false,
    redirectToLoginWhenNotAuthorized: props.redirectToLoginWhenNotAuthorized || false,
    skipBasedOnTokenAbilities: props.skipBasedOnTokenAbilities || false
  }))),
  on(AuthActions.loadDiscoveryDocumentSuccess, (state => ({
    ...state,
    initialized: true
  }))),
);
