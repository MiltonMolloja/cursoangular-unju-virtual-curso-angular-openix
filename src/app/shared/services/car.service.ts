import { Injectable } from '@angular/core';
import { Car } from '@shared/models/car.model';
import { Observable } from 'rxjs';
import { RequestService } from 'app/core/services';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    apiUrl = 'cars';

    constructor(private requestService: RequestService) { }


    get(id: number): Observable<Car> {
        return this.requestService.get(this.apiUrl + "/" + id);
    }

    getAll(pag: number, element: number): Observable<Car> {
        return this.requestService.get(this.apiUrl + "?page=" + pag + "&size=" + element);
    }

    post(car: Car): Observable<Car> {
        return this.requestService.post(this.apiUrl, car);
    }

    put(car: Car): Observable<Car> {
        console.log(this.apiUrl + "/" + car.id);
        return this.requestService.put(this.apiUrl + "/" + car.id, car);
    }

    delete(id: number) {
        return this.requestService.delete(this.apiUrl + "/" + id);
    }
}
