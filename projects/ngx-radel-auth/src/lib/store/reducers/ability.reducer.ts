import { createReducer, on } from '@ngrx/store';
import * as AbilityActions from '../actions/ability.actions';

export const abilitiesFeatureKey = 'abilities';

export interface State {
  defaultRouterUrl: string | null;
  initialized: boolean;
}

export const initialState: State = {
  defaultRouterUrl: null,
  initialized: false
};

export const reducer = createReducer(
  initialState,
  on(AbilityActions.refreshAbilities, (state => ({
    ...state,
    initialized: false,
    defaultRouterUrl: null
  }))),
  on(AbilityActions.updateAbilitiesSuccess, ((state, props: { params: { defaultRouterUrl: string } }) => ({
    ...state,
    initialized: true,
    defaultRouterUrl: props.params.defaultRouterUrl
  }))),
);
