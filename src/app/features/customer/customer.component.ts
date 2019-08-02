import { Component, OnInit } from '@angular/core';

import { CustomerService } from '@shared/services/customer.service';
import { Customer } from '@shared/models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    customer: Customer;
    customers: Array<Customer>;

    constructor(private customerService: CustomerService) {
        this.customer = new Customer();
        this.customers = new Array<Customer>();
        //this.getCustomersId(1);
        //this.postCustomer();
        //this.putCustomers(1);
        //this.deleteCustomers(1);
        this.getCustomersAll();
    }

  ngOnInit() {
  }


  getCustomersId(id: number) {
    this.customerService.get(id).subscribe((response: Customer) => {
        this.customer = new Customer();
        this.customer = response;
        console.log(this.customer);
    }
        , error => console.log(error)
    );
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

postCustomer() {
    this.customer = new Customer();
    this.customer.address = "Direc XXX";
    this.customer.birthdate  = new Date();
    this.customer.dni = "9999999";
    this.customer.email = "micorreo@gmail.com";
    this.customer.firstName = "My Name";
    this.customer.lastName = "App";
    this.customerService.post(this.customer).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

putCustomers(id: number) {
    this.customer.id = 1;
    this.customer.address = "Direc XXX";
    this.customer.birthdate  = new Date();
    this.customer.dni = "9999999";
    this.customer.email = "micorreo@gmail.com";
    this.customer.firstName = "My Name";
    this.customer.lastName = "App";
    this.customerService.put(this.customer).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

deleteCustomers(id: number) {
    this.customerService.delete(id).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

}
