
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [

 
  {
    path: 'pm-assign',
    loadChildren: () => import('./pm-assign/pm-assign..module').then(m => m.PMAssignModule),
    data: {pageTitle: 'pm-assign'}
  }
];


export const routing = RouterModule.forChild(routes)
