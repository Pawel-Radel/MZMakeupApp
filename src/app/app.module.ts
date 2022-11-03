import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ActionReducer, MetaReducer} from "@ngrx/store";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {NavbarComponent} from './layouts/navbar/navbar/navbar.component';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const metaReducers: MetaReducer<any>[] = [debug];

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('[STORE] state', state);
    console.log('[STORE] action ', action.type);

    return reducer(state, action);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentLayoutComponent,
    FooterComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
