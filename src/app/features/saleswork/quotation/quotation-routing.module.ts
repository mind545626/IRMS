import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'new-quotation',
    loadChildren: () => import('./new-quotation/new-quotation.module').then(m => m.NewQuotationModule)
  },
  {
    path: 'quotation-info',
    loadChildren: () => import('./quotation-info/quotation-info.module').then(m => m.QuotationInfoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuotationRoutingModule { }
