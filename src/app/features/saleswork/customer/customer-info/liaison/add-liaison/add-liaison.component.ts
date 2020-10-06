import { Component, OnInit } from '@angular/core';
import { autoUpdatingChartDemoOptions } from '@app/features/graphs/flot-charts/flot-examples';

@Component({
  selector: 'add-liaison',
  templateUrl: './add-liaison.component.html',
  styleUrls: ['./add-liaison.component.scss'],

})
export class AddLiaisonComponent implements OnInit {
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
        headerName: '聯絡人', 
        field: 'Liaison', 
        width: 150,
        cellRenderer: function(params) {
          return '<a href="https://www.google.com" target="_blank">'+ params.value+'</a>'
        }
      },
      {
        headerName: '部門/職稱', 
        field: 'Title',
        flex: 1,
      },
      {
        headerName: '聯絡電話',
        field: 'Tel',
        flex: 1,
      },
      {
        headerName: '行動電話', 
        field: 'CellPhone',
        flex: 1,
      },
      {
        headerName: '電子郵件', 
        field: 'Email',
        flex: 1,
      },
      {
        headerName: '聯絡人狀態', 
        field: 'StopRemark', 
        flex: 1,
        maxWidth: 150,
      },
      {
        headerName: '最後承辦人', 
        field: 'EnglishName',
        flex: 1,
      }
    ];

    this.rowData = [
      { no: '1', Liaison: '542312', Title: '本仁元股份有限公司', Tel: 'Bunlan', CellPhone: '42223487', liaison: '王大明', Email: '24273323#12345', StopRemark: 'CN', EnglishName: 'Penny'},
      { no: '2', Liaison: '478321', Title: '長安祥股份有限公司', Tel: 'Changan', CellPhone: '74823941', liaison: '張大發', Email: '24273323#245', StopRemark: 'TW', EnglishName: 'Penny'},
      { no: '3', Liaison: '323398', Title: '鼎宏聖股份有限公司', Tel: 'Dinhonson', CellPhone: '37857123', liaison: '李小美', Email: '24273323#362', StopRemark: 'CN', EnglishName: 'Penny'},
      { no: '4', Liaison: '946871', Title: '裕盛股份有限公司', Tel: 'Yuson', CellPhone: '47853214', liaison: '陳小英', Email: '24273323#214', StopRemark: 'TW',EnglishName: 'Penny'},
      { no: '5', Liaison: '872314', Title: '中宏股份有限公司', Tel: 'Chunghon', CellPhone: '28423798', liaison: '江大山', Email: '24273323#2752', StopRemark: 'TW',EnglishName: 'Penny'}
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

  close_liaison(){
    $('.add-liaison-container').hide();
  }
  ngOnInit() {
  }
  
}
