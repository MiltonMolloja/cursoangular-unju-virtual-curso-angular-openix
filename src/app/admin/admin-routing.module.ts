import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@shared/util';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
    { path: 'usuarios', component: UserManagementComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
