//angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {I18nModule} from "../../../shared/i18n/i18n.module";
import { SharedModule } from '@app/shared/shared.module';


//others
import { AgGridModule } from 'ag-grid-angular';
import { CustomerComponent } from './customer.component';
import { CustomerService } from '@app/core/services/customerservice';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CustomerRoutingModule,
    I18nModule,
    AgGridModule.withComponents([
      CustomerComponent
    ]),
    RouterModule.forChild([{
      path: '', component: CustomerComponent
    }])
  ],
  declarations: [
    CustomerComponent,
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
