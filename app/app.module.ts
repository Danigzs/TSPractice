import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from './navbar/navbar.component';
import {formComponent}	 from './form';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavbarComponent,formComponent ],
  bootstrap:    [ AppComponent, NavbarComponent, formComponent ]
})
export class AppModule { }

