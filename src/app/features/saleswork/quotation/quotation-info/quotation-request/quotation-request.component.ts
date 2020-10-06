import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quotation-request',
  templateUrl: './quotation-request.component.html',
  styleUrls: ['./quotation-request.component.scss'],
})

export class QuotationRequestComponent implements OnInit {
  constructor() {
    
  }
  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
  
}
