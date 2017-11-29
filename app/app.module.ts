import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'
import {HomeComponent} from './home.component'
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent}	from './form.component';
import {ClientesComponent} from './clientes.details';
import {AddClientComponent} from './cliente/addClient.component';
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
import {TecnicaBordadoComponent} from './tecnicas/tecnica.bordado';
import {TecnicaSerigrafiaComponent} from './tecnicas/tecnica.serigrafia';
import {TecnicaSublimadoComponent} from './tecnicas/tecnica.sublimado';
import {TecnicaTransferComponent} from './tecnicas/tecnica.transfer';
import {TecnicaVinilComponent} from './tecnicas/tecnica.vinil';
import {VinilService} from './tecnicas/vinil.service';



import {EditSellerComponent} from './sellers/editseller.component'
import {OrdersComponent} from './orders/orders.component'
import {BordadoReportComponent} from './dailyreports/bordado.reports'
import {VerReportesComponent} from'./dailyreports/ver.reportes'
import {DeniedComponent} from'./denied/denied.component'
import {DisenoReportComponent} from './dailyreports/diseno.reports'

import {SearchCode} from './utilities/productcode.filter'
import {SearchPipe} from './utilities/productname.filter'



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
import {HttpModule, JsonpModule } from '@angular/http';
import {BordadoService} from './tecnicas/bordado.service';
import {SerigrafiaService} from'./tecnicas/serigrafia.service';
import {SublimadoService} from './tecnicas/sublimado.service';
import {TransferService} from './tecnicas/transfer.service';
import {AppConfigService} from './appConfig/appConfig.service';
import {BordadoTipoComponent} from './tecnicas_config/bordado.config.tipo';
import {BordadoTamañoComponent} from './tecnicas_config/bordado.config.size';
import {BordadoPuntadasComponent} from './tecnicas_config/bordado.config.puntadas';
import {BordadoMainComponent} from './tecnicas_config/bordados.mainscreen';
import {SerigrafiaMainComponent} from './tecnicas_config/serigrafia.mainscreen';
import {SublimadoMainComponent} from './tecnicas_config/sublimado.mainscreen';
import {BordadoTipoService} from './tecnicas_config/BordadoTipo.service';
import {BordadoPuntadasService} from './tecnicas_config/BordadoPuntadas.service';
import {BordadoSizeService} from './tecnicas_config/BordadoSize.service';
import {TipoTintaComponent} from './tecnicas_config/serigrafia.config.tipotinta';
import {PosicionComponent} from './tecnicas_config/posiciones.config';
import {PosicionesService} from './tecnicas_config/posiciones.service';
import {ColoresService} from './tecnicas_config/colores.service';
import {ColoresComponent} from './tecnicas_config/bordado.config.colores';
import {UbicacionComponent} from './tecnicas_config/ubicaciones.config';
import {UbicacionesService} from './tecnicas_config/ubicaciones.service';
import {SerigrafiaPrecioBordesaService} from './tecnicas_config/serigrafia.precioBordesa.service'
import {SerigrafiaPrecioBordesaComponent} from './tecnicas_config/serigrafia.config.precioBordesa'
import {SerigrafiaPrecioClienteService} from './tecnicas_config/serigrafia.precioCliente.service'
import {SerigrafiaPrecioClienteComponent} from './tecnicas_config/serigrafia.config.precioCliente'
import {SerigrafiaTamañoComponent} from './tecnicas_config/serigrafia.config.size';
import {SerigrafiaSizeService} from './tecnicas_config/serigrafiaSize.service';
import {SublimadoPrecioComponent} from './tecnicas_config/sublimado.config.precio';
import {SublimadoPrecioService} from './tecnicas_config/sublimadoPrecio.service';
import {SublimadoSizeService} from './tecnicas_config/sublimadoSize.service';
import {SublimadoSizeComponent} from './tecnicas_config/sublimado.config.size';
import {SublimadoPrecioMaquilaComponent} from './tecnicas_config/sublimado.config.preciomaquila';
import {SublimadoPrecioMaquilaService} from './tecnicas_config/sublimadoPrecioMaquila.service';
import {TransferSizeComponent} from './tecnicas_config/transfer.config.size';
import {TransferSizeService} from './tecnicas_config/transferSize.service';
import {TransferMainComponent} from './tecnicas_config/transfer.mainscreen';
import {TransferPrecioComponent} from './tecnicas_config/transfer.config.precio';
import {TransferPrecioService} from './tecnicas_config/transferPrecio.service';
import {TransferPrecioMaquilaService} from './tecnicas_config/transferPrecioMaquila.service';
import {TransferPrecioMaquilaComponent} from './tecnicas_config/transfer.config,preciomaquila';
import {VinilTipoComponent} from './tecnicas_config/vinil.config.tipo';
import {VinilTipoService} from './tecnicas_config/vinilTipo.service';
import {VinilMainComponent} from './tecnicas_config/vinil.mainscreen';
import {VinilPrecioComponent} from './tecnicas_config/vinil.config.precio';
import {VinilPrecioService} from './tecnicas_config/vinilPrecio.service';
import {VinilPrecioMaquilaService} from './tecnicas_config/vinilPrecioMaquila.service';
import {VinilPrecioMaquilaComponent} from './tecnicas_config/vinil.config.precioMaquila';
import {VinilSizeComponent} from './tecnicas_config/vinil.config.size';
import {VinilSizeService} from './tecnicas_config/vinilSize.service';
import {appConfigComponent} from './appConfig/appConfig.config';





 



