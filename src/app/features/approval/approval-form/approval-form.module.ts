//angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

//Others
import { ApprovalFormComponent } from './approval-form..component';
import { SharedModule } from '@app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {CustomerService} from '@app/core/services/customerservice';


@NgModule({
  imports: [
    SharedModule,
    MatDatepickerModule,
    RouterModule.forChild([{
      path: '', component: ApprovalFormComponent
    }]),
    AgGridModule.withComponents([
      ApprovalFormComponent
    ]),
  ],
  declarations: [
    ApprovalFormComponent
  ],
  providers: [CustomerService]
})
export class ApprovalFormnModule { }
