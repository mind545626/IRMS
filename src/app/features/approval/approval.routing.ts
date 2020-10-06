
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [

 
  {
    path: 'approval-form',
    loadChildren: () => import('./approval-form/approval-form.module').then(m => m.ApprovalFormnModule),
    data: {pageTitle: 'pm-assign'}
  }
];


export const routing = RouterModule.forChild(routes)
