import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent}	from './form.component';
import {ClientesComponent} from './clientes.details';
import {CotizadorComponent} from './cotizador.component';
import {InventarioComponent} from './inventario.component';


const appRoutes: Routes = [
  { path: 'form-directive', component: FormComponent },
  { path: 'my-app', component: AppComponent },
  { path: 'clientes', component: ClientesComponent},
  { path: 'cotizador', component: CotizadorComponent},
  { path: 'inventario', component: InventarioComponent},
  

  { path: '',   redirectTo: '/my-app', pathMatch: 'full' },
  
];



@NgModule({
  imports:      [ BrowserModule,
  				  RouterModule.forRoot(appRoutes),FormsModule ],
  declarations: [ NavbarComponent, AppComponent, FormComponent, ClientesComponent, CotizadorComponent, InventarioComponent ],
  bootstrap:    [ NavbarComponent, ]
})
export class AppModule { }

