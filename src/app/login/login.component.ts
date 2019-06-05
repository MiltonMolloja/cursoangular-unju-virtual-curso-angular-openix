import { Component, OnInit } from '@angular/core';

import { LoginService, PrincipalService } from 'app/core/auth';
import { UtilityService } from 'app/core/services';
import { Login } from '@shared/models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginModel = new Login();
    authenticationError: boolean;
    credentials: any;

    constructor(
        private principalService: PrincipalService,
        private loginService: LoginService,
        private utilityService: UtilityService
    ) {}

    ngOnInit() {}

    login() {
        this.loginService.login(this.loginModel).subscribe(
            () => {
                this.authenticationError = false;
                this.principalService.authenticated = true;
                this.utilityService.navigateToHome();
            },
            () => this.authenticationError = true
        );
    }

}
