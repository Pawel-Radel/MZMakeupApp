import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContentLayoutComponent} from "./layouts/content-layout/content-layout.component";

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
