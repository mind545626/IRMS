import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectSearchComponent } from './mat-select-search/mat-select-search.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { MultipleSelectComponent } from './multiple-select/multiple-select.component';
import { SelectCheckAllComponent } from "@app/shared/select-form/multiple-select/select-check-all/select-check-all.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatTabsModule, MatNativeDateModule, MatListModule, MatChipsModule
} from '@angular/material';


@NgModule({
  declarations: [
    MatSelectSearchComponent,
    SingleSelectComponent,
    MultipleSelectComponent,
    SelectCheckAllComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    MatNativeDateModule,
    MatListModule,
    MatChipsModule,

    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSelectSearchComponent,
    SingleSelectComponent, 
    MultipleSelectComponent,
  ]
})
export class SelectFormModule { }

