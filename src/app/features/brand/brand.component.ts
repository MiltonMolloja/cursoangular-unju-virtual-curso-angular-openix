import { Component, OnInit } from '@angular/core';
import { BrandService } from '@shared/services/brand.service';



@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

    constructor(private brandService: BrandService) {
        this.getAllBrand(1,25);
    }

    ngOnInit() {
    }

    getAllBrand(page: number, size: number) {
        this.brandService.getAllBrand(page, size).subscribe(
            (result) => {
                //es necesario que convierta el JSON que
                console.log(result);
            },
            error => {
                alert("Error en la petición");
            }
        )
    }







}
