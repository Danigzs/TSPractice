"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var form_component_1 = require("./form.component");
var clientes_details_1 = require("./clientes.details");
var clientsList_component_1 = require("./cliente/clientsList.component");
var cotizador_component_1 = require("./cotizador.component");
var tecnicas_component_1 = require("./tecnicas/tecnicas.component");
var sellers_component_1 = require("./sellers/sellers.component");
var categorias_component_1 = require("./categorias/categorias.component");
var inventario_component_1 = require("./inventario.component");
var nuevoproducto_component_1 = require("./nuevoproducto/nuevoproducto.component");
var productsList_component_1 = require("./producto/productsList.component");
var material_1 = require("@angular/material");
var cliente_service_1 = require("./cliente/cliente.service");
var cotizador_service_1 = require("./cotizacion/cotizador.service");
var producto_service_1 = require("./producto/producto.service");
var order_service_1 = require("./orders/order.service");
var tecnica_service_1 = require("./producto/tecnica.service");
var seller_service_1 = require("./sellers/seller.service");
var dashboard_service_1 = require("./dashboard/dashboard.service");
var http_1 = require("@angular/http");
var appRoutes = [
    { path: 'form-directive', component: form_component_1.FormComponent },
    { path: 'my-app', component: app_component_1.AppComponent },
    { path: 'clientes', component: clientes_details_1.ClientesComponent },
    { path: 'clients-list', component: clientsList_component_1.ClientsListComponent },
    { path: 'cotizador', component: cotizador_component_1.CotizadorComponent },
    // { path: 'inventario', component: InventarioComponent},
    { path: 'inventario', component: productsList_component_1.ProductsListComponent },
    { path: 'nuevoproducto', component: nuevoproducto_component_1.NuevoProductoComponent },
    { path: 'tecnicas', component: tecnicas_component_1.TecnicasComponent },
    { path: 'sellers', component: sellers_component_1.SellersComponent },
    { path: 'categorias', component: categorias_component_1.CategoriasComponent },
    { path: '', redirectTo: '/my-app', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule,
            material_1.MaterialModule.forRoot(), http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            navbar_component_1.NavbarComponent,
            app_component_1.AppComponent,
            form_component_1.FormComponent,
            clientes_details_1.ClientesComponent,
            clientsList_component_1.ClientsListComponent,
            cotizador_component_1.CotizadorComponent,
            inventario_component_1.InventarioComponent,
            productsList_component_1.ProductsListComponent,
            nuevoproducto_component_1.NuevoProductoComponent,
            tecnicas_component_1.TecnicasComponent,
            sellers_component_1.SellersComponent,
            categorias_component_1.CategoriasComponent,
        ],
        providers: [cotizador_service_1.CotizadorService, cliente_service_1.ClienteService, producto_service_1.ProductoService, tecnica_service_1.TecnicaService, seller_service_1.SellerService, order_service_1.OrderService, dashboard_service_1.DashboardService],
        bootstrap: [navbar_component_1.NavbarComponent,]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map