import { createAction, props } from '@ngrx/store';
import { AppUser } from '../../model';

export const setUser = createAction(
  '[User] Set user',
  props<{ data: AppUser | null }>()
);
