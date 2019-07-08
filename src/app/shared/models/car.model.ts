import { Brand } from "./brand.model";

export class Car {
    brand: Brand;
    color: string;
    costPrice: number;
    id: number;
    img: string;
    model: string;
    motor: string;
    salePrice: number;
    version: string;
    year: number;

    constructor(brand: Brand, color: string, costPrice: number, id: number,
        img: string, model: string, motor: string, salePrice: number, version: string, year: number){
    this.brand = brand;
    this.color = color;
    this.costPrice = costPrice;
    this.id = id;
    this.img = img;
    this.model = model;
    this.motor = motor;
    this.salePrice = salePrice;
    this.version = version;
    this.year = year;
    }
}
