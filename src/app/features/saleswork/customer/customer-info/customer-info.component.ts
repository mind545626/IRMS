import { Component, OnInit } from '@angular/core';
import { autoUpdatingChartDemoOptions } from '@app/features/graphs/flot-charts/flot-examples';

@Component({
  selector: 'sa-normal-tables',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],

})

export class CustomeInfoComponent implements OnInit {
  myVar1 = false;
  ngOnInit() {
   
  }
  
  i = 0;
  // add_new_taxno(){
  //   this.i ++;
  //   $('.other-tax-no').append(`
  //   <div class="form-group">
  //     <div class="col-sm-1">
  //       <input type="text" class="form-control" value = "${this.i}" disabled> 
  //     </div>
  //     <div class="col-sm-1">
  //       <input type="text" class="form-control"> 
  //     </div>
  //     <div class="col-sm-1">
  //       <input type="text" class="form-control"> 
  //     </div>
  //     <div class="col-sm-3">
  //       <input type="text" class="form-control"> 
  //     </div>
  //     <div class="col-sm-4">
  //       <input type="text" class="form-control"> 
  //     </div>
  //     <div class="col-sm-2">
  //       <button type="button" class="btn btn-primary">儲存</button>
  //       <button type="button" class="btn btn-danger">刪除</button>
  //     </div>
  //   </div>
  //   `);
    
  // }
}
