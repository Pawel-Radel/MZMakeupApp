import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {PriceListComponent} from "./pages/price-list/price-list.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'aboutMe',
    component: AboutMeComponent
  },
  {
    path: 'priceList',
    component: PriceListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
