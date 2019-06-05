export class Account {
    id: number;
    username: string;
    fullName: string;
    firstName: string;
    lastName: string;
    mail: string;
    imageUrl: string;
    activated: boolean;
    authorities: string[] = [];
}
