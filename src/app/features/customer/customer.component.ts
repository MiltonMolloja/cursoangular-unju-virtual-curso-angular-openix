import { Component, OnInit } from '@angular/core';

import { CustomerService } from '@shared/services/customer.service';
import { Customer } from '@shared/models/customer.model';

import { PnotifyService } from './../../shared/services/pnotify.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    customer: Customer;
    customers: Array<Customer>;

    pnotify = undefined;

    constructor(private customerService: CustomerService, pnotifyService: PnotifyService) {
        this.customer = new Customer();
        this.customers = new Array<Customer>();
        this.getCustomersAll();

        this.pnotify = pnotifyService.getPNotify();
        this.pnotify.defaults.styling = 'bootstrap4';
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
    this.customer.birthdate  = new Date();
    this.customerService.post(this.customer).subscribe(
        result => {
            console.log("Se añadio escribania");
            this.pnotify.info({
                text: "Se Guardo Correctamtne",
                type: 'info'
              });

            this.getCustomersAll();
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

putCustomers() {
    this.customerService.put(this.customer).subscribe(
        result => {
            console.log("Se añadio escribania");
            this.pnotify.success({
                text: "Se Modificado Correctamente..",
                type: 'success'
              });
            this.getCustomersAll();
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
            this.pnotify.error({
                text: "Se Elimino Correctamente..",
                type: 'danger'
              });
            this.getCustomersAll();
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

public elegirCustomer(customer:Customer){
    this.customer = Object.assign(this.customer, customer);
}

public initCustomer(){
    this.customer = new Customer();
}


}
