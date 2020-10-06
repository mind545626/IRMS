import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'datepicker-minmax',
    templateUrl: './datepicker-minmax.component.html',
    styleUrls: ['./datepicker-minmax.component.scss']
})
export class DatepickerMinmaxComponent {
    minDate: Date;
    maxDate: Date;

    minDate2: Date;
    maxDate2: Date;

    @Input() DatePicker = new FormControl();
    @Input() DatePicker2 = new FormControl();

    constructor() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        this.minDate = new Date(new Date().getTime() - 31 * 24 * 60 * 60 * 1000);
        this.maxDate = new Date();

        this.minDate2 = new Date(new Date().getTime() - 31 * 24 * 60 * 60 * 1000);
        this.maxDate2 = new Date();
    }

}

