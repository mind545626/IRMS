import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'new-customer',
    loadChildren: () => import('./new-customer/new-customer.module').then(m => m.NewCustomerModule)
  },
  {
    path: 'customer-info',
    loadChildren: () => import('./customer-info/customer-info.module').then(m => m.CustomerInfoModule)
  },
  // {
  //   path: 'new-quotation',
  //   loadChildren: () => import('@app/features/saleswork/quotation/new-quotation/new-quotation.module').then(m => m.NewQuotationModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerRoutingModule { }
