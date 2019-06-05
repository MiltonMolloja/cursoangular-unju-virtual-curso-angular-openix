import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@shared/util';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {}
