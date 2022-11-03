import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import { AboutMeComponent } from './pages/about-me/about-me.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
