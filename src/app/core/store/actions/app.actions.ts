import { createAction, props } from '@ngrx/store';

export const navigateTo = createAction(
  '[Application] Change router url',
  props<{ path: string }>()
);
