import { Routes } from '@angular/router';
import { CommerceLayoutComponent } from './core/layout/commerceLayout/commerceLayout.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { AccesoriesPageComponent } from './core/pages/accesories-page/accesories-page.component';
import { MenPageComponent } from './core/pages/man-page/man-page.component';
import { WomanPageComponent } from './core/pages/woman-page/woman-page.component';
import { ContactPageComponent } from './core/pages/contact-page/contact-page.component';

export const commerceRoutes: Routes = [
  // Home sin sidebar
  {
    path: 'home',
    component: HomePageComponent,
  },
  // Layout con sidebar para el resto
  {
    path: '',
    component: CommerceLayoutComponent,
    children: [
      {
        path: 'accessories',
        component: AccesoriesPageComponent,
      },
      {
        path: 'mens',
        component: MenPageComponent,
      },
      {
        path: 'womans',
        component: WomanPageComponent,
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

export default commerceRoutes;
