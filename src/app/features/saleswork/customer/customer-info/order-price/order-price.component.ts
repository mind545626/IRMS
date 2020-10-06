import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { EditContentComponent } from '../visit-history/edit-content.component';

@Component({
  selector: 'order-price',
  templateUrl: './order-price.component.html',
  styleUrls: ['./order-price.component.scss'],

})
export class OrderPriceComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  private frameworkComponents;
  
  constructor() {
    this.defaultColDef = {
      editable: false,
      sortable: true,
      floatingFilter: true,
      filter: true,
      suppressMenu: true, 
      suppressSizeToFit: true,
      floatingFilterComponentParams: {suppressFilterButton:true},
    };
    this.frameworkComponents = {
      editContent: EditContentComponent,
    };
    this.columnDefs = [
      {
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, 
        filter: false,
        headerName: '項次', 
        field: 'no', 
        width: 100,
      },
      {
        headerName: '原文', 
        field: 'LanguageF', 
        flex: 1,
      },
      {
        headerName: '譯文', 
        field: 'LanguageT', 
        flex: 1,
      },
      {
        headerName: '聯絡人',
        field: 'Liasion',
        flex: 1,
      },
      {
        headerName: '單價', 
        field: 'Price', 
        flex: 1,
      },
      {
        headerName: '功能', 
        cellRenderer: 'editContent',
        field: 'function', 
        floatingFilter: false, 
        width: 120
      },
    ];
    this.rowData = [
     { no: '1', LanguageF: 'Chinese(Traditional)', LanguageT: 'Japanese', Liasion: '吳秋順', Price: '0.45'},
     { no: '2', LanguageF: 'Spanish', LanguageT: 'Japanese', Liasion: '林志成', Price: '0.45'},
     { no: '3', LanguageF: 'Chinese(Traditional)', LanguageT: 'English', Liasion: '林靜宜', Price: '0.45'},
     { no: '4', LanguageF: 'Chinese(Simpleified)', LanguageT: 'Japanese', Liasion: '陳倫映', Price: '0.45'},
     { no: '5', LanguageF: 'Chinese(Traditional)', LanguageT: 'Spanish', Liasion: '林怡文', Price: '0.45'},
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
  serializedDate = new FormControl((new Date()).toISOString());
  pop_show(){
    $('.pop-wrapper').show();
  }
  pop_hide(){
    $('.pop-wrapper').hide();
  }
  ngOnInit() {
  }
  
}
