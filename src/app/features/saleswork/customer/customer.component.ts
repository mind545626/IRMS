import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '@app/core/services/customerservice';
import {Customer} from '@app/shared/table-interfaces/customer';
import {FilterUtils} from 'primeng/utils';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {sharedUtils} from "@app/shared/utils/sharedUtils";



@Component({
    selector: 'sa-normal-tables',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss'],
})

export class CustomerComponent implements OnInit {
    //查詢條件用變數
    name: string;
    code: string;
    selectedCountry: string;
    selectedSalesTeam: string;
    countries: any[];
    stopmarks: any[];
    vips: any[];
    ranks: any[];
    lists: any[];
    salesteam: any[];
    regiontypes: any[];
    servicefields: any[];
    selectedVIP: string;
    selectedListed: string;
    selectedRegionType: string;
    selectedStopMark: string;
    selectedRank: string;
    selectedServiceField: string;
    date3: Date;
    dates: Date[];
    rangeDates: Date[];
    minDate: Date;
    maxDate: Date;
    es: any;
    invalidDates: Array<Date>

    //table用變數
    selectedCustomers: Customer[];
    customers: Customer[];
    cols: any[];
    stopmark: SelectItem[];
    regiontype: SelectItem[];

    //驗證用變數
    submitted = false;
    valid = true;

    searchForm = this.fb.group({
        CustomerID: [''],
        FullName: [''],
        StopMark: [''],
        VIP: [''],
        Listed: [''],
        ServiceField: [''],
        Rank: [''],
        RegionType: [''],
        Country: [''],
        LiaisonName: [''],
        SalesTeam: [''],
        CompTaxNo: [''],
        Tel: [''],
        Creator: [''],
        CompTaxNo2: [''],
        Email: ['', [Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)]],
        Picker: [''],
        Picker2: ['']
    }, {validator: sharedUtils.atLeastOne(Validators.required)});

    constructor(private customerService: CustomerService, private fb: FormBuilder) {
        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];
        this.stopmarks = [
            {name: '正常', code: 'normal'},
            {name: '停用', code: 'stop'},
        ];
        this.vips = [
            {name: '是', code: 'true'},
            {name: '否', code: 'false'},
        ];
        this.lists = [
            {name: '是', code: 'true'},
            {name: '否', code: 'false'},
        ];
        this.ranks = [
            {name: '第一級', code: '1'},
            {name: '第二級', code: '2'},
            {name: '第三級', code: '2'},
            {name: '機密客戶', code: '2'},
        ];
        this.salesteam = [
            {name: 'Carmen_NP_Team(BB)', code: '1'},
            {name: 'Sally_Team(DD)', code: '2'},
            {name: 'Engel_Team(FF)', code: '2'},
            {name: 'Liwen_Team(JJ)', code: '2'},
            {name: 'Sales_MIS_Team', code: '2'},
            {name: 'Miura_Team(GM)', code: '2'}
        ];
        this.regiontypes = [
            {name: 'TW', value: 'TW'},
            {name: 'CN', value: 'CN'},
        ];

        this.servicefields = [
            {name: '遊戲', code: '1'},
            {name: '個人', code: '2'},
            {name: '電子業', code: '2'},
            {name: '國際貿易業', code: '2'},
            {name: '機械業', code: '2'},
            {name: '資訊/軟體業', code: '2'},
            {name: '顧問服務業', code: '2'},
            {name: '翻譯業', code: '2'},
            {name: '律師', code: '2'},
        ];
    }

    ngOnInit() {
        this.submitted = false;
        this.customerService.getCustoemrsMedium().then(customers => this.customers = customers);
        this.regiontype = [
            {label: '全部', value: null},
            {label: 'TW', value: 'TW'},
            {label: 'CN', value: 'CN'},
        ];

        this.stopmark = [
            {label: '全部', value: null},
            {label: '正常', value: '正常'},
            {label: '停用', value: '停用'},
        ];
       
        this.cols = [
            { field: 'select', header: 'Select', width: '60px' },
            { field: 'CustomerID', header: '客戶編號', width: '120px' },
            { field: 'FullName', header: '客戶名稱', width: 'auto' },
            { field: 'FLFullName', header: '客戶外文名稱', width: '120px' },
            { field: 'CompTaxNo', header: '統一/稅籍編號', width: '120px' },
            { field: 'Tel', header: '公司電話', width: '150px'  },
            { field: 'Address', header: '客戶地址', width: 'auto'  },
            { field: 'StopMark', header: '客戶狀態', width: '120px'  },
            { field: 'RegionType', header: '地區', width: '120px'  },
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
    get f() {
        return this.searchForm.controls;
    }

    searchClick() {
        this.submitted = true;
        this.valid = true;

        if (this.searchForm.invalid) {
            this.valid = false;
            console.log(this.valid);
            return;
        }
    }

}
