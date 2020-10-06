import { Component, OnInit } from '@angular/core';
import { DatepickerMinmaxComponent } from '@app/shared/datepicker/datepicker-minmax/datepicker-minmax.component';
import { Router } from '@angular/router';
import * as moment from 'moment';
// -------------
// import { HttpClient } from '@angular/common/http';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
// import { MenuModule } from '@ag-grid-enterprise/menu';
// import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
// import { DatePipe, DecimalPipe } from '@angular/common';
// import { ColDef } from 'ag-grid-community';
// import { MyLinkRendererComponent } from './my-link-renderer.component';
// import { ActivatedRoute } from '@angular/router';
// -------------
// @Component({
//   selector: 'sa-normal-tables',
//   template: `
//   <p>Selected OrderNo: {{this.OrderNo}}</p>
//   <ag-grid-angular
//     #agGrid
//     style="width: 100%; height: 100%;"
//     id="myGrid"
//     class="ag-theme-alpine"
//     [modules]="modules"
//     [columnDefs]="columnDefs"
//     [defaultColDef]="defaultColDef"
//     [rowData]="rowData"
//     [frameworkComponents]="frameworkComponents"
//     (gridReady)="onGridReady($event)"
//   ></ag-grid-angular>
// `,
//   templateUrl: './accounts-receivable.component.html',
//   styleUrls: ['./accounts-receivable.component.scss'],
// })
// -------------
@Component({
  selector: 'sa-normal-tables',
  templateUrl: './accounts-receivable.component.html',
  styleUrls: ['./accounts-receivable.component.scss'],
})


