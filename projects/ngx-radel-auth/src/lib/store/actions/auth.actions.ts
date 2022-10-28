import { createAction, props } from '@ngrx/store';
import { AuthProperties } from '../../model';

export const setupAuth = createAction(
  '[Auth] Setup',
  props<AuthProperties>()
);

export const missingConfig = createAction(
  '[Auth] Missing configuration'
);

export const loadDiscoveryDocument = createAction(
  '[Auth] Load discovery document'
);

export const loadDiscoveryDocumentSuccess = createAction(
  '[Auth] Load discovery document success'
);

export const notAuthorized = createAction(
  '[Auth] Not authorized'
);

export const refreshToken = createAction(
  '[Auth] Refresh token'
);

export const refreshTokenError = createAction(
  '[Auth] Refresh token error'
);

export const getToken = createAction(
  '[Auth] Get token'
);

export const logout = createAction(
  '[Auth] Log out'
);

export const tokenReceived = createAction(
  '[Auth] Token received'
);
