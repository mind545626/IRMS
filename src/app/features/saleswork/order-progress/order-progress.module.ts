
//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {I18nModule} from "../../../shared/i18n/i18n.module";
import { SharedModule } from '@app/shared/shared.module';

//primeng
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';

//others
import { AgGridModule } from 'ag-grid-angular';
import { OrderProgressComponent } from './order-progress.component';
import { CustomerService } from '@app/core/services/customerservice';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    SharedModule,
    FormsModule,
    I18nModule,
    RouterModule.forChild([{
      path: '', component: OrderProgressComponent
    }])
  ],
  declarations: [
    OrderProgressComponent
  ],
  providers: [CustomerService]
})
export class OrderProgressModule { }
