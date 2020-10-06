import { Component, OnInit } from '@angular/core';
import { autoUpdatingChartDemoOptions } from '@app/features/graphs/flot-charts/flot-examples';
import { JsonApiService } from '@app/core/services';
@Component({
  selector: 'quotation-transfer',
  templateUrl: './quotation-transfer.component.html',
  styleUrls: ['./quotation-transfer.component.scss'],
})

export class QuotationTransferComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  private rowSelection;

  constructor(private jsonApiService:JsonApiService) {
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
        flex: 1.5
      },
      {
        headerName: '服務別', 
        field: 'OrderType',
        flex: 1
      },
      {
        headerName: '原文',
        field: 'LanguageF',
        flex: 1
      },
      {
        headerName: '譯文', 
        field: 'LanguageT',
        flex: 1
      },
      {
        headerName: 'Assigner', 
        field: 'AssignerName', 
        flex: 1
      },
      {
        headerName: 'Assigner交件日期', 
        field: 'AssignerDeliverDate', 
        flex: 1
      },
      {
        headerName: 'Sales交件日期', 
        field: 'ExDelivDate', 
        flex: 1
      },
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
  pop_show(){
    $('.pop-wrapper').show();
  }
  pop_hide(){
    $('.pop-wrapper').hide();
  }
  ngOnInit() {
    this.jsonApiService.fetch('/gtais/transaction.json').subscribe(data=> {
      this.rowData = data;
    })
  }
  
}
