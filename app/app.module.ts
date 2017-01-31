import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent}	from './form.component';
import {ClientesComponent} from './clientes.details';


const appRoutes: Routes = [
  { path: 'form-directive', component: FormComponent },
  { path: 'my-app', component: AppComponent },
  { path: 'clientes', component: ClientesComponent},
  

  { path: '',   redirectTo: '/my-app', pathMatch: 'full' },
  
];



@NgModule({
  imports:      [ BrowserModule,
  				  RouterModule.forRoot(appRoutes) ],
  declarations: [ NavbarComponent, AppComponent, FormComponent, ClientesComponent ],
  bootstrap:    [ NavbarComponent, ]
})
export class AppModule { }

