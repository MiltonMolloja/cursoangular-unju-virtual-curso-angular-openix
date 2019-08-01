import { Component, OnInit } from '@angular/core';
import { BrandService } from '@shared/services/brand.service';
import { Brand } from '@shared/models/brand.model';



@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

    constructor(private brandService: BrandService) {
        this.brandService.get(1).subscribe( (response: Brand) => {
            console.log(response);
        }
        , error => console.log(error)
        );
    }

    ngOnInit() {
    }



}
