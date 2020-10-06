//angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

//Others
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {CustomerService} from '@app/core/services/customerservice';


@NgModule({
  imports: [
    SharedModule,
    TransactionRoutingModule,
    MatDatepickerModule,
    RouterModule.forChild([{
      path: '', component: TransactionComponent
    }]),
    AgGridModule.withComponents([
      TransactionComponent
    ]),
  ],
  declarations: [
    TransactionComponent
  ],
  providers: [CustomerService]
})
export class TransactionModule { }
