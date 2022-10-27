import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OAuthModule} from "angular-oauth2-oidc";
import {authConfig} from "./config";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OAuthModule.forRoot({resourceServer: authConfig.resourceServerConfig}),

  ]
})
export class AuthModule { }
