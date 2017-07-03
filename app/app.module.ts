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
import {SellersComponent} from './sellers/sellers.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {InventarioComponent} from './inventario.component';
import {PaymentComponent} from './payment/payment.component';
import {NuevoProductoComponent} from './nuevoproducto/nuevoproducto.component';
import {ProductsListComponent} from './producto/productsList.component';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {SearchCode} from './utilities/productcode.filter'
import {SearchPipe} from './utilities/productname.filter'

import { MaterialModule } from '@angular/material';
import {ClienteService} from './cliente/cliente.service';
import {CotizadorService} from './cotizacion/cotizador.service';
import {ProductoService} from './producto/producto.service';
import {OrderService} from './orders/order.service';
import {TecnicaService} from './producto/tecnica.service';
import {SellerService} from './sellers/seller.service';
import {PaymentService}from './payment/payment.service';
import {DashboardService} from './dashboard/dashboard.service';
import {RoleService} from './roles/role.service';
import {RegisterService} from './register/register.service';
import { HttpModule, JsonpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'form-directive', component: FormComponent },
  { path: 'my-app', component: AppComponent },
  { path: 'clientes', component: ClientesComponent},
  { path: 'clients-list', component: ClientsListComponent},
  { path: 'cotizador', component: CotizadorComponent},
  // { path: 'inventario', component: InventarioComponent},
  { path: 'inventario', component: ProductsListComponent},
  { path: 'nuevoproducto', component: NuevoProductoComponent},
  { path: 'tecnicas', component: TecnicasComponent},
  { path: 'sellers', component: SellersComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
   
  

  { path: '',   redirectTo: '/my-app', pathMatch: 'full' },
  
];



@NgModule({
  imports:      [ BrowserModule,
  				  RouterModule.forRoot(appRoutes),FormsModule,
              MaterialModule.forRoot(), HttpModule,
    JsonpModule
 ],
  declarations: [ 
  NavbarComponent,
  AppComponent,
  FormComponent,
  ClientesComponent,
  ClientsListComponent,
  CotizadorComponent,
  InventarioComponent,
  ProductsListComponent,
  NuevoProductoComponent,
  TecnicasComponent,
  SellersComponent,
  CategoriasComponent,
  PaymentComponent,
  LoginComponent,
  RegisterComponent,
  SearchCode,
  SearchPipe,
  
  ],
  providers : [ CotizadorService, ClienteService, ProductoService, TecnicaService,SellerService,OrderService,DashboardService,PaymentService,RoleService,RegisterService],
  bootstrap:    [ NavbarComponent, ]
})
export class AppModule { }

