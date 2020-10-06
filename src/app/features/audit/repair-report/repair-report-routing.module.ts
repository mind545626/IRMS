import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairReportComponent } from './repair-report.component';

const routes: Routes = [{
  path: '',
  component: RepairReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class RepairReportRoutingModule { }

