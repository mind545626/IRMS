import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryReportComponent } from './history-report.component';

const routes: Routes = [{
  path: '',
  component: HistoryReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class HistoryReportRoutingModule { }

