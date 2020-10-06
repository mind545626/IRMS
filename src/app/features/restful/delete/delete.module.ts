import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from "@app/features/restful/delete/delete.component";
import { SharedModule } from "@app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DeleteRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DeleteModule { }
