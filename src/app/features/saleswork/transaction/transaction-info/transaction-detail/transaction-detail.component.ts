import { Component, OnInit } from '@angular/core';
import { JsonApiService } from '@app/core/services';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],

})
export class TransactionDetailComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  private rowSelection;

  constructor( private jsonApiService:JsonApiService) {
    
    this.defaultColDef = {
      editable: false,
      sortable: true,
      filter: true,
      suppressMenu: true, 
    };
    this.columnDefs = [
      {
        headerName: '項次', 
        field: 'no',
        filter: false,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, 
        width: 100,
      },
      {
        headerName: '文件名稱', 
        field: 'MatlDescpDomestic', 
      },
      {
        headerName: '服務別', 
        field: 'OrderType',
        width: 150,
      },
      {
        headerName: '原文',
        field: 'LanguageF',
      },
      {
        headerName: '譯文', 
        field: 'LanguageT',
      },
      {
        headerName: '數量/單位', 
        field: 'AllWords', 
      },
      {
        headerName: '單價', 
        field: 'Price',
        width: 150,
      },
      {
        headerName: '小計', 
        field: 'Total',
        width: 150,
      },
      {
        headerName: '外幣小計', 
        field: 'DiscForeignAddTaxSum',
        width: 150,
      },
      {
        headerName: '類', 
        field: 'DiscForeignAddTaxSum',
      },
      {
        headerName: '型', 
        field: 'DiscForeignAddTaxSum',
      },
      {
        headerName: 'Assigner', 
        field: 'AssignerName', 
      },
      {
        headerName: 'Assigner交件日期', 
        field: 'AssignerDeliverDate', 
      },
      {
        headerName: 'Sales交件日期', 
        field: 'ExDelivDate', 
      },
    ];
    this.rowSelection = 'multiple';
  }
  Date1 = new FormControl((new Date('2020/08/31')).toISOString());
  Date2 = new FormControl((new Date('2020/07/17')).toISOString());
  Date3 = new FormControl((new Date('2020/06/10')).toISOString());
  /*-- grid響應式設定 START --*/
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  add_detail(){
    $('#add_detail').show();
  }
  modify_detail(){
    $('#modify_detail').show();
  }
  add_payment(){
    $('#add_payment').show();
  }
  
  /*-- grid響應式設定 END --*/
  ngOnInit() {
    this.jsonApiService.fetch('/gtais/transaction.json').subscribe(data=> {
      this.rowData = data;
    })
  }
  
}
