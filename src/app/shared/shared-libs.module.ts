import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        Ng2Webstorage.forRoot({ prefix: 'cursoangular', separator: '-' }),
    ],
    exports: [FormsModule, CommonModule, RouterModule, NgbModule, Ng2Webstorage]
})
export class SharedLibsModule {}
