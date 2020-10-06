import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { GtaisLayoutComponent } from "@app/shared/layout/app-layouts/gtais-layout.component";
import { AuthGuard } from "@app/core/guards/auth.guard";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'gtais/login',
    pathMatch: 'full'
  },
  {
    path: "",
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    component: MainLayoutComponent,
    data: { pageTitle: "Home" },
    children: [
      {
        path: "demo",
        loadChildren: () => import('./features/demo/demo.module').then(m => m.DemoModule),
        data: { pageTitle: "Demo" }
      },
      {
        path: "restful",
        loadChildren: () => import('./features/restful/restful.module').then(m => m.RestfulModule),
        data: { pageTitle: "Restful" }
      },
      // {
      //   path: "dashboard",
      //   loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
      //   data: { pageTitle: "Dashboard" }
      // },
      // {
      //   path: "smartadmin",
      //   loadChildren:
      //     () => import('./features/smartadmin-intel/smartadmin-intel.module').then(m => m.SmartadminIntelModule),
      //   data: { pageTitle: "Smartadmin" }
      // },
      // {
      //   path: "outlook",
      //   loadChildren: () => import('./features/outlook/outlook.module').then(m => m.OutlookModule),
      //   data: { pageTitle: "Outlook" }
      // },
      // {
      //   path: "graphs",
      //   loadChildren:
      //     () => import('./features/graphs/graphs-showcase.module').then(m => m.GraphsShowcaseModule),
      //   data: { pageTitle: "Graphs" }
      // },
      // {
      //   path: "tables",
      //   loadChildren: () => import('./features/tables/tables.module').then(m => m.TablesModule),
      //   data: { pageTitle: "Tables" }
      // },
      // {
      //   path: "forms",
      //   loadChildren:
      //     () => import('./features/forms/forms-showcase.module').then(m => m.FormsShowcaseModule),
      //   data: { pageTitle: "Forms" }
      // },
      // {
      //   path: "cropper",
      //   loadChildren:
      //     () => import('./features/cropper/cropper.module').then(m => m.CropperModule)
      // },
      // {
      //   path: "ui",
      //   loadChildren:
      //     () => import('./features/ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      //   data: { pageTitle: "Ui" }
      // },
      // {
      //   path: "widgets",
      //   loadChildren:
      //     () => import('./features/widgets/widgets-showcase.module').then(m => m.WidgetsShowcaseModule),
      //   data: { pageTitle: "Widgets" }
      // },
      // {
      //   path: "calendar",
      //   loadChildren:
      //     () => import('./features/calendar/calendar.module').then(m => m.CalendarFeatureModule)
      // },
      // {
      //   path: "app-views",
      //   loadChildren: () => import('./features/app-views/app-views.module').then(m => m.AppViewsModule),
      //   data: { pageTitle: "App Views" }
      // },
      // {
      //   path: "e-commerce",
      //   loadChildren: () => import('./features/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
      //   data: { pageTitle: "E-commerce" }
      // },
      // {
      //   path: "miscellaneous",
      //   loadChildren:
      //     () => import('./features/miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule),
      //   data: { pageTitle: "Miscellaneous" }
      // },
  /*----- CUSTOM FEATURES -----*/
      //業務作業
      {
        path: "saleswork",
        // canActivate: [AuthGuard],
        loadChildren:
          () => import('./features/saleswork/saleswork.module').then(m => m.SalesworkModule),
        data: {
          pageTitle: "Saleswork",
        }
      },
      {
        path: "assignerwork",
        // canActivate: [AuthGuard],
        loadChildren:
          () => import('./features/assignerwork/assignerwork.module').then(m => m.AssignerWorkModule),
        data: {
          pageTitle: "Assignerwork",
        }
      },
      {
        path: "approval",
        // canActivate: [AuthGuard],
        loadChildren:
          () => import('./features/approval/approval.module').then(m => m.ApprovalModule),
        data: {
          pageTitle: "Approval",
        }
      },
      {
        path: "administrator",
        loadChildren:
          () => import('./features/administrator/administrator.module').then(m => m.AdministratorModule),
        data: {
          pageTitle: "Administrator"
        }
      },
      {
        path: "audit",
        // canActivate: [AuthGuard],
        loadChildren:
          () => import('./features/audit/audit.module').then(m => m.AuditModule),
        data: {
          pageTitle: "Audit",
        }
      },
      {
        path: "statistical-report",
        // canActivate: [AuthGuard],
        loadChildren:
          () => import('./features/statistical-report/statistical-report.module').then(m => m.StatisticalReportModule),
        data: {
          pageTitle: "Statistical Report",
        }
      }
    ]
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "gtais",
    component: GtaisLayoutComponent,
    loadChildren: () => import('./features/gtais/gtais.module').then(m => m.GtaisModule)
  },
  { path: "**", redirectTo: "administrator/notice" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

