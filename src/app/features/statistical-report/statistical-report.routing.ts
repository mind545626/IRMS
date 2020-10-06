import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";

export const routes:Routes = [

  {
    path: 'accounts-receivable',
    loadChildren: () => import('./accounts-receivable/accounts-receivable.module').then(m => m.AccountsReceivableModule),
    data: { pageTitle: 'accounts-receivable' }
  },

];

export const routing = RouterModule.forChild(routes);

