import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMetro4Module } from 'ng-metro4';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMetro4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
