import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import {UploadComponent} from "@app/features/demo/upload/upload.component";
import {SharedModule} from "@app/shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UploadRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UploadModule { }
