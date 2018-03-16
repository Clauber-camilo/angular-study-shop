import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HeaderComponent } from '_components/layout/header/header.component'

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
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule { }