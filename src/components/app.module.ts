import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

import { HeaderComponent } from '_components/layout/header/header.component'
import { appRouts } from './routes'

// const Routing:ModuleWithProviders = RouterModule.forRoot(appRouts)

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        // Angular Imports
        BrowserModule,
        FormsModule,
        HttpModule,
        // Routing
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule { }