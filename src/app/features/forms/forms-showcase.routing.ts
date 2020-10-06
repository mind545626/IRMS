
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'editors',
    loadChildren: () => import('./bootstrap-editors/bootstrap-editors.module').then(m => m.BootstrapEditorsModule),
    data: {pageTitle: 'Bootstrap Editors'}
  },

  { path: 'bootstrap-elements',
    loadChildren: () => import('./bootstrap-elements/bootstrap-elements.module').then(m => m.BootstrapElementsModule),
    data: {pageTitle: 'Bootstrap Elements'}
  },

  {
    path: 'bootstrap-validation',
    loadChildren: () => import('./bootstrap-validation/bootstrap-validation.module').then(m => m.BootstrapValidationModule),
    data: {pageTitle: 'Bootstrap Validation'}
  },
  {
    path: 'dropzone',
    loadChildren: () => import('./dropzone-showcase/dropzone-showcase.module').then(m => m.DropzoneShowcaseModule),
    data: {pageTitle: 'Dropzone'}
  },
  {
    path: 'elements',
    loadChildren: () => import('./form-elements/form-elements.module').then(m => m.FormElementsModule),
    data: {pageTitle: 'Elements'}
  },
  {
    path: 'layouts',
    loadChildren: () => import('./form-layouts/form-layouts.module').then(m => m.FormLayoutsModule),
    data: {pageTitle: 'Layouts'}
  },
  {
    path: 'plugins',
    loadChildren: () => import('./form-plugins/form-plugins.module').then(m => m.FormPluginsModule),
    data: {pageTitle: 'Plugins'}
  },
  {
    path: 'validation',
    loadChildren: () => import('./form-validation/form-validation.module').then(m => m.FormValidationModule),
    data: {pageTitle: 'Validation'}
  },

  {
    path: 'wizards',
    loadChildren: () => import('./wizards/wizards.module').then(m => m.WizardsModule),
    data: {pageTitle: 'Wizards'}
  },

  {
    path: 'image-cropping',
    loadChildren: () => import('./image-cropping/image-editor.module').then(m => m.ImageEditorModule),
    data: {pageTitle: 'Image Cropping'}
  },
];

export const routing = RouterModule.forChild(routes);
