import { createAction, props } from '@ngrx/store';

export const refreshAbilities = createAction(
  '[Abilities] Refresh',
  props<{ userRoles: string[] }>()
);

export const updateAbilitiesSuccess = createAction(
  '[Abilities] Update success',
  props<{ params: {defaultRouterUrl: string} }>()
);
