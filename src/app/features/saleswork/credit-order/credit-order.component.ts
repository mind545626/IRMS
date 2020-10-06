import { Component, OnInit } from '@angular/core';
import { DatepickerMinmaxComponent } from '@app/shared/datepicker/datepicker-minmax/datepicker-minmax.component';
import { EmailTemplateRoutingModule } from '@app/features/miscellaneous/email-template/email-template-routing.module';

@Component({
  selector: 'credit-order',
  templateUrl: './credit-order.component.html',
  styleUrls: ['./credit-order.component.scss'],
})
export class CreditOrderComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  private rowSelection;
 
  constructor() {
    this.rowSelection = 'multiple';
    this.defaultColDef = {
      editable: false,
      sortable: true,
      floatingFilter: true,
      filter: true,
      suppressMenu: true, 
      suppressSizeToFit: true,
      lockPosition: true,  
      floatingFilterComponentParams: {suppressFilterButton:true}
    };
    this.columnDefs = [
      {
        headerName: '項次', 
        field: 'no',
        floatingFilter: false, 
        headerCheckboxSelection: false,
        headerCheckboxSelectionFilteredOnly: false,
        width: 80
      },
      {
        headerName: '估價單狀態', 
        field: 'BillStatus', 
        width: 125,
      },
     
      {
        headerName: '客戶編號',
        field: 'CustomerID',
        cellRenderer: function(params) {
          return '<a href="#/saleswork/client/customer-info">'+ params.value+'</a>'
        },
        maxWidth: 150,
      },
      {
        headerName: '客戶名稱', 
        field: 'FullName',
      },
      {
        headerName: '客戶電話', 
        field: 'Tel', 
        width: 200
      },
      {
        headerName: '聯絡人', 
        field: 'LiaisonName',
        maxWidth: 150,
      },
      {
        headerName: '聯絡人行動電話', 
        field: 'CellPhone',
      },
      {
        headerName: '電子信箱', 
        field: 'Email',
        cellRenderer: function(params) {
          return '<a href="mailto:abcde123@email.com" target="_blank">'+ params.value+'</a>'
        }
      },
      {
        headerName: '稅前總額', 
        field: 'Amount',
        maxWidth: 100,
      },
      {
        headerName: '稅後總額', 
        field: 'Total',
        maxWidth: 100,
      },
      {
        headerName: '幣別', 
        field: 'CurrencyID',
        maxWidth: 150,
      },
      {
        headerName: '外幣總額', 
        field: 'CurrencyIDTotal',
        maxWidth: 100,
      },
      {
        headerName: '估價日期', 
        field: 'QuotDate',
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
            };
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            };
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          }
        }
      },
      {
        headerName: '業務員', 
        field: 'EnglishName',
        maxWidth: 150,
      },
      {
        headerName: '追蹤狀況', 
        field: 'FollowContent',
      }
    ];

    this.rowData = [
      { 
        no: '1',
        BillStatus: '已估價', 
        QuotID:'202010285102', 
        QuotDate:'2020/07/20', 
        CustomerID: '542312', 
        FullName: '本仁元股份有限公司', 
        LiaisonName: '王大明',
        Tel: '22334455#12345',
        Amount: '1,000',
        Total: '1,200', 
        CurrencyID: '台幣',
        CurrencyIDTotal: '3,000',
        EnglishName: 'Sam',
        CellPhone:'0955-098555',
        Email:'mail@wugwei.com'
      },
      { 
        no: '2',
        BillStatus: '已估價', 
        QuotID:'202020285337', 
        QuotDate:'2020/07/21', 
        CustomerID: '542312', 
        FullName: '本仁元股份有限公司', 
        LiaisonName: '王大明',
        Tel: '22334455#12345',
        Amount: '1,000',
        Total: '1,200', 
        CurrencyID: '台幣',
        CurrencyIDTotal: '3,000',
        EnglishName: 'Sam',
        CellPhone:'0955-098555',
        Email:'mail@wugwei.com'
      },
      { 
        no: '3',
        BillStatus: '已估價', 
        QuotID:'202010283270', 
        QuotDate:'2020/07/22', 
        CustomerID: '542312', 
        FullName: '本仁元股份有限公司', 
        LiaisonName: '王大明',
        Tel: '22334455#12345',
        Amount: '1,000',
        Total: '1,200', 
        CurrencyID: '台幣',
        CurrencyIDTotal: '3,000',
        EnglishName: 'Sam',
        CellPhone:'0955-998755',
        Email:'mail01@wugwei.com'
      },
      { 
        no: '4',
        BillStatus: '已估價', 
        QuotID:'202010285319', 
        QuotDate:'2020/07/19', 
        CustomerID: '542312', 
        FullName: '本仁元股份有限公司', 
        LiaisonName: '王大明',
        Tel: '22334455#12345',
        Amount: '1,000',
        Total: '1,200', 
        CurrencyID: '台幣',
        CurrencyIDTotal: '3,000',
        EnglishName: 'Sam',
        CellPhone:'0955-054255',
        Email:'mail03@wugwei.com'
      },
      { 
        no: '5',
        BillStatus: '已估價', 
        QuotID:'202010285274', 
        QuotDate:'2020/07/18', 
        CustomerID: '542312', 
        FullName: '本仁元股份有限公司', 
        LiaisonName: '王大明',
        Tel: '22334455#12345',
        Amount: '1,000',
        Total: '1,200', 
        CurrencyID: '台幣',
        CurrencyIDTotal: '3,000',
        EnglishName: 'Sam',
        CellPhone:'0965-098555',
        Email:'text@ggmail.com'
      }
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
  }

}
