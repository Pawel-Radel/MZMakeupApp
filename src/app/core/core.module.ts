import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OAuthModule} from "angular-oauth2-oidc";
import {AuthModule} from "./auth/auth.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers} from "../app.module";
import {EffectsModule} from "@ngrx/effects";
import {CORE_EFFECTS} from "./store";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    StoreModule.forRoot({}, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot(CORE_EFFECTS),
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import CoreModule modules in the AppModule only.`);
    }
  }
}
