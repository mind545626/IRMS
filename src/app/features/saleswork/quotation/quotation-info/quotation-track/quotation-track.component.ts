import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'quotation-track',
  templateUrl: './quotation-track.component.html',
  styleUrls: ['./quotation-track.component.scss'],
  
})

export class QuotationTrackComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  private rowSelection;
  
  constructor() {
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
  ngOnInit() {
    
  }
  
  Date1 = new FormControl((new Date('2020/08/31')).toISOString());
  Date2 = new FormControl((new Date('2020/07/17')).toISOString());
  Date3 = new FormControl((new Date('2020/06/10')).toISOString());
  pop_show(){
    $('.pop-wrapper').show();
  }
  pop_hide(){
    $('.pop-wrapper').hide();
  }
}
