
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery-demo.module').then(m => m.GalleryDemoModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects-list.module').then(m => m.ProjectsListModule)
  },

];

export const routing = RouterModule.forChild(routes);
