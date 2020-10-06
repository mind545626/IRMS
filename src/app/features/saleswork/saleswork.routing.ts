
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
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
    data: {pageTitle: 'customer'}
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule),
    data: {pageTitle: 'transaction'}
  },
  {
    path: 'quotation',
    loadChildren: () => import('./quotation/quotation.module').then(m => m.QuotationModule),
    data: {pageTitle: 'quotation'}
  },
  {
    path: 'credit-order',
    loadChildren: () => import('./credit-order/credit-order.module').then(m => m.CreditOrderModule),
    data: {pageTitle: 'credit-order'}
  },
  {
    path: 'request-form',
    loadChildren: () => import('./request-form/request-form.module').then(m => m.RequestFormModule),
    data: {pageTitle: 'request-form'}
  },
  {
    path: 'order-progress',
    loadChildren: () => import('./order-progress/order-progress.module').then(m => m.OrderProgressModule),
    data: {pageTitle: 'order-progress'}
  },
];


export const routing = RouterModule.forChild(routes)
