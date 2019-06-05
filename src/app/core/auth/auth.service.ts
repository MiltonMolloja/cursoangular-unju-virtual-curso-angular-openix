import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { RequestService } from '../services/request.service';
import { Login, Token } from '@shared/models';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private storageService: StorageService,
        private requestService: RequestService
    ) {}

    getToken(): string {
        return this.storageService.getToken();
    }

    login(loginModel: Login): Observable<any> {
        return this.requestService.post('login', loginModel).pipe(
            map((result: Token) => this.storeAuthenticationToken(result.token, loginModel.rememberMe)));
    }

    private storeAuthenticationToken(jwt: string, rememberMe: boolean) {
        this.storageService.storeToken(jwt, rememberMe);
    }

    logout() {
        this.storageService.clearToken();
    }

}
