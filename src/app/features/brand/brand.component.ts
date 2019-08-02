import { Component, OnInit } from '@angular/core';
import { BrandService } from '@shared/services/brand.service';
import { Brand } from '@shared/models/brand.model';



@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
    brand: Brand;
    brands: Array<Brand>;

    constructor(private brandService: BrandService) {
        this.brand = new Brand();
        this.brands = new Array<Brand>();
        //this.getBrandId(1);
        //this.postBrand();
        //this.putBrand(2);
        //this.deletebrand(2);
        this.getBrandAll();
    }

    ngOnInit() {
    }

    getBrandId(id: number) {
        this.brandService.get(id).subscribe((response: Brand) => {
            this.brand = new Brand();
            this.brand = response;
            console.log(this.brand);
        }
            , error => console.log(error)
        );
    }

    getBrandAll() {
        this.brandService.getAll(0, 25).subscribe((response) => {
            this.brands = new Array<Brand>();
            response.data.forEach(element => {
                this.brands.push(element);
            });
            //this.brands = response;
            console.log(this.brands);
        }
            , error => console.log(error)
        );
    }

    postBrand() {
        //postBrand(brand: Brand){
        this.brand.name = "XxX";
        this.brand.description = "???";
        console.log("this.brand");
        console.log(this.brand);
        this.brandService.post(this.brand).subscribe(
            result => {
                console.log("Se añadio escribania");
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    putBrand(id: number) {
        //postBrand(brand: Brand){
        this.brand.name = "XxX";
        this.brand.id = 2;
        this.brand.description = "???";
        console.log("this.brand");
        console.log(this.brand);
        this.brandService.put(this.brand).subscribe(
            result => {
                console.log("Se añadio escribania");
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    deletebrand(id: number) {
        this.brandService.delete(id).subscribe(
            result => {
                console.log("Se añadio escribania");
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }
}
