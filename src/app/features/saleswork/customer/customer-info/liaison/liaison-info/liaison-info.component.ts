import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'liaison-info',
  templateUrl: './liaison-info.component.html',
  styleUrls: ['./liaison-info.component.scss'],

})
export class LiaisonInfoComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  myVar1 = false;
  myVar2 = false;
  myVar3 = false;
  constructor() {
    
  }
  /*-- grid響應式設定 START --*/
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  /*-- grid響應式設定 END --*/
  Birth = new FormControl((new Date('1981/11/27')).toISOString());
  Date1 = new FormControl((new Date('2020/09/01')).toISOString());
  Date2 = new FormControl((new Date('2020/08/27')).toISOString());
  Date3 = new FormControl((new Date('2020/08/10')).toISOString());
  Date11 = new FormControl((new Date('2020/12/27')).toISOString());
  Date22 = new FormControl((new Date('2020/11/27')).toISOString());
  Date33 = new FormControl((new Date('2020/09/10')).toISOString());
  AddDate = new FormControl((new Date('2020/06/10')).toISOString());
  QuoDate = new FormControl((new Date('2020/06/19')).toISOString());
  TradeDate = new FormControl((new Date('2020/06/24')).toISOString());
  SentDate = new FormControl((new Date('2020/01/12')).toISOString());
  
  close_liaison(){
    $('.liaison-info-container').hide();
  }
  ngOnInit() {
    
  }
  
}
