import { Component, OnInit } from '@angular/core';

import { Sale } from '@shared/models/sale.model';
import { SaleService } from '@shared/services/sale.service';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {


    sale: Sale;
    sales: Array<Sale>;

    constructor(private saleService: SaleService) {
        this.sale = new Sale();
        this.sales = new Array<Sale>();
        //this.getSalesId(1);
        //this.postSale();
        //this.putSales(1);
        //this.deleteSales(1);
        this.getSalesAll();
    }

  ngOnInit() {
  }


  getSalesId(id: number) {
    this.saleService.get(id).subscribe((response: Sale) => {
        this.sale = new Sale();
        this.sale = response;
        console.log(this.sale);
    }
        , error => console.log(error)
    );
}

getSalesAll() {
    this.saleService.getAll(0, 25).subscribe((response) => {
        this.sales = new Array<Sale>();
        response.data.forEach(element => {
            this.sales.push(element);
        });
        //this.brands = response;
        console.log(this.sales);
    }
        , error => console.log(error)
    );
}

postSale() {
    this.sale = new Sale();
    this.sale.carId = 1;
    this.sale.customerId = 1;
    this.sale.discount = 10;
    this.sale.finalPrice = 99999;
    this.sale.payMode = "CONTADO_/_FINANCIADO";
    this.sale.saleDate  = new Date("1995-04-27");
    this.saleService.post(this.sale).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

putSales(id: number) {
    this.sale.id = 1;
    this.sale.carId = 1;
    this.sale.customerId = 1;
    this.sale.discount = 10;
    this.sale.finalPrice = 99999;
    this.sale.payMode = "CONTADO_/_FINANCIADO";
    this.saleService.put(this.sale).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

deleteSales(id: number) {
    this.saleService.delete(id).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

}
