import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CommonModule } from '@angular/common';

import { BulletinComponent } from './bulletin.component';
import { BulletinRoutingModule } from './bulletin-routing.module';

import {
  MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule,
  MatSidenavModule, MatTabsModule, MatSliderModule, MatSlideToggleModule, MatListModule, MatChipsModule
} from '@angular/material';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BulletinComponent],
  imports: [
    CommonModule,
    SharedModule,
    BulletinRoutingModule,

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

    NgxDaterangepickerMd.forRoot(),
    FormsModule, ReactiveFormsModule,

  ],
  exports: [BulletinComponent],
})

export class BulletinModule { }
