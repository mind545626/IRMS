import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import { NewCustomerComponent } from './new-customer.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule,MatRadioModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    MatRadioModule,
    AgGridModule.withComponents([
      NewCustomerComponent
    ]),
    RouterModule.forChild([{
      path: '', component: NewCustomerComponent
    }])
  ],
  declarations: [
    NewCustomerComponent
  ]
})
export class NewCustomerModule { }
