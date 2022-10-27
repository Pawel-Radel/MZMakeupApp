import { AuthConfig, OAuthResourceServerConfig } from 'angular-oauth2-oidc';
import {environment} from '../../../../environments/environment';

export const authConfig = {
  authConfig: {
    issuer: environment.auth.issuer,
    skipIssuerCheck: false,
    redirectUri: window.location.origin,
    clientId: environment.auth.clientId,
    responseType: 'code',
    scope: 'openid profile email',
    useSilentRefresh: false,
    showDebugInformation: true,
    sessionChecksEnabled: false,
    clearHashAfterLogin: false,
    timeoutFactor: 0.1
  },
  resourceServerConfig: {
    allowedUrls: [environment.serverUrl],
    sendAccessToken: true
  }
} as { authConfig: AuthConfig, resourceServerConfig: OAuthResourceServerConfig };
