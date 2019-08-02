import { Car } from "./car.model";
import { Customer } from "./customer.model";
import { User } from "./user.model";

export class Sale {
    car: Car;
    customer: Customer;
    discount: number;
    finalPrice: number;
    id: number;
    payMode: string;
    saleDate: Date;
    seller: User;
    data: any;
    carId: any;
    customerId: number;

    Sale(car: Car, customer: Customer, discount: number, finalPrice: number, id: number, payMode: string, saleDate: Date, seller: User) {
        this.car = car;
        this.customer = customer;
        this.discount = discount;
        this.finalPrice = finalPrice;
        this.id = id;
        this.payMode = payMode;
        this.saleDate = saleDate;
        this.seller = seller;
    }
}
