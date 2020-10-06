import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordTableComponent } from './record-table/record-table.component';
import { KunyuTableComponent } from './kunyu-table/kunyu-table.component';

import {
  MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatTabsModule, MatNativeDateModule, MatListModule, MatChipsModule
} from '@angular/material';

import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
  declarations: [RecordTableComponent, KunyuTableComponent],
  imports: [
    CommonModule,

    MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
    MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatTabsModule, MatNativeDateModule, MatListModule, MatChipsModule,

    MatTableExporterModule,

  ],
  exports: [RecordTableComponent, KunyuTableComponent],
})
export class MattableModule { }
