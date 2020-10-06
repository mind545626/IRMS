import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { TransactionInfoComponent } from './transaction-info.component';
import { TransactionInvoiceComponent } from './transaction-invoice/transaction-invoice.component'
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { WriteOffComponent} from './write-off/write-off.component';
import { ReviewComponent } from './review/review.component'
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule,MatSortModule,MatRadioModule,MatTabsModule,MatExpansionModule,MatNativeDateModule, MatTableModule,MatRippleModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import {QuotationRequestModule } from "../../quotation/quotation-info/quotation-request/quotation-request.module"

import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import {StepsModule} from 'primeng/steps';
import {CalendarModule} from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import {RatingModule} from 'primeng/rating';




@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatRadioModule,
    MatTabsModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSortModule, 
    MatTableModule,
    MatRippleModule,
    MultiSelectModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    StepsModule,
    AccordionModule,
    RatingModule,
    QuotationRequestModule,
    AgGridModule.withComponents([
      TransactionInfoComponent
    ]),
    RouterModule.forChild([{
      path: '', component: TransactionInfoComponent
    }])
  ],
  declarations: [
      TransactionInfoComponent,
      TransactionInvoiceComponent,
      TransactionDetailComponent,
      WriteOffComponent,
      ReviewComponent 
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' }
  ],
})
export class TransactionInfoModule { }
