import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@shared/util';
import { NavbarComponent } from './layouts';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { BrandComponent } from './features/brand/brand.component';
import { CustomerComponent } from './features/customer/customer.component';
import { SaleComponent } from './features/sale/sale.component';
import { UserComponent } from './features/user/user.component';
import { CarComponent } from './features/car/car.component';

const routes: Routes = [
    {
        path: 'brand',
        component: BrandComponent,
    },
    {
        path: 'car',
        component: CarComponent,
    },
    {
        path: 'customer',
        component: CustomerComponent,
    },
    {
        path: 'sale',
        component: SaleComponent,
    },
    {
        path: 'user',
        component: UserComponent,
    },
    {
        path: '',
        component: NavbarComponent,
        outlet: 'navbar'
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/not-found',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
