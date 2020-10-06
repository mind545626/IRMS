import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '@app/core/services/customerservice';
import {Approval} from '@app/shared/table-interfaces/customer';
import {FilterUtils} from 'primeng/utils';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {sharedUtils} from "@app/shared/utils/sharedUtils";


@Component({
  selector: 'sa-normal-tables',
  templateUrl: './approval-form.component.html',
  styleUrls: ['./approval-form.component.scss'],
})
export class ApprovalFormComponent implements OnInit {
   //查詢條件用變數
   name: string;
   code: string;
   selectedCountry: string;
   selectedSalesTeam: string;
   countries: any[];
   selectedOrderProgress: string;
 

   //datepicker
   date1:Date;
   date2: Date;
   dates: Date[];
   rangeDates: Date[];
   minDate: Date;
   maxDate: Date;
   es: any;
   invalidDates: Array<Date>

   //table用變數
   selectedOrders: Approval[];
   approvals: Approval[];
   cols: any[];
   approval: SelectItem[];
   applytype: SelectItem[];


   constructor(private customerService: CustomerService) {
      
   }

   ngOnInit() {
       this.customerService.getApproval().then(approvals => this.approvals = approvals);
  
       this.approval = [
           {label: '全部', value: null},
           {label: '待審核', value: '待審核'},
           {label: '已核准', value: '已核准'},
           {label: '已退單', value: '已退單'},

       ];
       this.applytype = [
        { label: '全部', value: null},
        { label: '銷款報告書', value: '銷款報告書'},
        { label: '其他單據1', value: '其他單據1'},
        { label: '其他單據2', value: '其他單據2'},
        { label: '其他單據3', value: '其他單據3'}
      ];
      
       this.cols = [
           { field: 'no', header: '項次', width: '60px' },
           { field: 'ApplyType', header: '申請類型' },
           { field: 'ApplyDate', header: '申請日期'},
           { field: 'Department', header: '申請部門'},
           { field: 'EnglishName', header: '申請人員'},
           { field: 'Update', header: '更新時間'},
           { field: 'ApprovalStatus', header: '狀態', width: '160px' },
           { field: 'Function', header: '功能',width: '240px' }
       ]
         
       FilterUtils['custom'] = (value, filter): boolean => {
           if (filter === undefined || filter === null || filter.trim() === '') {
               return true;
           }

           if (value === undefined || value === null) {
               return false;
           }

           return parseInt(filter) > value;
       }

   }


}
