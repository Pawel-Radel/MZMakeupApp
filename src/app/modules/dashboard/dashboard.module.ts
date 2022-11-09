import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import { AboutMeComponent } from './pages/about-me/about-me.component';
import {SharedModule} from "../../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import { PriceListComponent } from './pages/price-list/price-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutMeComponent,
    PriceListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
