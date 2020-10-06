//angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

//Others
import { PMAssignComponent } from './pm-assign..component';
import { SharedModule } from '@app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {CustomerService} from '@app/core/services/customerservice';


@NgModule({
  imports: [
    SharedModule,
    MatDatepickerModule,
    RouterModule.forChild([{
      path: '', component: PMAssignComponent
    }]),
    AgGridModule.withComponents([
      PMAssignComponent
    ]),
  ],
  declarations: [
    PMAssignComponent
  ],
  providers: [CustomerService]
})
export class PMAssignModule { }
