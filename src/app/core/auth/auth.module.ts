import { NgModule } from '@angular/core';
import {OAuthModule, OAuthStorage} from "angular-oauth2-oidc";
import {abilitiesConfig, authConfig} from "./config";
import {AbilityModule} from "@casl/angular";
import {StoreModule} from "@ngrx/store";
import {ngxRadelAuthFeatureKey, ngxRadelAuthReducers} from "../../../../projects/ngx-radel-auth/src/lib/store/reducers";
import {NgxRadelAuthModule, storageFactory} from "../../../../projects/ngx-radel-auth/src/lib/ngx-radel-auth.module";

@NgModule({
  declarations: [],
  imports: [
    AbilityModule,
    OAuthModule.forRoot({resourceServer: authConfig.resourceServerConfig}),

    StoreModule.forFeature(ngxRadelAuthFeatureKey, ngxRadelAuthReducers),

    NgxRadelAuthModule.forRoot(authConfig.authConfig, abilitiesConfig),
  ],
  providers: [
    {provide: OAuthStorage, useFactory: storageFactory}
  ]
})
export class AuthModule { }
