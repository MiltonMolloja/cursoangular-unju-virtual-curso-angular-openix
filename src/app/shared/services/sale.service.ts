import { Injectable } from '@angular/core';


import { Sale } from '@shared/models/sale.model';

import { Observable } from 'rxjs';
import { RequestService } from 'app/core/services';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

    apiUrl = 'sales';

    constructor(private requestService: RequestService) { }


    get(id: number): Observable<Sale> {
        return this.requestService.get(this.apiUrl + "/" + id);
    }

    getAll(pag: number, element: number): Observable<Sale> {
        return this.requestService.get(this.apiUrl + "?page=" + pag + "&size=" + element);
    }

    post(sale: Sale): Observable<Sale> {
        return this.requestService.post(this.apiUrl, sale);
    }

    put(sale: Sale): Observable<Sale> {
        console.log(this.apiUrl + "/" + sale.id);
        return this.requestService.put(this.apiUrl + "/" + sale.id, sale);
    }

    delete(id: number) {
        return this.requestService.delete(this.apiUrl + "/" + id);
    }
}
