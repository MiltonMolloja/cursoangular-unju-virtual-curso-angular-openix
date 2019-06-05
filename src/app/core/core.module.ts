import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        httpInterceptorProviders
    ]
})
export class CoreModule {}

