import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CollapseMenuComponent } from "./collapse-menu/collapse-menu.component";
import { RecentProjectsComponent } from "./recent-projects/recent-projects.component";
import { FullScreenComponent } from "./full-screen/full-screen.component";

import { ActivitiesComponent } from "./activities/activities.component";
import { ActivitiesMessageComponent } from "./activities/activities-message/activities-message.component";
import { ActivitiesNotificationComponent } from "./activities/activities-notification/activities-notification.component";
import { ActivitiesTaskComponent } from "./activities/activities-task/activities-task.component";
import { HeaderComponent } from "./header.component";
// import { SharedModule } from '@app/shared/shared.module';

import { UtilsModule } from "@app/shared/utils/utils.module";
import { PipesModule } from "@app/shared/pipes/pipes.module";
import { I18nModule } from "@app/shared/i18n/i18n.module";
import { UserModule } from "@app/shared/user/user.module";
import { VoiceControlModule } from "@app/shared/voice-control/voice-control.module";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MatCardModule, MatInputModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';

import { CountdownModule } from 'ngx-countdown';


@NgModule({
  imports: [
    CommonModule,

    // SharedModule,

    FormsModule,

    VoiceControlModule,

    BsDropdownModule,

    UtilsModule, PipesModule, I18nModule, UserModule,     
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),
    CarouselModule.forRoot(),

    CountdownModule,

    RouterModule,

    MatCardModule,MatInputModule, MatIconModule, MatMenuModule, MatSnackBarModule,MatToolbarModule


  ],
  declarations: [
    ActivitiesMessageComponent,
    ActivitiesNotificationComponent,
    ActivitiesTaskComponent,
    RecentProjectsComponent,
    FullScreenComponent,
    CollapseMenuComponent,
    ActivitiesComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
