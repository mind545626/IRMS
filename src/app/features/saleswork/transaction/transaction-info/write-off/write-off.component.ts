import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'write-off',
  templateUrl: './write-off.component.html',
  styleUrls: ['./write-off.component.scss'],
})

export class WriteOffComponent implements OnInit {
  types: any[];
  selectedType: string;

  //datepicker set
  date1: Date;
  date2: Date;
  date3: Date;
  dates: Date[];
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  es: any;
  invalidDates: Array<Date>

  constructor() {
    this.types = [
      {name: 'Sales刪減或折讓', code: 'type1'},
      {name: '呆帳損失', code: 'type2'},
      {name: '字數刪減或取消', code: 'type3'}
  ];
  }
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {label: 'Sales大PM'},
      {label: '主辦Assigner'},
      {label: 'Assigner大PM'},
      {label: 'Assigner主管'},
      {label: 'Sales主管'},
      {label: 'ACC'}
    ];
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
  }
  
}
