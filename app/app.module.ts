import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent}	from './form.component';
import {ClientesComponent} from './clientes.details';
import {ClientsListComponent} from './cliente/clientsList.component';
import {CotizadorComponent} from './cotizador.component';
import {TecnicasComponent} from './tecnicas/tecnicas.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {InventarioComponent} from './inventario.component';
import {NuevoProductoComponent} from './nuevoproducto/nuevoproducto.component';
import { MaterialModule } from '@angular/material';
import {ClienteService} from './cliente/cliente.service'
import {CotizadorService} from './cotizacion/cotizador.service'
import {ProductoService} from './producto/producto.service'
import {TecnicaService} from './producto/tecnica.service'

const appRoutes: Routes = [
  { path: 'form-directive', component: FormComponent },
  { path: 'my-app', component: AppComponent },
  { path: 'clientes', component: ClientesComponent},
  { path: 'clients-list', component: ClientsListComponent},
  { path: 'cotizador', component: CotizadorComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'nuevoproducto', component: NuevoProductoComponent},
  { path: 'tecnicas', component: TecnicasComponent},
  { path: 'categorias', component: CategoriasComponent},
   
  

  { path: '',   redirectTo: '/my-app', pathMatch: 'full' },
  
];



@NgModule({
  imports:      [ BrowserModule,
  				  RouterModule.forRoot(appRoutes),FormsModule,
              MaterialModule.forRoot()
 ],
  declarations: [ 
  NavbarComponent,
  AppComponent,
  FormComponent,
  ClientesComponent,
  ClientsListComponent,
  CotizadorComponent,
  InventarioComponent,
  NuevoProductoComponent,
  TecnicasComponent,
  CategoriasComponent,
  
  ],
  providers : [ CotizadorService, ClienteService, ProductoService, TecnicaService],
  bootstrap:    [ NavbarComponent, ]
})
export class AppModule { }

