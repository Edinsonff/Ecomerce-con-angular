import { Routes } from '@angular/router';

import { NotFoundsComponent } from '@Info/pages/not-founds/not-founds.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';



export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children : [
      {
        path: '',
        loadComponent: () => import ('./domains/products/pages/list/list.component')
      },
      {
        path: 'about',
        loadComponent:() => import('./domains/Info/pages/about/about.component')
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component')
      }
    ]
  },

  {
    path: '**',
    component: NotFoundsComponent
  }
];
