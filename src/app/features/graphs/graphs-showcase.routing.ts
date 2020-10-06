import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';

import {SparklinesComponent} from "./sparklines/sparklines.component";
import {EasyPieChartsComponent} from "./easy-pie-charts/easy-pie-charts.component";


export const routes: Routes = [
  {
    path: 'flot-charts',
    loadChildren: () => import('./flot-charts/flot-charts.module').then(m => m.FlotChartsModule)
  },
  {
    path: 'morris-charts',
    loadChildren: () => import('./morris-charts/morris-charts.module').then(m => m.MorrisChartsModule)
  },
  {
    path: 'sparklines',
    component: SparklinesComponent
  },
  {
    path: 'easy-pie-charts',
    component: EasyPieChartsComponent
  },
  {
    path: 'dygraphs',
    loadChildren: () => import('./dygraphs/dygraphs.module').then(m => m.DygraphsModule)
  },
  {
    path: 'chart-js',
    loadChildren: () => import('./chart-js/chart-js-showcase.module').then(m => m.ChartJsShowcaseModule)
  },
  {
    path: 'highchart-tables',
    loadChildren: () => import('./highchart-tables/highchart-tables.module').then(m => m.HighchartTablesModule)
  }

];

export const routing = RouterModule.forChild(routes);
