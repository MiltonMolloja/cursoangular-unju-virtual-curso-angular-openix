import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from 'app/core/services';
import { Brand } from '@shared/models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

    apiUrl = 'brands';

  constructor(private requestService: RequestService) { }

    get(id : number): Observable<Brand>{
        return this.requestService.get(this.apiUrl+"/"+id);
    }

    getAll(pag: number, element: number): Observable<Brand>{
        return this.requestService.get(this.apiUrl+"?page="+pag+"&size="+element);
    }

    post(brand: Brand): Observable<Brand>{
        return this.requestService.post(this.apiUrl,brand);
    }

    put(brand: Brand): Observable<Brand>{
        console.log(this.apiUrl+"/"+brand.id);
        return this.requestService.post(this.apiUrl+"/"+brand.id,brand);
    }
}
