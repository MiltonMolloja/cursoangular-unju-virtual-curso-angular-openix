import { Component, OnInit } from '@angular/core';

import { PrincipalService, LoginService } from 'app/core/auth';
import { Account } from '@shared/models';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    identity: Account;

    constructor(private principalService: PrincipalService, private loginService: LoginService) {}

    ngOnInit() {
        this.principalService.getIdentity()
            .subscribe(result => this.identity = result);
    }

    logout() {
        this.loginService.logout();
    }

    collapseSidebar(isMobile?: boolean) {
        if (isMobile) $('#main').toggleClass('sidebar-mobile-show');
        else $('#main').toggleClass('sidebar-hidden');
    }

}
