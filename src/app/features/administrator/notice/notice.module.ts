//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {I18nModule} from "../../../shared/i18n/i18n.module";

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
import { TabViewModule } from 'primeng/tabview';

//others
import { NoticeService } from '@app/core/services/notice.service';
import { NoticeComponent } from './notice.component';
import { NoticeRoutingModule } from './notice-routing.module';
import { CustomerService } from '@app/core/services/customerservice';
import {TodoListModule} from '../todo-list/todo-list.module';


@NgModule({
  declarations: [
    NoticeComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    NoticeRoutingModule,
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
    TabViewModule,
    I18nModule,
    TodoListModule  
  ],
  providers: [NoticeService,CustomerService]
})
export class NoticeModule { }

