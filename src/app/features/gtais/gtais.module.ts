import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GtaisRoutingModule } from './gtais-routing.module';
import { GtaisComponent } from "@app/features/gtais/gtais.component";

@NgModule({
  declarations: [
    GtaisComponent
  ],
  imports: [
    CommonModule,
    GtaisRoutingModule
  ]
})
export class GtaisModule { }
