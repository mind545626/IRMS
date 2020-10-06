import { Component, OnInit } from '@angular/core';
import { JsonApiService } from '@app/core/services';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'quotation-detail',
  templateUrl: './quotation-detail.component.html',
  styleUrls: ['./quotation-detail.component.scss'],

})
export class QuotationDetailComponent implements OnInit {
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
        rowDrag: true,
      },
      {
        headerName: '文件名稱', 
        field: 'MatlDescpDomestic', 
      },
      {
        headerName: '服務別', 
        field: 'OrderType',
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
      },
      {
        headerName: '小計', 
        field: 'Total',
      },
      {
        headerName: '折扣後單價', 
        field: 'Total',
      },
      {
        headerName: '折扣後小計', 
        field: 'Total',
      },
      {
        headerName: '外幣單價', 
        field: 'DiscForeignAddTaxSum',
      },
      {
        headerName: '外幣小計', 
        field: 'DiscForeignAddTaxSum',
      },
      {
        headerName: '折扣後外幣單價', 
        field: 'DiscForeignAddTaxSum',
      },
      {
        headerName: '折扣後外幣小計', 
        field: 'DiscForeignAddTaxSum',
      },
      {
        headerName: '類', 
        field: 'DiscForeignAddTaxSum',
      },
      {
        headerName: '型', 
        field: 'DiscForeignAddTaxSum',
      }
    ];
    this.rowSelection = 'multiple';
  }
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
  Date1 = new FormControl((new Date('2020/08/31')).toISOString());
  Date2 = new FormControl((new Date('2020/07/17')).toISOString());
  Date3 = new FormControl((new Date('2020/06/10')).toISOString());
  
  /*-- grid響應式設定 END --*/
  ngOnInit() {
    this.jsonApiService.fetch('/gtais/transaction.json').subscribe(data=> {
      this.rowData = data;
    })
  }
  
}
