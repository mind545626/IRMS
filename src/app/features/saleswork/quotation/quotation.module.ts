//angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';


//others
import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationComponent } from './quotation.component';
import { SharedModule } from '@app/shared/shared.module';
import {CustomerService} from '@app/core/services/customerservice';

@NgModule({
  imports: [
    SharedModule,
    QuotationRoutingModule,
    MatDatepickerModule,
    RouterModule.forChild([{
      path: '', component: QuotationComponent
    }]),
    AgGridModule.withComponents([
      QuotationComponent
    ]),
  ],
  declarations: [
    QuotationComponent
  ],
  providers: [CustomerService]
  
})
export class QuotationModule { 
 
}
