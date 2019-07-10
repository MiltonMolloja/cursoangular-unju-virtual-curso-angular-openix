import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _http: HttpClient) { }
/***
  public getAllBrandv2(page:number, size:number):Observable<any>{
    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        //'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvcGVuaXgiLCJVc2VySUQiOjF9.VooBOriVSGUTdOnYuYIDWnjYvTDDVxtkVPUlxdMl5oXg_1Qn85m6-hycnR2j2FVi-NVnSgu_hRML3xiGiPpqzg'
      })
    };
    return this._http.get("http://localhost:8888/api/brands?page="+ page +"&size="+ size + httpOptions);
  }


  getAllBrand(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const options = new RequestOptions({method: 'GET', url, params, headers});
    return this.request<T>(options);
}
** */
}
