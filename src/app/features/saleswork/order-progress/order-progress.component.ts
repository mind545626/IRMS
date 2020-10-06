import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '@app/core/services/customerservice';
import {OrderProgress} from '@app/shared/table-interfaces/customer';
import {FilterUtils} from 'primeng/utils';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {sharedUtils} from "@app/shared/utils/sharedUtils";



@Component({
    selector: 'sa-normal-tables',
    templateUrl: './order-progress.component.html',
    styleUrls: ['./order-progress.component.scss'],
})

export class OrderProgressComponent implements OnInit {
    //查詢條件用變數
    name: string;
    code: string;
    selectedCountry: string;
    selectedSalesTeam: string;
    countries: any[];
    orderprogresses: any[];
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
    selectedOrders: OrderProgress[];
    orders: OrderProgress[];
    cols: any[];
    orderprogress: SelectItem[];
    regiontype: SelectItem[];


    constructor(private customerService: CustomerService) {
        this.orderprogresses = [
            {name: '全部', value: null},
            {name: '估價單成立', value: 'progress-1'},
            {name: '交易單成立', value: '正常'},
            {name: '工作單成立', value: '停用'},
            {name: '指派完成', value: '停用'},
            {name: '指派交件', value: '停用'},
            {name: '業務交件', value: '停用'},
            {name: '訂單完成', value: '停用'},
        ];
    }

    ngOnInit() {
        this.customerService.getOrderProgress().then(orders => this.orders = orders);
        this.regiontype = [
            {label: '全部', value: null},
            {label: 'TW', value: 'TW'},
            {label: 'CN', value: 'CN'},
        ];

        this.orderprogress = [
            {label: '全部', value: null},
            {label: '估價單成立', value: '估價單成立'},
            {label: '交易單成立', value: '交易單成立'},
            {label: '工作單成立', value: '工作單成立'},
            {label: '指派完成', value: '指派完成'},
            {label: '指派交件', value: '指派交件'},
            {label: '業務交件', value: '業務交件'},
            {label: '訂單完成', value: '訂單完成'},
        ];
       
        this.cols = [
            { field: 'no', header: '項次', width: '60px' },
            { field: 'CustomerID', header: '客戶編號', width: '120px' },
            { field: 'FullName', header: '客戶名稱' },
            { field: 'OrderNo', header: '交易單編號' },
            { field: 'QuoID', header: '估價單編號' },
            { field: 'OrderProgress', header: '訂單狀態', width: '150px' },
            { field: 'Liaison', header: '聯絡人' },
            { field: 'OrderDate', header: '交易日期' },
            { field: 'EnglishName', header: '處理業務' }
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

    // convenience getter for easy access to form fields

}
