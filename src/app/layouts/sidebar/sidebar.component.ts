import { Component, OnInit, ElementRef } from '@angular/core';
import { LoginService } from 'app/core/auth/login.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

    constructor(private loginService: LoginService) {}

    ngOnInit() {}

    collapseDropdownItems(element: ElementRef) {
        $(element).parent().toggleClass('open');
    }

}
