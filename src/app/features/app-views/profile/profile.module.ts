import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import { SmartadminLayoutModule } from '@app/shared/layout';
import { StatsModule } from '@app/shared/stats/stats.module';
import { SelectButtonModule } from 'primeng/selectbutton';
import  {ButtonModule } from 'primeng/button';
import {I18nModule} from '@app/shared/i18n/i18n.module'
@NgModule({
  imports: [
    CommonModule,
    SmartadminLayoutModule,
    StatsModule,
    ProfileRoutingModule,
    SelectButtonModule,
    ButtonModule,
    I18nModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule {
}
