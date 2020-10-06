import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsReceivableComponent } from './accounts-receivable.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule , Routes} from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
// -------------
// import { MyLinkRendererComponent } from './my-link-renderer.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// -------------
// -------------
// const appRoutes: Routes = [
//   { path: 'OrderNo/:OrderNo', component: AccountsReceivableComponent },
// ];
// -------------




@NgModule({
  imports: [
// -------------
    // BrowserModule,
    // FormsModule,
    // HttpClientModule,
// -------------
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    RouterModule.forChild([{
      path: '', component: AccountsReceivableComponent
    }]),
    AgGridModule.withComponents([
      AccountsReceivableComponent
    ]),
  ],
  declarations: [AccountsReceivableComponent],
  // -------------
  // declarations: [AccountsReceivableComponent,MyLinkRendererComponent],
  // bootstrap: [AccountsReceivableComponent],
  // entryComponents: [MyLinkRendererComponent],
  // -------------
})
export class AccountsReceivableModule { }
