import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent}	from './form.component';
import {ClientesComponent} from './clientes.details';
import {CotizadorComponent} from './cotizador.component';
import {TecnicasComponent} from './tecnicas/tecnicas.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {InventarioComponent} from './inventario.component';
import {DialogProductoComponent} from './modals/dialog.producto.component'
import {DialogInventarioComponent} from './modals/dialog.inventario.component'
import { MaterialModule } from '@angular/material';


const appRoutes: Routes = [
  { path: 'form-directive', component: FormComponent },
  { path: 'my-app', component: AppComponent },
  { path: 'clientes', component: ClientesComponent},
  { path: 'cotizador', component: CotizadorComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'tecnicas', component: TecnicasComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'modal-inventario-selector', component: DialogInventarioComponent},
   
  

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
  CotizadorComponent, 
  InventarioComponent,
  TecnicasComponent, 
  CategoriasComponent, 
  DialogProductoComponent,
  DialogInventarioComponent
  ],
  entryComponents: [
    DialogProductoComponent,
    DialogInventarioComponent,

    
    ],
  bootstrap:    [ NavbarComponent, ]
})
export class AppModule { }

