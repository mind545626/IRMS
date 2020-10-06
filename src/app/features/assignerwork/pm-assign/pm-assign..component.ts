import { Component, OnInit,  ViewChild } from '@angular/core';
import { CustomerService } from '@app/core/services/customerservice';
import { AssignProgress } from '@app/shared/table-interfaces/customer';
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'sa-normal-tables',
  templateUrl: './pm-assign.component.html',
  styleUrls: ['./pm-assign.component.scss'],
})
export class PMAssignComponent implements OnInit {
  customers:  TreeNode[];
  cols: any[];
  assigners: any[];
  feedback: SelectItem[];
  languagef: SelectItem[];
  languaget: SelectItem[];
  currencyid: SelectItem[];
  selectedAssignProgress: TreeNode[];
  selectedAssigner: string;

  

  constructor(private customerService: CustomerService) {
    this.assigners = [
      {name: 'Dennis', code: 'Dennis'},
      {name: 'Kelly', code: 'Kelly'},
      {name: 'Ken', code: 'Ken'},
      {name: 'Shelly', code: 'Shelly'},
      {name: 'Brain', code: 'Brain'},
    ];
  }
 
  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.customerService.getAssignerProgress().then(customers => this.customers = customers);

    

    this.cols = [
      { field: 'select', header: '選取', width: '100px' },
      { field: 'OrderNo', header: '工作單編號' },
      { field: 'OrderDate', header: '交易日期' },
      { field: 'AssignerDeliverDate', header: '預計交件日期' },
      { field: 'CustomerID', header: '客戶編號'},
      { field: 'CustomerName', header: '客戶名稱'},
      { field: 'AssignProgress', header: '指派狀態'},
      { field: 'AssignWords', header: '指派字數'},
      { field: 'AssignerName', header: '指派人員'}
  ];
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
