import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import { NewQuotationComponent } from './new-quotation.component';
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
      NewQuotationComponent
    ]),
    RouterModule.forChild([{
      path: '', component: NewQuotationComponent
    }])
  ],
  declarations: [
    NewQuotationComponent
  ]
})
export class NewQuotationModule { }
