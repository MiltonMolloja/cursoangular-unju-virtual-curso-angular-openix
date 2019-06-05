import { Component } from '@angular/core';

import { PrincipalService } from 'app/core/auth';

@Component({
    selector: 'app-root',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {

    constructor(public principalService: PrincipalService) {}

}
