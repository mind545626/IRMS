import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintainReportComponent } from './maintain-report.component';

const routes: Routes = [{
  path: '',
  component: MaintainReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MaintainReportRoutingModule { }

