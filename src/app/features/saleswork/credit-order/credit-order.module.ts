import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditOrderComponent } from './credit-order.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    RouterModule.forChild([{
      path: '', component: CreditOrderComponent
    }]),
    AgGridModule.withComponents([
      CreditOrderComponent
    ]),
  ],
  declarations: [
    CreditOrderComponent
  ]
  
})
export class CreditOrderModule { 
  clear_filter(){

  }
}
