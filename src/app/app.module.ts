import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMetro4Module } from 'ng-metro4';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { TorrentComponent } from './torrent/torrent.component';
import { TorrentUtil } from './torrent/torrent.util';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TorrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMetro4Module,
    HttpClientModule,
  ],
  providers: [TorrentUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
