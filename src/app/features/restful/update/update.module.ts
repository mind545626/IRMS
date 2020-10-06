import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from "@app/features/restful/update/update.component";
import { SharedModule } from "@app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
      UpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UpdateRoutingModule,
    ReactiveFormsModule
  ]
})
export class UpdateModule { }
