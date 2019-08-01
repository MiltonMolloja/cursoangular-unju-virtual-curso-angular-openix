export class Brand {
    [x: string]: any;
    description: string;
    id: number;
    name: string;

    Brand(description: string, id: number, name: string) {
        this.description = description;
        this.id = id;
        this.name = name;
    }
}