import{ AuthGuard} from './guards/auth.guard'
const appRoutes: Routes = [
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: AppComponent },
  { path: 'clientes', component: ClientesComponent,canActivate: [AuthGuard]},
  { path: 'clients-list', component: ClientsListComponent},
  { path: 'cotizador', component: CotizadorComponent,canActivate: [AuthGuard]},
  // { path: 'inventario', component: InventarioComponent},
  { path: 'inventario', component: ProductsListComponent},
  { path: 'nuevoproducto', component: NuevoProductoComponent,canActivate: [AuthGuard]},
  { path: 'tecnicas', component: TecnicasComponent},
  { path: 'sellers', component: SellersComponent},
  { path: 'editSeller', component: EditSellerComponent,canActivate: [AuthGuard]},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'payment', component: PaymentComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent,canActivate: [AuthGuard]},
  { path: 'orders', component: OrdersComponent },
  { path: 'bordadoreport', component: BordadoReportComponent,canActivate: [AuthGuard]},
  { path: 'verreportes', component: VerReportesComponent,canActivate: [AuthGuard]},
  { path: 'denied', component: DeniedComponent},
  { path: 'disenoreport', component: DisenoReportComponent},
  { path: 'tecnicabordado', component: TecnicaBordadoComponent},
  { path: 'tecnicaserigrafia', component: TecnicaSerigrafiaComponent},
  { path: 'tecnicasublimado', component: TecnicaSublimadoComponent},
  { path: 'tecnicatransfer', component: TecnicaTransferComponent},
  { path: 'bordado-tipo', component: BordadoTipoComponent},
  { path: 'bordado-size', component: BordadoTamañoComponent},
  { path: 'bordado-puntadas', component: BordadoPuntadasComponent},
  { path: 'bordado-main', component: BordadoMainComponent},
  { path: 'serigrafia-main', component: SerigrafiaMainComponent},
  { path: 'sublimado-main', component: SublimadoMainComponent},
  { path: 'tinta-tipo', component: TipoTintaComponent},
  { path: 'posiciones', component: PosicionComponent},
  { path: 'bordado-colores', component: ColoresComponent},
  { path: 'ubicaciones', component: UbicacionComponent},
  { path: 'serigrafia-preciobordesa', component: SerigrafiaPrecioBordesaComponent}, 
  { path: 'serigrafia-preciocliente', component: SerigrafiaPrecioClienteComponent},
  { path: 'serigrafia-size', component: SerigrafiaTamañoComponent},
  { path: 'sublimado-precio', component: SublimadoPrecioComponent},
  { path: 'sublimado-preciomaquila', component: SublimadoPrecioMaquilaComponent},
  { path: 'sublimado-size', component: SublimadoSizeComponent},
  { path: 'sublimado-size', component: SublimadoSizeComponent},
  { path: 'transfer-size', component: TransferSizeComponent},
  { path: 'transfer-main', component: TransferMainComponent},
  { path: 'transfer-precio', component: TransferPrecioComponent},
  { path: 'transfer-precioMaquila', component: TransferPrecioMaquilaComponent},
  { path: 'vinil-tipo', component: VinilTipoComponent},
  { path: 'vinil-main', component: VinilMainComponent},
  { path: 'vinil-precio', component: VinilPrecioComponent},
  { path: 'vinil-preciomaquila', component: VinilPrecioMaquilaComponent},
  { path: 'vinil-size', component: VinilSizeComponent},
  { path: 'tecnicavinilr', component: TecnicaVinilComponent},
  { path: 'appconfig', component: appConfigComponent},

  
  
];



