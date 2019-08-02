import { Injectable } from '@angular/core';

import { User } from '@shared/models/user.model';

import { Observable } from 'rxjs';
import { RequestService } from 'app/core/services';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    apiUrl = 'users';

    constructor(private requestService: RequestService) { }


    get(id: number): Observable<User> {
        return this.requestService.get(this.apiUrl + "/" + id);
    }

    getAll(pag: number, element: number): Observable<User> {
        return this.requestService.get(this.apiUrl + "?page=" + pag + "&size=" + element);
    }

    post(user: User): Observable<User> {
        return this.requestService.post(this.apiUrl, user);
    }

    put(user: User): Observable<User> {
        console.log(this.apiUrl + "/" + user.id);
        return this.requestService.put(this.apiUrl + "/" + user.id, user);
    }

    delete(id: number) {
        return this.requestService.delete(this.apiUrl + "/" + id);
    }
}
