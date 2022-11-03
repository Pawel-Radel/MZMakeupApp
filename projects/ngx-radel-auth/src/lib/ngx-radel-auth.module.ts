import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {AuthConfig, OAuthModule, OAuthStorage} from "angular-oauth2-oidc";
import {UserRoleAbility} from "./model";
import {ABILITIES_CONFIG, AUTH_CONFIG} from "./services";
import {PureAbility} from "@casl/ability";
import {AppAbility, createAbility} from "./app-ability";
import {AppAbilityEffects, AuthEffects} from "./store/effects";
import {EffectsModule, USER_PROVIDED_EFFECTS} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  declarations: [
  ],
  imports: [
    OAuthModule,
    StoreModule,
    EffectsModule
  ]
})
export class NgxRadelAuthModule {

  constructor(@Optional() @SkipSelf() parentModule: NgxRadelAuthModule) {
    if (parentModule) {
      throw new Error('NgxRadelAuthModule is already loaded. Import it in the AppModule only!');
    }
  }

  static forRoot(authConfig: AuthConfig, abilitiesConfig?: Map<string, UserRoleAbility>): ModuleWithProviders<NgxRadelAuthModule> {
    return {
      ngModule: NgxRadelAuthModule,
      providers: [
        {
          provide: AUTH_CONFIG,
          useValue: authConfig
        },
        {
          provide: ABILITIES_CONFIG,
          useValue: abilitiesConfig
        },
        {provide: PureAbility, useExisting: AppAbility},
        {provide: AppAbility, useFactory: createAbility},
        {provide: OAuthStorage, useFactory: storageFactory},

        AuthEffects, AppAbilityEffects,
        {
          provide: USER_PROVIDED_EFFECTS,
          multi: true,
          useValue: [AuthEffects, AppAbilityEffects]
        }
      ]
    };
  }
}