@NgModule({
  imports:      [ BrowserModule,
  				  RouterModule.forRoot(appRoutes),FormsModule,
               HttpModule,
    JsonpModule,
    MultiselectDropdownModule
 ],
  declarations: [ 
  NavbarComponent,
  AppComponent,
  FormComponent,
  ClientesComponent,
  AddClientComponent,
  ClientsListComponent,
  CotizadorComponent,
  InventarioComponent,
  ProductsListComponent,
  NuevoProductoComponent,
  TecnicasComponent,
  SellersComponent,
  EditSellerComponent,
  CategoriasComponent,
  PaymentComponent,
  LoginComponent,
  RegisterComponent,
  SearchCode,
  SearchPipe,
  HomeComponent,
  OrdersComponent,
  BordadoReportComponent,
  VerReportesComponent,
  DeniedComponent,
  DisenoReportComponent,
  TecnicaBordadoComponent,
  TecnicaSerigrafiaComponent,
  TecnicaSublimadoComponent,
  TecnicaTransferComponent,
  BordadoTipoComponent,
  BordadoTamañoComponent,
  BordadoPuntadasComponent,
  BordadoMainComponent,
  SerigrafiaMainComponent,
  SublimadoMainComponent,
  TipoTintaComponent,
  PosicionComponent,
  ColoresComponent,
  UbicacionComponent,
  SerigrafiaPrecioBordesaComponent,
  SerigrafiaPrecioClienteComponent,
  SerigrafiaTamañoComponent,
  SublimadoPrecioComponent,
  SublimadoSizeComponent,
  SublimadoPrecioMaquilaComponent,
  TransferSizeComponent,
  TransferMainComponent,
  TransferPrecioComponent,
  TransferPrecioMaquilaComponent,
  VinilTipoComponent,
  VinilMainComponent,
  VinilPrecioComponent,
  VinilPrecioMaquilaComponent,
  VinilSizeComponent,
  TecnicaVinilComponent,
  appConfigComponent
  ],
  providers : [  AuthGuard,CotizadorService, 
    ClienteService, 
    ProductoService,
     TecnicaService,
    SellerService,
    OrderService,DashboardService,PaymentService,
    RoleService,RegisterService, BordadoService, SerigrafiaService,
    SublimadoService, TransferService,
    UbicacionesService, BordadoSizeService,ColoresComponent, 
    BordadoPuntadasService, 
    BordadoTipoService,AppConfigService,SublimadoPrecioService,
    SerigrafiaPrecioBordesaService,
    SerigrafiaSizeService,SublimadoSizeService,
    PosicionesService,ColoresService,
    SerigrafiaPrecioClienteService,
    SublimadoPrecioMaquilaService,
    TransferSizeService,
    TransferPrecioService,
    VinilTipoService
    ,TransferPrecioMaquilaService,
    VinilPrecioMaquilaService,
    VinilPrecioService,VinilService],
  bootstrap:    [ AppComponent]
})
export class AppModule { }

