import { Component, OnInit } from '@angular/core';


import { User } from '@shared/models/user.model';
import { UserService } from '@shared/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


    user: User;
    users: Array<User>;

    constructor(private userService: UserService) {
        this.user = new User();
        this.users = new Array<User>();
        //this.getUsersId(1);
        //this.postUser();
        //this.putUsers(2);
        //this.deleteUsers(1);
        this.getUsersAll();
    }

  ngOnInit() {
  }


  getUsersId(id: number) {
    this.userService.get(id).subscribe((response: User) => {
        this.user = new User();
        this.user = response;
        console.log(this.user);
    }
        , error => console.log(error)
    );
}

getUsersAll() {
    this.userService.getAll(0, 25).subscribe((response) => {
        this.users = new Array<User>();
        response.data.forEach(element => {
            this.users.push(element);
        });
        //this.brands = response;
        console.log(this.users);
    }
        , error => console.log(error)
    );
}

postUser() {
    this.user = new User();
    this.user.birthday = new Date("1995-04-27");
    this.user.firstName = "userf",
    this.user.lastName = " Mi app" ;
    this.user.mail = "micoreo@gmail.com";
    this.user.password = "1234";
    this.user.username = "user";
    this.userService.post(this.user).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

putUsers(id: number) {
    this.user.id = 2;
    this.user.birthday = n ew Date();
    this.user.firstName = "userf",
    this.user.lastName = " Mi app" ;
    this.user.mail = "micoreo@gmail.com";
    this.user.password = "1234";
    this.user.username = "user";
    this.userService.put(this.user).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

deleteUsers(id: number) {
    this.userService.delete(id).subscribe(
        result => {
            console.log("Se añadio escribania");
        },
        error => {
            alert("Error en añadir escribania");
        }
    );
}

}
