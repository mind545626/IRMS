import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { MaintainReportComponent } from './maintain-report.component';
import { MaintainReportRoutingModule } from './maintain-report-routing.module';

import {
  MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule,
  MatSidenavModule, MatTabsModule, MatSliderModule, MatSlideToggleModule, MatListModule, MatChipsModule
} from '@angular/material';

import { MatTableExporterModule } from 'mat-table-exporter';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [MaintainReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaintainReportRoutingModule,

    // material table
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSidenavModule,
    MatTabsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    MatChipsModule,

    MatTableExporterModule,
    FormsModule,
    ReactiveFormsModule,

    NgxDaterangepickerMd.forRoot(),
    
  ],
  exports: [MaintainReportComponent]
})
export class MaintainReportModule { }
