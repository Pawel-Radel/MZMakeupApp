import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
  ],
  exports: [
    MaterialModule,
    FlexModule,
  ]
})
export class SharedModule {
}
