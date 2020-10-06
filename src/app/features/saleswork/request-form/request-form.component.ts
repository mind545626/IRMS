import { Component, OnInit } from '@angular/core';
import { DatepickerMinmaxComponent } from '@app/shared/datepicker/datepicker-minmax/datepicker-minmax.component';
import { EmailTemplateRoutingModule } from '@app/features/miscellaneous/email-template/email-template-routing.module';

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss'],
})
export class RequestFormComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  private rowSelection;
  
  constructor() {
  
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
    $(document).on('change', 'input[name="form_interview"]', function() {
      if ($(this).val() == 2){
        $('input[name="form_sub_interview"]').prop('checked',false);
      }
    });
    $(document).on('change', 'input[name="form_cv"]', function() {
      if ($(this).val() == 2){
        $('input[name="form_sub_cv"]').prop('checked',false);
      }
    });
  }

}
