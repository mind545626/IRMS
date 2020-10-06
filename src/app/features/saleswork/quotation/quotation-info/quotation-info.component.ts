import { Component, OnInit } from '@angular/core';
import { autoUpdatingChartDemoOptions } from '@app/features/graphs/flot-charts/flot-examples';

@Component({
  selector: 'sa-normal-tables',
  templateUrl: './quotation-info.component.html',
  styleUrls: ['./quotation-info.component.scss'],

})
export class QuotationInfoComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  myVar1 = false;
  myVar2 = false;
  myVar3 = false;
  constructor() {
    this.defaultColDef = {
      editable: true,
      sortable: true,
      floatingFilter: true,
      filter: true,
      suppressMenu: true, 
      suppressSizeToFit: true,
      floatingFilterComponentParams: {suppressFilterButton:true},
    };
    this.columnDefs = [
      {
        headerName: '項次', 
        field: 'no',
        floatingFilter: false, 
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, width: 100
      },
      {
        headerName: '客戶編號', 
        field: 'client_no', 
        width: 150,
        flex: 1,
        cellRenderer: function(params) {
          return '<a href="https://www.google.com" target="_blank">'+ params.value+'</a>'
        }
      },
      {
        headerName: '客戶名稱', 
        field: 'client_name',
        flex: 2,
      },
      {
        headerName: '客戶名稱(外文）',
        field: 'client_alias',
        flex: 1,
      },
      {
        headerName: '統編/稅號', 
        field: 'tax_id',
        flex: 1,
      },
      {
        headerName: '聯絡人', 
        field: 'liaison',
        flex: 1,
      },
      {
        headerName: '聯絡人電話', 
        field: 'liaison_phone', 
        width: 200
      },
      {
        headerName: '地區', 
        field: 'area',
        maxWidth: 100,
        flex: 1,
      }
    ];

    this.rowData = [
      { no: '1', client_no: '542312', client_name: '本仁元股份有限公司', client_alias: 'Bunlan', tax_id: '42223487', liaison: '王大明', liaison_phone: '24273323#12345', area: 'CN'},
      { no: '2', client_no: '478321', client_name: '長安祥股份有限公司', client_alias: 'Changan', tax_id: '74823941', liaison: '張大發', liaison_phone: '24273323#245', area: 'TW'},
      { no: '3', client_no: '323398', client_name: '鼎宏聖股份有限公司', client_alias: 'Dinhonson', tax_id: '37857123', liaison: '李小美', liaison_phone: '24273323#362', area: 'CN'},
      { no: '4', client_no: '946871', client_name: '裕盛股份有限公司', client_alias: 'Yuson', tax_id: '47853214', liaison: '陳小英', liaison_phone: '24273323#214', area: 'TW'},
      { no: '5', client_no: '872314', client_name: '中宏股份有限公司', client_alias: 'Chunghon', tax_id: '28423798', liaison: '江大山', liaison_phone: '24273323#2752', area: 'TW'}
    ]
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

  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
  
}
