import { Component, OnInit } from '@angular/core';
import { BrandService } from '@shared/services/brand.service';
import { Brand } from '@shared/models/brand.model';

import { PnotifyService } from './../../shared/services/pnotify.service';





@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
    brand: Brand;
    brands: Array<Brand>;

    pnotify = undefined;

    constructor(private brandService: BrandService,pnotifyService: PnotifyService) {
        this.brand = new Brand();
        this.brands = new Array<Brand>();
        this.getBrandAll();

        this.pnotify = pnotifyService.getPNotify();
    this.pnotify.defaults.styling = 'bootstrap4';
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
                this.pnotify.info({
                    text: "Se Guardo Correctamtne",
                    type: 'info'
                  });
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
                this.pnotify.success({
                    text: "Se Modificado Correctamente..",
                    type: 'success'
                  });
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
                this.pnotify.error({
                    text: "Se Elimino Correctamente..",
                    type: 'danger'
                  });
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
