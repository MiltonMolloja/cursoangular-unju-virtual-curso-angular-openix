import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class UtilityService {

    constructor(private router: Router) {}

    navigate(path: string) {
        this.router.navigate([path]);
    }

    navigateToLogin() {
        this.navigate('/login');
    }

    navigateToError() {
        this.navigate('/error');
    }

    navigateToHome() {
        this.navigate('');
    }

    // navigateToBack() {
    //     // this.navigate(this.history.previousUrl);
    // }

    reloadPage() {
        window.location.reload();
    }

    getNow(outputFormat?: string): string {
        return moment().format(outputFormat || 'DD/MM/YYYY');
    }

}
