import { Component, OnInit } from '@angular/core';
import { CarService } from '@shared/services/car.service';
import { Car } from '@shared/models/car.model';
import { Brand } from '@shared/models/brand.model';
import { BrandService } from '@shared/services/brand.service';

import { PnotifyService } from './../../shared/services/pnotify.service';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
    car: Car;
    cars: Array<Car>;

    brand: Brand;
    brands: Array<Brand>;

    pnotify = undefined;


    constructor(private carService: CarService, private brandService: BrandService,pnotifyService: PnotifyService) {
        this.brand = new Brand();
        this.brands = new Array<Brand>();
        this.getBrandAll();

        this.car = new Car();
        this.cars = new Array<Car>();
        this.getCarsAll();

        this.pnotify = pnotifyService.getPNotify();
        this.pnotify.defaults.styling = 'bootstrap4';


    }

    ngOnInit() {
    }

    getBrandAll() {
        this.brandService.getAll(0, 25).subscribe((response) => {
            this.brands = response.data;
            //this.brands = response;
            console.log(this.brands);
        }
            , error => console.log(error)
        );
    }

    getCarsId(id: number) {
        this.carService.get(id).subscribe((response: Car) => {
            this.car = new Car();
            this.car = response;
            console.log(this.car);
        }
            , error => console.log(error)
        );
    }

    getCarsAll() {
        this.carService.getAll(0, 25).subscribe((response) => {
            this.cars = new Array<Car>();
            response.data.forEach(element => {
                this.cars.push(element);
            });
            //this.brands = response;
            console.log(this.cars);
        }
            , error => console.log(error)
        );
    }

    postCar() {
        //this.car.brand = this.brand;
        //this.car.brandId = this.car.brand.id;
        this.car.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4irRlswEYYOs2HL5oe9X6WfTXalclFegI1GV0MRgdDJqWxiS";
        this.car.motor = "55";
        this.car.version = "MiaMia";
        this.carService.post(this.car).subscribe(
            result => {
                console.log("Se añadio escribania");
                this.pnotify.info({
                    text: "Se Guardo Correctamtne",
                    type: 'info'
                  });
                this.getCarsAll();
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    putCars() {
        this.carService.put(this.car).subscribe(
            result => {
                console.log("Se añadio escribania");
                this.pnotify.success({
                    text: "Se Modificado Correctamente..",
                    type: 'success'
                  });
                this.getCarsAll();
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    deleteCars(id: number) {
        this.carService.delete(id).subscribe(
            result => {
                console.log("Se añadio escribania");
                this.pnotify.error({
                    text: "Se Elimino Correctamente..",
                    type: 'danger'
                  });
                this.getCarsAll();
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    public elegirCar(car:Car){
        this.car = Object.assign(this.car, car);
        this.brand = this.car.brand;
    }

    public initCar(){
        this.car = new Car();
    }

}


