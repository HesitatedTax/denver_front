import { Routes } from '@angular/router';
import { CommerceLayoutComponent } from './core/layout/commerceLayout/commerceLayout.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { AccesoriesPageComponent } from './core/pages/accesories-page/accesories-page.component';

export const commerceRoutes: Routes = [

    {
        path: '',
        component: CommerceLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'accessories',
                component: AccesoriesPageComponent
            },
            {
                path: '**',
                redirectTo: 'home',
            },
        ]
    },
];

export default commerceRoutes;