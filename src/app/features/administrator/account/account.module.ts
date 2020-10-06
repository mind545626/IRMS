import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';

import {
  MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule,
  MatSidenavModule, MatTabsModule, MatSliderModule, MatSlideToggleModule, MatListModule, MatChipsModule
} from '@angular/material';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,

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

    ReactiveFormsModule,

  ],
  exports: [AccountComponent],
})
export class AccountModule { }