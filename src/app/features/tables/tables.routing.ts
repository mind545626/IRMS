
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [

  {
    path: 'normal',
    loadChildren: () => import('./normal-tables/normal-tables.module').then(m => m.NormalTablesModule),
    data: {pageTitle: 'Normal'}
  },

  {
    path: 'datatables',
    loadChildren: () => import('./datatables-case/datatables-case.module').then(m => m.DatatablesCaseModule),
    data: {pageTitle: 'Datatables'}
  },

  {
    path: 'ngx-datatable',
    loadChildren: () => import('./ngx-datatable/ngx-datatable-case.module').then(m => m.NgxDatatableCaseModule),
    data: {pageTitle: 'NGx Datatable'}
  }
];


export const routing = RouterModule.forChild(routes)
