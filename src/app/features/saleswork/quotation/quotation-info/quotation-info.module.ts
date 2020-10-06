import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { QuotationInfoComponent } from './quotation-info.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { QuotationRequestModule } from "./quotation-request/quotation-request.module"
import { QuotationTrackComponent } from "./quotation-track/quotation-track.component";
import { QuotationTransferComponent } from "./quotation-transfer/quotation-transfer.component";
import { QuotationDetailComponent } from "./quotation-detail/quotation-detail.component";
import { AddDetailComponent } from './quotation-detail/add-detail/add-detail.component';
import { AddPaymentComponent } from './quotation-detail/add-payment/add-payment.component';
import { ModifyDetailComponent } from './quotation-detail/modify-detail/modify-detail.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule,MatSortModule,MatRadioModule,MatTabsModule,MatExpansionModule,MatNativeDateModule, MatTableModule,MatRippleModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from "@angular/material/core";



@NgModule({
  imports: [
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
    FormsModule,
    QuotationRequestModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([
      QuotationInfoComponent
    ]),
    RouterModule.forChild([{
      path: '', component: QuotationInfoComponent
    }])
  ],
  declarations: [
    QuotationInfoComponent,
    QuotationTrackComponent,
    QuotationDetailComponent,
    QuotationTransferComponent,
    AddDetailComponent,
    AddPaymentComponent,
    ModifyDetailComponent,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' }
  ],
})
export class QuotationInfoModule { }
