import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "buttons",
    pathMatch: "full"
  },
  {
    path: "buttons",
    loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule),
    data: { pageTitle: "Buttons" }
  },
  {
    path: "grid",
    loadChildren: () => import('./grid/grid.module').then(m => m.GridModule),
    data: { pageTitle: "Grid" }
  },
  {
    path: "typography",
    loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule),
    data: { pageTitle: "Typography" }
  },
  {
    path: "tree-views",
    loadChildren: () => import('./tree-views/tree-views.module').then(m => m.TreeViewsModule),
    data: { pageTitle: "Tree Views" }
  },
  {
    path: "nestable-lists",
    loadChildren: () => import('./nestable-lists/nestable-lists.module').then(m => m.NestableListsModule),
    data: { pageTitle: "Nestable Lists" }
  },
  {
    path: "general",
    loadChildren:
      () => import('./general-elements/general-elements.module').then(m => m.GeneralElementsModule),
    data: { pageTitle: "General Elements" }
  },
  {
    path: "icons",
    loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule),
    data: { pageTitle: "Icons" }
  }
];

export const routing = RouterModule.forChild(routes);
