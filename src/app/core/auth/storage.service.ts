import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({ providedIn: 'root' })
export class StorageService {

    constructor(private localStorageService: LocalStorageService, private sessionStorageService: SessionStorageService) {}

    getToken(): string {
        return this.localStorageService.retrieve('authenticationToken') || this.sessionStorageService.retrieve('authenticationToken');
    }

    storeToken(jwt: string, rememberMe: boolean) {
        if (rememberMe) this.localStorageService.store('authenticationToken', jwt);
        else this.sessionStorageService.store('authenticationToken', jwt);
    }

    clearToken() {
        this.localStorageService.clear('authenticationToken');
        this.sessionStorageService.clear('authenticationToken');
    }

}
