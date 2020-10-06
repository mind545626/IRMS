import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SmartadminLayoutModule } from "./layout";
import { HttpClientModule } from '@angular/common/http';

import { I18nModule } from "./i18n/i18n.module";
import { UserModule } from "./user/user.module";
import { BootstrapModule } from "@app/shared/bootstrap.module";
import { VoiceControlModule } from "./voice-control/voice-control.module";
import { SmartadminWidgetsModule } from "./widgets/smartadmin-widgets.module";
import { UtilsModule } from "./utils/utils.module";
import { PipesModule } from "./pipes/pipes.module";
// import { ChatModule } from "./chat/chat.module";
// import { StatsModule } from "./stats/stats.module";
// import { InlineGraphsModule } from "./graphs/inline/inline-graphs.module";
// import { SmartadminFormsLiteModule } from "./forms/smartadmin-forms-lite.module";
// import { SmartProgressbarModule } from "./ui/smart-progressbar/smart-progressbar.module";
// import { CalendarComponentsModule } from "@app/shared/calendar/calendar-components.module";

// custom shared component 
import { DatepickerModule } from '@app/shared/datepicker/datepicker.module';
import { MattableModule } from '@app/shared/mat-table/mattable.module';
// import { SelectFormModule } from '@app/shared/select-form/select-form.module';

import { StatsModule} from './stats/stats.module'
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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
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
    SmartadminLayoutModule,
    BootstrapModule,
    ReactiveFormsModule,
    HttpClientModule,
    StatsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UserModule,
    SmartadminLayoutModule,
    BootstrapModule,
    ReactiveFormsModule,
    I18nModule,
    UtilsModule,
    PipesModule,
    SmartadminWidgetsModule,
    VoiceControlModule,
    DatepickerModule,
    MattableModule,
    StatsModule

  ]
})
export class SharedModule { }
