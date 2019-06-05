import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RequestService } from 'app/core/services/request.service';
import { Account } from '@shared/models';

@Injectable({ providedIn: 'root' })
export class AccountService {

    constructor(private requestService: RequestService) {}

    get(): Observable<Account> {
        return this.requestService.get<Account>('account').pipe(
            map( result => {
                return result;
            })
        );
    }

    save(account: Account): Observable<Account> {
        return this.requestService.post('api/account', account);
    }

}
