import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, ],
  declarations: [ AppComponent, NavbarComponent, ],
  bootstrap:    [ AppComponent, NavbarComponent, ]
})
export class AppModule { }

