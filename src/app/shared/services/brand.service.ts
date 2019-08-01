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
}
