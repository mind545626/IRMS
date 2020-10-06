import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@app/features/restful/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'select',
    loadChildren: () => import('@app/features/restful/select/select.module').then(m => m.SelectModule)
  },
  {
    path: 'insert',
    loadChildren: () => import('@app/features/restful/insert/insert.module').then(m => m.InsertModule)
  },
  {
    path: 'update',
    loadChildren: () => import('@app/features/restful/update/update.module').then(m => m.UpdateModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('@app/features/restful/delete/delete.module').then(m => m.DeleteModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('@app/features/restful/upload/upload.module').then(m => m.UploadModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestfulRoutingModule { }
