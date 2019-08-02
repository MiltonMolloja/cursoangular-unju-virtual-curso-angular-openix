import { Injectable } from '@angular/core';
import { Customer } from '@shared/models/customer.model';

import { Observable } from 'rxjs';
import { RequestService } from 'app/core/services';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    apiUrl = 'customers';

    constructor(private requestService: RequestService) { }


    get(id: number): Observable<Customer> {
        return this.requestService.get(this.apiUrl + "/" + id);
    }

    getAll(pag: number, element: number): Observable<Customer> {
        return this.requestService.get(this.apiUrl + "?page=" + pag + "&size=" + element);
    }

    post(customer: Customer): Observable<Customer> {
        return this.requestService.post(this.apiUrl, customer);
    }

    put(customer: Customer): Observable<Customer> {
        console.log(this.apiUrl + "/" + customer.id);
        return this.requestService.put(this.apiUrl + "/" + customer.id, customer);
    }

    delete(id: number) {
        return this.requestService.delete(this.apiUrl + "/" + id);
    }
}
