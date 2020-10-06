import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "./administrator.routing";
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    routing,
    SharedModule,
  ]
})
export class AdministratorModule { }
