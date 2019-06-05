import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@shared/util';
import { NavbarComponent } from './layouts';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

const routes: Routes = [
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
