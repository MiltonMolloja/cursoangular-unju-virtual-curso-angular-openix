import { NgModule } from '@angular/core';
import { BrandComponent } from './brand/brand.component';
import { CarComponent } from './car/car.component';
import { CustomerComponent } from './customer/customer.component';
import { SaleComponent } from './sale/sale.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [BrandComponent, CarComponent, CustomerComponent, SaleComponent, UserComponent]
})
export class FeaturesModule {}
