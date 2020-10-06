import { NgModule } from '@angular/core';
import { RequestFormComponent } from './request-form.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MatDatepickerModule,MatSortModule,MatRadioModule,MatTabsModule,MatExpansionModule,MatNativeDateModule, MatTableModule,MatRippleModule } from '@angular/material';


@NgModule({
  imports: [
    SharedModule,
    MatDatepickerModule,
    MatSortModule,
    MatRadioModule,
    MatTabsModule,
    MatExpansionModule,
    MatNativeDateModule, 
    MatTableModule,
    MatRippleModule,
    RouterModule.forChild([{
      path: '', component: RequestFormComponent
    }]),
    AgGridModule.withComponents([
      RequestFormComponent
    ]),
  ],
  declarations: [
    RequestFormComponent
  ]
  
})
export class RequestFormModule { 
  clear_filter(){

  }
}
