import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { InsertRoutingModule } from './insert-routing.module';
import { InsertComponent } from "@app/features/restful/insert/insert.component";

@NgModule({
  declarations: [
    InsertComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InsertRoutingModule,
    ReactiveFormsModule,
  ]
})
export class InsertModule { }
