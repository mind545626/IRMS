import { Component, OnInit } from '@angular/core';
import { autoUpdatingChartDemoOptions } from '@app/features/graphs/flot-charts/flot-examples';
import { JsonApiService } from '@app/core/services';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'liaison-content',
  templateUrl: './liaison.component.html',
  styleUrls: ['./liaison.component.scss'],

})
export class LiaisonComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
 
  constructor(private jsonApiService:JsonApiService) {
    this.defaultColDef = {
      editable: false,
      sortable: true,
      floatingFilter: true,
      filter: true,
      suppressMenu: true, 
      suppressSizeToFit: true,
      floatingFilterComponentParams: {suppressFilterButton:true},
    };
    this.columnDefs = [
      {
        headerName: '聯絡人', 
        field: 'LiaisonName', 
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, 
        width: 150,
        cellRenderer: function(params) {
          return '<a class="show-liaison">'+ params.value+'</a>'
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
        flex: 2,
      },
      {
        headerName: '行動電話', 
        field: 'CellPhone',
        flex: 1,
      },
      {
        headerName: '電子郵件', 
        field: 'Email',
        flex: 2,
      },
      {
        headerName: '聯絡人狀態', 
        field: 'StopRemark', 
        flex: 1,
        maxWidth: 150,
      },
      {
        headerName: '提醒設定', 
        field: 'Notification', 
        flex: 1,
        maxWidth: 150,
      },
      {
        headerName: '最後承辦人', 
        field: 'EnglishName',
        flex: 1,
        maxWidth: 150,
      }
    ];
  }
  add_new_liaison(){
    $('.add-liaison-container').show();
  }
 
 
  /*-- grid響應式設定 START --*/
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  serializedDate = new FormControl((new Date()).toISOString());
  /*-- grid響應式設定 END --*/
  pop_show(){
    $('.pop-wrapper').show();
  }
  pop_hide(){
    $('.pop-wrapper').hide();
  }
  ngOnInit() {
    this.jsonApiService.fetch('/gtais/customer.json').subscribe(data=> {
      this.rowData = data[0].Liaison;
    });
    $(document).on('click','.show-liaison', function(){
      $('.liaison-info-container').show();
   });
  }
  
}
