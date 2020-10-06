

import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginInfoComponent} from "./login-info/login-info.component";
import {LogoutComponent} from "./logout/logout.component";
import { Routes, RouterModule } from "@angular/router";
import {ProfileComponent} from "../../features/app-views/profile/profile.component";


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginInfoComponent, LogoutComponent],
  exports: [LoginInfoComponent, LogoutComponent]
})
export class UserModule{}
