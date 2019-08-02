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
            this.brands = response.data;
            //this.brands = response;
            console.log(this.brands);
        }
            , error => console.log(error)
        );
    }

    postBrand() {
        this.brandService.post(this.brand).subscribe(
            result => {
                console.log("Se añadio escribania");
                this.getBrandAll();
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }

    putBrand() {
        this.brandService.put(this.brand).subscribe(
            result => {
                console.log("Se añadio escribania");
                this.getBrandAll();
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
                this.getBrandAll();
            },
            error => {
                alert("Error en añadir escribania");
            }
        );
    }


    public elegirBrand(brand:Brand){
        this.brand = Object.assign(this.brand, brand);
    }

    public initBrand(){
        this.brand = new Brand();
    }

}
