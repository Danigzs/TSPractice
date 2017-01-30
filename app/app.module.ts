import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent}	from './form.component';


const appRoutes: Routes = [
  { path: 'form-directive', component: FormComponent },
  { path: 'my-app', component: AppComponent },
  { path: '',   redirectTo: '/my-app', pathMatch: 'full' },
  
];


@NgModule({
  imports:      [ BrowserModule,
  				  RouterModule.forRoot(appRoutes) ],
  declarations: [ NavbarComponent, AppComponent, FormComponent ],
  bootstrap:    [ NavbarComponent, ]
})
export class AppModule { }

