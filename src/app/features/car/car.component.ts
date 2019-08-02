import { Component, OnInit } from '@angular/core';
import { CarService } from '@shared/services/car.service';
import { Car } from '@shared/models/car.model';
import { Brand } from '@shared/models/brand.model';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
    car: Car;
    brand: Brand;
    cars: Array<Car>;

    constructor(private carService: CarService) {
        this.car = new Car();
        this.brand = new Brand();
        this.cars = new Array<Car>();
        //this.deleteCars(1);
        //this.putCars(1);
        //this.postBrand();
        this.getCarsAll();
    }

    ngOnInit() {
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

    postBrand() {
        this.car = new Car();
        this.brand = new Brand();
        this.brand.id = 1;
        this.car.brand = this.brand;
        this.car.brandId = this.car.brand.id;
        this.car.color = "Negro";
        this.car.costPrice = 9999;
        this.car.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4irRlswEYYOs2HL5oe9X6WfTXalclFegI1GV0MRgdDJqWxiS";
        this.car.model = "Loogan";
        this.car.motor = "55";
        this.car.salePrice = 99999;
        this.car.version = "MiaMia";
        this.car.year = 2019;
        this.carService.post(this.car).subscribe(
            result => {
                console.log("Se añadio escribania");
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    putCars(id: number) {
        this.car = new Car();
        this.brand = new Brand();
        this.brand.id = 1;
        this.car.brand = this.brand;
        this.car.brandId = this.car.brand.id;
        this.car.id = 1;
        this.car.color = "XxXxX";
        this.car.costPrice = 5555;
        this.car.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4irRlswEYYOs2HL5oe9X6WfTXalclFegI1GV0MRgdDJqWxiS";
        this.car.model = "Loogan";
        this.car.motor = "55";
        this.car.salePrice = 50505;
        this.car.version = "ModMod";
        this.car.year = 5555;
        this.carService.put(this.car).subscribe(
            result => {
                console.log("Se añadio escribania");
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
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

}

