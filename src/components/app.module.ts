import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

// Store Imports
import { StoreModule } from '@ngrx/store'
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component';

import { HeaderComponent } from '_components/layout/header/header.component'
import { HomeModule } from '_components/views/home//home.module'

import { appRouts } from './routes'
import { reducers } from './reducers'

const Routing:ModuleWithProviders = RouterModule.forRoot(appRouts)

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
        Routing,
        HomeModule,

        // Register the Reducers
        StoreModule.forRoot(reducers),

        StoreRouterConnectingModule.forRoot({
            /*
              They stateKey defines the name of the state used by the router-store reducer.
              This matches the key defined in the map of reducers
            */
            stateKey: 'router',
        }),

        // Register Store on devTools in Browser
        StoreDevtoolsModule.instrument({
            name: 'NgRx Book Store DevTools',
            logOnly: APP_ENV === 'production',
        }),
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule { }