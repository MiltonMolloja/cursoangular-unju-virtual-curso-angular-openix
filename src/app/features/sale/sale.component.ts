import { Component, OnInit } from '@angular/core';

import { Sale } from '@shared/models/sale.model';
import { SaleService } from '@shared/services/sale.service';
import { CustomerService } from '@shared/services/customer.service';
import { CarService } from '@shared/services/car.service';
import { Car } from '@shared/models/car.model';
import { Customer } from '@shared/models/customer.model';


@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

    car: Car;
    cars: Array<Car>;

    sale: Sale;
    sales: Array<Sale>;

    customer: Customer;
    customers: Array<Customer>;



    constructor(private saleService: SaleService, private customerService: CustomerService, private carService: CarService) {
        this.car = new Car();
        this.cars = new Array<Car>();
        this.getCarsAll();


        this.customer = new Customer();
        this.customers = new Array<Customer>();
        this.getCustomersAll();

        this.sale = new Sale();
        this.sales = new Array<Sale>();
        this.getSalesAll();
    }

    ngOnInit() {
    }

    getCustomersAll() {
        this.customerService.getAll(0, 25).subscribe((response) => {
            this.customers = new Array<Customer>();
            response.data.forEach(element => {
                this.customers.push(element);
            });
            //this.brands = response;
            console.log(this.customers);
        }
            , error => console.log(error)
        );
    }

    getCarsAll() {
        this.carService.getAll(0, 25).subscribe((response) => {
            this.cars = new Array<Car>();
            response.data.forEach(element => {
                this.cars.push(element);
            });
            //this.brands = response;
            console.log(this.cars);
        }
            , error => console.log(error)
        );
    }

    getSalesId(id: number) {
        this.saleService.get(id).subscribe((response: Sale) => {
            this.sale = new Sale();
            this.sale = response;
            console.log(this.sale);
        }
            , error => console.log(error)
        );
    }

    getSalesAll() {
        this.saleService.getAll(0, 25).subscribe((response) => {
            this.sales = new Array<Sale>();
            response.data.forEach(element => {
                this.sales.push(element);
            });
            //this.brands = response;
            console.log(this.sales);
        }
            , error => console.log(error)
        );
    }

    postSale() {
        this.sale.car = this.car;
        this.sale.carId= this.car.id;
        this.sale.customer = this.customer;
        this.sale.saleDate = new Date();
        this.saleService.post(this.sale).subscribe(
            result => {
                console.log("Se añadio escribania");
                this.getSalesAll();
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    putSales() {
        this.saleService.put(this.sale).subscribe(
            result => {
                console.log("Se añadio escribania");
                this.getSalesAll();
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    deleteSales(id: number) {
        this.saleService.delete(id).subscribe(
            result => {
                console.log("Se añadio escribania");
                this.getSalesAll();
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }



    public elegirSale(sale: Sale) {
        this.sale = Object.assign(this.sale, sale);
    }

    public initSale() {
        this.sale = new Sale();
    }

}