export class AccountsReceivableComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  private rowSelection;

  private frameworkComponents;

  // public modules: Module[] = [
  //   ClientSideRowModelModule,
  //   SetFilterModule,
  //   MenuModule,
  //   ColumnsToolPanelModule,
  // ];

  // -------------
  // OrderNo: string;
  // -------------

  // 原始內容-----------
  constructor() {
// -------------
  // constructor(private route: ActivatedRoute) {
  //   this.route.params.subscribe((params: { OrderNo: string }) => {this.OrderNo = params.OrderNo;});
// -------------
    this.rowSelection = 'multiple';
    this.defaultColDef = {
      editable: false,
      sortable: true,
      floatingFilter: true,
      filter: true,
      suppressMenu: true, 
      suppressSizeToFit: true,
      // -----------鎖住拖動
      lockPosition: true,  
      // --------------
      floatingFilterComponentParams: {suppressFilterButton:true}
    };
    this.columnDefs = [
      {
        headerName: '項次', 
        field: 'No',
        floatingFilter: false, 
        width: 100,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, 
      },
      {
        headerName: '交易單文號', 
        field: 'OrderNo',      
        maxWidth: 150,
        cellRenderer: function(params) {
          return '<a href="#" target="_blank">'+ params.value+'</a>'
        }
      },
      {
        headerName: '客戶編號',
        field: 'CustomerID',
        maxWidth: 100,
        cellRenderer: function(params) {
          return '<a href="#/saleswork/client/customer-info">'+ params.value+'</a>'
        }
      },
      {
        headerName: '客戶名稱', 
        field: 'FullName',
        minWidth: 160,
      },
      {
        headerName: '聯絡人', 
        field: 'LiaisonName',
        maxWidth: 125,
      },
      {
        headerName: '聯絡人電話', 
        field: 'LiaisonTel', 
        width: 150
      },
      {
        headerName: '交易日期',
        field: 'OrderDate',
        inRangeInclusive: true,
        minWidth: 100,

        valueFormatter: function (params) {
          return moment(params.value).format('YYYY/MM/DD');},

        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            // var dateAsString = moment(cellValue).format('YYYY/MM/DD');
            var dateAsString = cellValue;
            var dateParts = dateAsString.split('/');
            var cellDate = new Date(
              Number(dateParts[0]),
              Number(dateParts[1]) - 1,
              Number(dateParts[2])
            );
            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
        },
      },
      {
        headerName: 'Invoice', 
        field: 'Invoice',
        maxWidth: 125,
      },
      {
        headerName: '發票號碼', 
        field: 'GUINo',
        maxWidth: 125,
      },
      {
        headerName: '發票金額', 
       
       Invoice: '有', field: 'InvoiceTotal',
        maxWidth: 100,
      },
      {
        headerName: '發票開立日期', 
        field: 'InvoiceDate',
        inRangeInclusive:true,
        minWidth: 100,

        valueFormatter: function (params) {
          return moment(params.value).format('YYYY/MM/DD');},

        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            var dateParts = dateAsString.split('/');
            var cellDate = new Date(
              Number(dateParts[0]),
              Number(dateParts[1]) - 1,
              Number(dateParts[2])
            );
            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
        },
      },
      {
        headerName: '幣別', 
        field: 'CurrencyID',
        maxWidth: 100,
      },
      {
        headerName: '外幣總額', 
        field: 'DiscForeignAddTaxSum',
        maxWidth: 100,
      },
      {
        headerName: '含稅總額', 
        field: 'Total',
        maxWidth: 100,
      },
      {
        headerName: '未收代付款項(本地)', 
        field: 'UncollectedNdvancePayment',
        maxWidth: 180,
      },
      {
        headerName: '未收代付款項(外幣)', 
        field: 'UncollectedNdvancePaymentForeign',
        maxWidth: 180,
      },
      {
        headerName: '未收總額', 
        field: 'OverdueReceiBillCurr',
        maxWidth: 100,
      },
      {
        headerName: '最後應收帳款日期', 
        field: 'FinalReceivableDate',
        inRangeInclusive:true,
        minWidth: 100,

        valueFormatter: function (params) {
          return moment(params.value).format('YYYY/MM/DD');},

        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            var dateParts = dateAsString.split('/');
            var cellDate = new Date(
              Number(dateParts[0]),
              Number(dateParts[1]) - 1,
              Number(dateParts[2])
            );
            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
        },
      },
      {
        headerName: 'Assigner交件日期',
        field: 'AssignerDeliverDate',

        minWidth: 100,



        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            var dateParts = dateAsString.split('/');
            var cellDate = new Date(
              Number(dateParts[0]),
              Number(dateParts[1]) - 1,
              Number(dateParts[2])
            );
            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
        },
      },
      {
        headerName: '預計交件日期', 
        field: 'ExDelivDate',
        inRangeInclusive:true,
        minWidth: 100,

        valueFormatter: function (params) {
          return moment(params.value).format('YYYY/MM/DD');},

        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            var dateParts = dateAsString.split('/');
            var cellDate = new Date(
              Number(dateParts[0]),
              Number(dateParts[1]) - 1,
              Number(dateParts[2])
            );
            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
        },
      },

     
      // {
      //   headerName: '月結天數', 
      //   field: 'open_account_days',
      //   maxWidth: 100,
      // },
      // {
      //   headerName: '交件狀態', 
      //   field: 'delivery_status',
      //   maxWidth: 100,
      // },
      {
        headerName: '開立發票', 
        field: 'InvoiceIssue',
        maxWidth: 100,
      },
      {
        headerName: '業務組別', 
        field: 'SalesTeam',
        // filter: 'agSetColumnFilter',
        maxWidth: 125,
      },
      {
        headerName: '業務員', 
        field: 'EnglishName',
        maxWidth: 125,
      },
      {
        headerName: '業務員代號', 
        field: 'SalesRepID',
        maxWidth: 125,
      }
    ];
    this.rowData = [
      { 
        No: '1',
        SalesTeam: 'Coco Team',
        EnglishName: 'Sam',
        SalesRepID: '52114',
        OrderNo: 'WW9000458',
        CustomerID: 'C65441',
        FullName: '立清股份有限公司',
        LiaisonName: '陳水水',
        LiaisonTel: '02-5213363 #321', 
        OrderDate: '2020/06/03',
        AssignerDeliverDate: '2020/06/05',
        GUINo: 'ZS98754111',
        Invoice: '有',
        InvoiceTotal: '2,000',
        InvoiceDate: '2020/06/04',
        CurrencyID: '新台幣',
        DiscForeignAddTaxSum: '6,500',
        Total: '35,000',
        UncollectedNdvancePayment: '6,250',
        UncollectedNdvancePaymentForeign:'2,000',
        OverdueReceiBillCurr: '10,520',
        FinalReceivableDate: '2020/07/06',
        ExDelivDate: '2020/07/01',
        // open_account_days: '30',
        // delivery_status: 'N',
        InvoiceIssue:'N',
      },
      { 
        No: '2',
        SalesTeam: 'Coco Team',
        EnglishName: 'Sam',
        SalesRepID: '52114',
        OrderNo: 'WW9000251',
        CustomerID: 'C65442',
        FullName: '清乾股份有限公司',
        LiaisonName: '陳水波',
        LiaisonTel: '02-5213363 #321', 
        OrderDate: '2020/06/04',
        AssignerDeliverDate: '2020/06/05',
        GUINo: 'ZS98754111',
        Invoice: '有',
        InvoiceTotal: '2,000',
        InvoiceDate: '2020/06/06',
        CurrencyID: '新台幣',
        DiscForeignAddTaxSum: '6,500',
        Total: '35,000',
        UncollectedNdvancePayment: '6,250',
        UncollectedNdvancePaymentForeign:'2,000',
        OverdueReceiBillCurr: '10,520',
        FinalReceivableDate: '2020/07/08',
        ExDelivDate: '2020/07/02',
        InvoiceIssue:'Y',
      },
      { 
        No: '3',
        SalesTeam: 'Coco Team',
        EnglishName: 'Sam',
        SalesRepID: '52114',
        OrderNo: 'WW9000172',
        CustomerID: 'C65443',
        FullName: '清補竟股份有限公司',
        LiaisonName: '劉坡水',
        LiaisonTel: '02-5213363 #321', 
        OrderDate: '2020/06/05',
        AssignerDeliverDate: '2020/06/05',
        GUINo: 'ZS98754111',
        Invoice: '有',
        InvoiceTotal: '2,000',
        InvoiceDate: '2020/06/04',
        CurrencyID: '新台幣',
        DiscForeignAddTaxSum: '6,500',
        Total: '35,000',
        UncollectedNdvancePayment: '6,250',
        UncollectedNdvancePaymentForeign:'2,000',
        OverdueReceiBillCurr: '10,520',
        FinalReceivableDate: '2020/07/06',
        ExDelivDate: '2020/07/02',
        InvoiceIssue:'N',
      },
      { 
        No: '4',
        SalesTeam: 'BOSS Team',
        EnglishName: 'May',
        SalesRepID: '52116',
        OrderNo: 'WW9001250',
        CustomerID: 'C65441',
        FullName: '立清股份有限公司',
        LiaisonName: '陳水水',
        LiaisonTel: '02-5213363 #321', 
        OrderDate: '2020/06/09',
        AssignerDeliverDate: '2020/06/05',
        GUINo: 'ZS98754111',
        Invoice: '有',
        InvoiceTotal: '2,000',
        InvoiceDate: '2020/06/05',
        CurrencyID: '新台幣',
        DiscForeignAddTaxSum: '6,500',
        Total: '35,000',
        UncollectedNdvancePayment: '6,250',
        UncollectedNdvancePaymentForeign:'2,000',
        OverdueReceiBillCurr: '10,520',
        FinalReceivableDate: '2020/07/10',
        ExDelivDate: '2020/07/01',
        InvoiceIssue:'Y',
      },
      { 
        No: '5',
        SalesTeam: 'BOSS Team',
        EnglishName: 'May',
        SalesRepID: '52116',
        OrderNo: 'WW9000151',
        CustomerID: 'C65441',
        FullName: '立清股份有限公司',
        LiaisonName: '陳水水',
        LiaisonTel: '02-5213363 #321', 
        OrderDate: '2020/07/09',
        AssignerDeliverDate: '2020/06/05',
        GUINo: 'ZS98754111',
        Invoice: '有',
        InvoiceTotal: '2,000',
        InvoiceDate: '2020/06/06',
        CurrencyID: '新台幣',
        DiscForeignAddTaxSum: '6,500',
        Total: '35,000',
        UncollectedNdvancePayment: '6,250',
        UncollectedNdvancePaymentForeign:'2,000',
        OverdueReceiBillCurr: '10,520',
        FinalReceivableDate: '2020/07/06',
        ExDelivDate: '2020/07/03',
        InvoiceIssue:'Y',
      }
    ]
  }


// -------------
  // setColumns(columns: string[]) {
  //   columns.forEach((column: string) => {
  //     let definition: ColDef = {};
  //     if (column === 'OrderNo') {
  //       definition.cellRendererFramework = MyLinkRendererComponent;
  //       definition.cellRendererParams = {
  //         inRouterLink: column,
  //       };
  //     } 
  //     this.columnDefs.push(definition);
  //   });
  // }
// -------------


  
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
  }

}
