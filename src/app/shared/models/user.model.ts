export class User {
    birthday: Date;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
    mail: string;
    name: string;
    password: string;
    data: any;
    username: string;

    User(birthday: Date, firstName: string, fullName: string, id: number, lastName: string, mail: string, name: string, password: string) {
    this.birthday = birthday;
    this.firstName = firstName;
    this.fullName = fullName;
    this.id = id;
    this.lastName = lastName;
    this.mail = mail;
    this.name = name;
    this.password = password;
    }


}
