import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuotationRequestComponent} from './quotation-request.component'




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    QuotationRequestComponent
  ],
  exports: [QuotationRequestComponent],
  
})
export class QuotationRequestModule { }
