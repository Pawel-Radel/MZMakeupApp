import {AppUser} from "../../model";
import {createReducer, on} from "@ngrx/store";

export const userFeatureKey = 'user';
import * as UserActions from '../actions';

export interface State {
  details: AppUser | null;
  initialized: boolean;
}

export const initialState: State = {
  details: null,
  initialized: false
};

export const reducer = createReducer(
  initialState,
  on(UserActions.setUser, ((state, props: { data: AppUser | null }) => ({
    ...state,
    details: props.data,
    initialized: true
  }))),
  on(UserActions.notAuthorized, (state) => ({
    ...state,
    initialized: true
  }))
);
