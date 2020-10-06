import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { HistoryReportComponent } from './history-report.component';
import { HistoryReportRoutingModule } from './history-report-routing.module';

import {
  MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule,
  MatSidenavModule, MatTabsModule, MatSliderModule, MatSlideToggleModule, MatListModule, MatChipsModule
} from '@angular/material';

import { MatTableExporterModule } from 'mat-table-exporter';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HistoryReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    HistoryReportRoutingModule,

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
  exports: [HistoryReportComponent]
})
export class HistoryReportModule { }
