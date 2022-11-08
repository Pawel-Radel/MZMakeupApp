import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {NavbarComponent} from './layouts/navbar/navbar/navbar.component';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CarouselComponent} from './layouts/navbar/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentLayoutComponent,
    FooterComponent,
    CarouselComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CarouselModule,
    FlexLayoutModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
