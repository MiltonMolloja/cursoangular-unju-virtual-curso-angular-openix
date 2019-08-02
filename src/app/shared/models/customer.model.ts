export class Customer {
    address: string;
    birthdate: Date;
    dni: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    data: any;

    Customer(address: string, birthdate: Date, dni: string, email: string, firstName: string, id: number, lastName: string) {
        this.address = address;
        this.birthdate = birthdate;
        this.dni = dni;
        this.email = email;
        this.firstName = firstName;
        this.id = id;
        this.lastName = lastName;
    }

}
