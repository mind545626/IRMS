import { Component, OnInit, ViewChild } from '@angular/core';
import {CustomerService} from '@app/core/services/customerservice';
import {Customer} from '@app/shared/table-interfaces/customer';
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
@Component({
  selector: 'sa-normal-tables',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss'],
})
export class QuotationComponent implements OnInit {
  customers: Customer[];
  cols: any[];
  billstatus: SelectItem[];
  currencyid: SelectItem[];
  selectedCustomers: Customer;

  @ViewChild('dt',{static: false}) table: Table;

  constructor(private customerService: CustomerService) {

  }
 
  ngOnInit() {
    this.customerService.getCustoemrsQuo().then(customers => this.customers = customers);

    this.billstatus = [
      { label: '全部', value: null },
      { label: '已成交', value: '已成交' },
      { label: '已估價', value: '已估價' },
      { label: '已結案', value: '已結案' },
    ];

    this.currencyid = [
      { label: '全部', value: null },
      { label: 'NTD', value: 'NTD' },
      { label: 'USD', value: 'USD' },
      { label: 'HKD', value: 'HKD' },
      { label: 'IDR', value: 'IDR' },
      { label: 'KRW', value: 'KRW' },
      { label: 'THB', value: 'THB' },
    ];


    this.cols = [
        { field: 'no', header: '項次', width: '60px' },
        { field: 'QuoID', header: '估價單編號', width: '10vw'},
        { field: 'QuoDate', header: '估價單日期', width: '10vw'},
        { field: 'BillStatus', header: '估價單狀態', width: '10vw'},
        { field: 'CustomerID', header: '客戶編號', width: '10vw', maxwidth: '200px' },
        { field: 'FullName', header: '客戶名稱', width: '20vw' },
        { field: 'FLFullName', header: '客戶外文名稱', width: '20vw'},
        { field: 'Liaison', header: '聯絡人', width: '10vw'},
        { field: 'Tel', header: '聯絡電話', width: '15vw'},
        { field: 'Email', header: '電子信箱', width: '15vw'},
        { field: 'Amount', header: '稅前總額', width: '10vw'},
        { field: 'Total', header: '稅後總額', width: '10vw'},
        { field: 'CurrencyID', header: '幣別', width: '10vw'},
        { field: 'CurrencyIDTotal', header: '外幣總額', width: '10vw'},
        { field: 'EnglishName', header: '業務員', width: '10vw'},
        { field: 'FollowContent', header: '追蹤狀況', width: '15vw'},
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
    $("html, body").animate({ scrollTop: 0 }, "slow");

  }
  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
          month = '0' + month;
      }

      if (day < 10) {
          day = '0' + day;
      }

      return date.getFullYear() + '-' + month + '-' + day;
  }
}
