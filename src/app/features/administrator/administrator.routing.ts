import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/core/guards/auth.guard";

export const routes: Routes = [

  {
    path: 'bulletin',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./bulletin/bulletin.module').then(m => m.BulletinModule),
    data: {
      pageTitle: 'bulletin'
    }
  },
  
  {
    path: 'notice',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./notice/notice.module').then(m => m.NoticeModule),
    data: {
      pageTitle: 'notice'
    }
  },
  {
    path: 'account',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    data: {
      pageTitle: 'account'
    }
  },
  {
    path: 'authority',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./authority/authority.module').then(m => m.AuthorityModule),
    data: {
      pageTitle: 'authority'
    }
  },

];

export const routing = RouterModule.forChild(routes);

