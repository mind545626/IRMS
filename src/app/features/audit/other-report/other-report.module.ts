import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { OtherReportComponent } from './other-report.component';
import { OtherReportRoutingModule } from './other-report-routing.module';

import {MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule, 
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule, MatNativeDateModule,MatRadioModule,
  MatSidenavModule, MatTabsModule, MatSliderModule, MatSlideToggleModule,MatListModule,MatChipsModule} from '@angular/material';



@NgModule({
  declarations: [OtherReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    OtherReportRoutingModule,

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
  ],
  exports: [OtherReportComponent]
})
export class OtherReportModule { }
