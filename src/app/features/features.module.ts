import { NgModule } from '@angular/core';
import { BrandComponent } from './brand/brand.component';
import { CarComponent } from './car/car.component';
import { CustomerComponent } from './customer/customer.component';
import { SaleComponent } from './sale/sale.component';
import { UserComponent } from './user/user.component';

@NgModule({
    imports: [
    ],
    declarations: [BrandComponent, CarComponent, CustomerComponent, SaleComponent, UserComponent]
})
export class FeaturesModule {}
