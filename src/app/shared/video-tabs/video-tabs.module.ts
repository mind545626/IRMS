import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneVideoComponent  , FormDialog} from './one-video/one-video.component';
import { SingleVideoComponent } from './single-video/single-video.component';
import { TwoVideosComponent } from './two-videos/two-videos.component';
import { ThreeVideosComponent } from './three-videos/three-videos.component';
import { FourVideosComponent } from './four-videos/four-videos.component';

import {
  MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
  MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatTabsModule, MatNativeDateModule, MatListModule, MatChipsModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatVideoModule } from 'mat-video';

@NgModule({
  declarations: [OneVideoComponent, FormDialog ,SingleVideoComponent, TwoVideosComponent, FourVideosComponent, ThreeVideosComponent],
  imports: [
    CommonModule,

    MatCheckboxModule, MatCardModule, MatInputModule, MatGridListModule,
    MatButtonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatTabsModule, MatNativeDateModule, MatListModule, MatChipsModule,

    ReactiveFormsModule,FormsModule,

    MatVideoModule,
  ],
  exports: [OneVideoComponent ,SingleVideoComponent, TwoVideosComponent, ThreeVideosComponent, FourVideosComponent],
  entryComponents: [FormDialog]
})


export class VideoTabsModule { }
