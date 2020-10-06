import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
  {
    path: '', redirectTo: 'analytics', pathMatch: 'full'
  },
  {
    path: 'analytics',
    loadChildren:() => import('./analytics/analytics.module').then(m => m.AnalyticsModule),

  },
  {
    path: 'social',
    loadChildren:() => import('./social/social.module').then(m => m.SocialModule),
  }
];

export const routing = RouterModule.forChild(routes);
