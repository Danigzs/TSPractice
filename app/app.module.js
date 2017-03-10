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
var cotizador_component_1 = require("./cotizador.component");
var inventario_component_1 = require("./inventario.component");
var dialog_producto_component_1 = require("./modals/dialog.producto.component");
var material_1 = require("@angular/material");
var appRoutes = [
    { path: 'form-directive', component: form_component_1.FormComponent },
    { path: 'my-app', component: app_component_1.AppComponent },
    { path: 'clientes', component: clientes_details_1.ClientesComponent },
    { path: 'cotizador', component: cotizador_component_1.CotizadorComponent },
    { path: 'inventario', component: inventario_component_1.InventarioComponent },
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
            material_1.MaterialModule.forRoot()
        ],
        declarations: [navbar_component_1.NavbarComponent, app_component_1.AppComponent, form_component_1.FormComponent, clientes_details_1.ClientesComponent, cotizador_component_1.CotizadorComponent, inventario_component_1.InventarioComponent, dialog_producto_component_1.DialogProductoComponent],
        entryComponents: [dialog_producto_component_1.DialogProductoComponent],
        bootstrap: [navbar_component_1.NavbarComponent,]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map