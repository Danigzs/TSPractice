"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cotizador_service_1 = require('./cotizacion/cotizador.service');
var cliente_service_1 = require('./cliente/cliente.service');
var cliente_1 = require('./cliente/cliente');
var dialog_producto_component_1 = require('./modals/dialog.producto.component');
var cotizacion_1 = require('./cotizacion/cotizacion');
var material_1 = require('@angular/material');
// import { Modal } from './modals/modalAgregarProducto';
var CotizadorComponent = (function () {
    function CotizadorComponent(dialog, _cotizadorService, _clienteService) {
        this.dialog = dialog;
        // dialogProducto = DialogProductoComponent;
        this.cotizacion = new cotizacion_1.Cotizacion();
        this.selectedValue = {};
        this.clienteSelected = new cliente_1.Cliente;
        this.currentDate = this.getTodayDate();
        this.clientes = _clienteService.getClientes();
        this.clienteSelected = this.clientes[0];
        this.cotizacion.cliente = this.clienteSelected;
        this.init();
    }
    CotizadorComponent.prototype.updateCliente = function (event) {
        console.warn(this.clienteSelected);
    };
    CotizadorComponent.prototype.init = function () {
        this.cotizacion.numeroCotizacion = "000000000001";
    };
    CotizadorComponent.prototype.getTodayDate = function () {
        return new Date().toLocaleDateString();
    };
    CotizadorComponent.prototype.open = function () {
        var dialogRef;
        dialogRef = this.dialog.open(dialog_producto_component_1.DialogProductoComponent);
        return dialogRef.afterClosed();
    };
    CotizadorComponent = __decorate([
        core_1.Component({
            selector: 'cotizador',
            // directives: [ Modal ],
            providers: [cotizador_service_1.CotizadorService, cliente_service_1.ClienteService],
            styleUrls: ["app/cotizador.css"],
            templateUrl: "app/cotizador.html"
        }), 
        __metadata('design:paramtypes', [material_1.MdDialog, cotizador_service_1.CotizadorService, cliente_service_1.ClienteService])
    ], CotizadorComponent);
    return CotizadorComponent;
}());
exports.CotizadorComponent = CotizadorComponent;
//# sourceMappingURL=cotizador.component.js.map