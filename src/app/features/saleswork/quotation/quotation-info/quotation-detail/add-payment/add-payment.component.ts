import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss'],

})
export class AddPaymentComponent implements OnInit {

  constructor() {
    
  }
  close_detail(){
    $('#add_payment').hide();
  }
  ngOnInit() {
  }
}
