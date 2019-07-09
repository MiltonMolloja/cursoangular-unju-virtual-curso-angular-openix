import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from './request.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CommonService {
    url: string;
    params: HttpParams;
    headers: HttpHeaders;

    constructor(private requestService: RequestService) {

        this.headers= new HttpHeaders({Authorization:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvcGVuaXgiLCJVc2VySUQiOjF9.VooBOriVSGUTdOnYuYIDWnjYvTDDVxtkVPUlxdMl5oXg_1Qn85m6-hycnR2j2FVi-NVnSgu_hRML3xiGiPpqzg'});
    }

    get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {

}
