import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [

  {
    path: 'account-details',
    loadChildren: () => import('./account-details/account-details.module').then(m => m.AccountDetailsModule),
    data: { pageTitle: 'account-details' }
  },
  {
    path: 'repair-report',
    loadChildren: () => import('./repair-report/repair-report.module').then(m => m.RepairReportModule),
    data: { pageTitle: 'repair-report' }
  },
  {
    path: 'maintain-report',
    loadChildren: () => import('./maintain-report/maintain-report.module').then(m => m.MaintainReportModule),
    data: { pageTitle: 'maintain-report' }
  },
  {
    path: 'history-report',
    loadChildren: () => import('./history-report/history-report.module').then(m => m.HistoryReportModule),
    data: { pageTitle: 'history-report' }
  },
  {
    path: 'other-report',
    loadChildren: () => import('./other-report/other-report.module').then(m => m.OtherReportModule),
    data: { pageTitle: 'other-report' }
  }

];

export const routing = RouterModule.forChild(routes);

