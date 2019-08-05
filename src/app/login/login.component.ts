import { Component, OnInit } from '@angular/core';

import { LoginService, PrincipalService } from 'app/core/auth';
import { UtilityService } from 'app/core/services';
import { Login } from '@shared/models';
import { PnotifyService } from './../../app/shared/services/pnotify.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginModel = new Login();
    authenticationError: boolean;
    credentials: any;

    pnotify = undefined;

    constructor(
        private principalService: PrincipalService,
        private loginService: LoginService,
        private utilityService: UtilityService,
        pnotifyService: PnotifyService
    ) {

   this.pnotify = pnotifyService.getPNotify();
   this.pnotify.defaults.styling = 'bootstrap4';
    }

    ngOnInit() {}

    login() {
        this.loginService.login(this.loginModel).subscribe(
            () => {
                this.authenticationError = false;
                this.principalService.authenticated = true;
                this.utilityService.navigateToHome();
            },
            () => {
                this.authenticationError = true;
                this.pnotify.error({
                    text: "Usuario y Pass no Conciden...",
                    type: 'danger'
                  });
            }

        );
    }

}
