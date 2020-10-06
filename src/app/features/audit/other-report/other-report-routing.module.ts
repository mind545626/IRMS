import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherReportComponent } from './other-report.component';

const routes: Routes = [{
  path: '',
  component: OtherReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class OtherReportRoutingModule { }

