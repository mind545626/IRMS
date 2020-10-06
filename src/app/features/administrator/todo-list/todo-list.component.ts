import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ContactLiaison } from '@app/shared/table-interfaces/contact-liaison';
import { CustomerService } from '@app/core/services/customerservice';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { SelectItem } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { Table } from 'primeng/table';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})


export class TodoListComponent implements OnInit {
  //table用變數
  selectedLiaisons: ContactLiaison[];
  contactliaison: ContactLiaison[];
  cols: any[];
  @ViewChild('dt',{static: false}) table: Table;

  constructor(private customerService: CustomerService) { }

  //Date filter
  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
        const activity = parseInt(value);
        if (!isNaN(activity)) {
            this.table.filter(activity, 'activity', 'gte');
        }
    }
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
  
  async ngOnInit() {
    this.customerService.getContactLiaison().then(contactliaison=> this. contactliaison =  contactliaison);

    this.cols = [
      { field: 'CustomerID', header: 'Customer No', width: '100px' },
      { field: 'FullName', header: 'Customer Name', width: '200px' },
      { field: 'Liaison', header: 'Liaison', width: '150px' },
      { field: 'Tel', header: 'Tel', width: '200px' },
      { field: 'Email', header: 'Email', width: '200px' },
      { field: 'ContactDate', header: 'ContactDate', width: '10vw' },
      { field: 'Memo', header: 'Memo',width: 'auto'},
    ];

    //primeng tablefilter
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


