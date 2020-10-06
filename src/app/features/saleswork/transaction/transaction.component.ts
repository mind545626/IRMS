import { Component, OnInit,  ViewChild } from '@angular/core';
import { CustomerService } from '@app/core/services/customerservice';
import { Customer } from '@app/shared/table-interfaces/customer';
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'sa-normal-tables',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  customers: Customer[];
  cols: any[];
  feedback: SelectItem[];
  languagef: SelectItem[];
  languaget: SelectItem[];
  currencyid: SelectItem[];
  selectedCustomers: Customer;

  @ViewChild('dt',{static: false}) table: Table;

  constructor(private customerService: CustomerService) {
  }
 
  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.customerService.getCustoemrsOrder().then(customers => this.customers = customers);

    this.languagef = [
      { label: '全部', value: null },
      { label: '中文', value: '中文' },
      { label: '英文', value: '英文' },
      { label: '日文', value: '日文' },
      { label: '韓文', value: '韓文' },
      { label: '越南文', value: '越南文' }
    ];

    this.feedback = [
      { label: '全部', value: null },
      { label: '有', value: '有' },
      { label: '無', value: '無' }
    ];

    this.languaget = [
      { label: '全部', value: null },
      { label: '中文', value: '中文' },
      { label: '英文', value: '英文' },
      { label: '日文', value: '日文' },
      { label: '韓文', value: '韓文' },
      { label: '越南文', value: '越南文' }
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
      { field: 'OrderNo', header: '交易單文號', width: '8vw' },
      { field: 'CustomerID', header: '客戶編號', width: '8vw', maxwidth: '200px' },
      { field: 'FullName', header: '客戶名稱', width: '15vw' },
      { field: 'Liaison', header: '聯絡人', width: '8vw'},
      { field: 'Phone', header: '聯絡人電話', width: '12vw'},
      { field: 'CellPhone', header: '行動電話', width: '12vw'},
      { field: 'Email', header: '電子信箱', width: '15vw'},
      { field: 'MatlDescpDomestic', header: '文件名稱', width: '15vw'},
      { field: 'LanguageF', header: '原文', width: '10vw'},
      { field: 'LanguageT', header: '譯文', width: '10vw'},
      { field: 'AllWords', header: '總字數', width: '8vw'},
      { field: 'NumberOfOrder', header: '筆數', width: '8vw' },
      { field: 'Price', header: '單價', width: '8vw'},
      { field: 'InsteadPayBillCurr', header: '代付款項', width: '8vw'},
      { field: 'TaxExcludedTotal', header: '未稅總額', width: '8vw'},
      { field: 'Total', header: '稅後總額', width: '8vw'},
      { field: 'CurrencyID', header: '幣別', width: '8vw'},
      { field: 'DiscForeignAddTaxSum', header: '外幣總額', width: '8vw'},
      { field: 'FeedBack', header: 'Feedback', width: '8vw'},
      { field: 'ExDelivDate', header: 'Sales交件日期', width: '12vw'},
      { field: 'OrderDate', header: '交易日期', width: '12vw'},
      { field: 'ReceDate', header: '銷帳日期', width: '12vw'},
      { field: 'OverdueReceiBillCurr', header: '未收總額', width: '8vw'},
      { field: 'GUIExist', header: '發票開立', width: '8vw'},
      { field: 'GUINo', header: '發票號碼', width: '8vw'},
      { field: 'EnglishName', header: '業務員', width: '8vw'},
      { field: 'AssignerName', header: '指派人員', width: '8vw'},
      { field: 'FilePath', header: '檔案位置', width: '10vw'},
      

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
