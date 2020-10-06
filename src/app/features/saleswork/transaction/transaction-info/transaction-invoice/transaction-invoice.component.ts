import { Component, OnInit } from '@angular/core';
import { autoUpdatingChartDemoOptions } from '@app/features/graphs/flot-charts/flot-examples';

@Component({
  selector: 'transaction-invoice',
  templateUrl: './transaction-invoice.component.html',
  styleUrls: ['./transaction-invoice.component.scss'],
})

export class TransactionInvoiceComponent implements OnInit {
  constructor() {
    
  }
 
  pop_show(){
    $('.pop-wrapper').show();
  }
  pop_hide(){
    $('.pop-wrapper').hide();
  }
  ngOnInit() {
  }
  
}
