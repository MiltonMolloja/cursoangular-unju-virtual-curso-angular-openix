import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AccountService } from './account.service';
import { UtilityService } from 'app/core/services';
import { Account } from '@shared/models';

@Injectable({ providedIn: 'root' })
export class PrincipalService {

    private userIdentity: Account;
    private authenticationState = new Subject<Account>();

    authenticated = true;

    constructor(private utilityService: UtilityService, private accountService: AccountService) {}

    cleanAuthentication() {
        this.userIdentity = undefined;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
    }

    hasAnyAuthority(authorities: string[]): boolean {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }

        authorities.forEach(authority => {
            if (this.userIdentity.authorities.includes(authority)) {
                return true;
            }
        });

        return false;
    }


    hasAuthority(authority: string): boolean {
        if (!this.authenticated) return false;
        if (this.userIdentity.authorities && this.userIdentity.authorities.includes(authority)) return true;
        return false;
    }

    getIdentity(): Observable<Account> {
        if (this.userIdentity) return of(this.userIdentity);

        return this.accountService.get().pipe(
            tap(
                result => {
                    this.userIdentity = result;
                    this.authenticated = true;
                    this.authenticationState.next(this.userIdentity);
                },
                () => {
                    this.userIdentity = undefined;
                    this.authenticated = false;
                    this.authenticationState.next(this.userIdentity);
                    this.utilityService.navigateToLogin();
                }
            )
        );
    }

    getAuthenticationState(): Observable<Account> {
        return this.authenticationState.asObservable();
    }

    getImageUrl(): string {
        return this.userIdentity.imageUrl || '';
    }

}
