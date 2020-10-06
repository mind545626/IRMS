import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDatepickerComponent } from './basic-datepicker/basic-datepicker.component';
import { DatepickerMinmaxComponent } from './datepicker-minmax/datepicker-minmax.component';
import { BasicMonthpickerComponent } from './basic-monthpicker/basic-monthpicker.component';

import {
  MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatChipsModule
} from '@angular/material';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicDatepickerComponent, DatepickerMinmaxComponent, BasicMonthpickerComponent],
  imports: [
    CommonModule,

    MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
    MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatChipsModule,

    FormsModule, ReactiveFormsModule,
  ],
  exports: [BasicDatepickerComponent, DatepickerMinmaxComponent, BasicMonthpickerComponent],
})
export class DatepickerModule { }
