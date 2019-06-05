import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'app/app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'app/core/core.module';
import { LoginModule } from 'app/login/login.module';
import { AccountModule } from 'app/account/account.module';
import { HomeModule } from 'app/home/home.module';
import { MainComponent, NavbarComponent, FooterComponent, SidebarComponent } from 'app/layouts';
import { FeaturesModule } from 'app/features/features.module';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        LoginModule,
        AccountModule,
        HomeModule,
        FeaturesModule,
        AppRoutingModule
    ],
    declarations: [MainComponent, NavbarComponent, SidebarComponent, FooterComponent],
    bootstrap: [MainComponent]
})
export class AppModule { }
