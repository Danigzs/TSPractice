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
var cotizador_service_1 = require('./cotizador.service');
var cliente_service_1 = require('./cliente/cliente.service');
var CotizadorComponent = (function () {
    //Assign 
    function CotizadorComponent(_cotizadorService, _clienteService) {
        this.selectedValue = {};
        this.clienteSelected = {};
        debugger;
        this.cotizaciones = _cotizadorService.getCotizaciones();
        this.clientes = _clienteService.getClientes();
        this.clienteSelected = this.clientes[0];
    }
    CotizadorComponent.prototype.updateCliente = function (event) {
        console.log(event);
    };
    CotizadorComponent = __decorate([
        core_1.Component({
            selector: 'cotizador',
            providers: [cotizador_service_1.CotizadorService, cliente_service_1.ClienteService],
            styleUrls: ["app/cotizador.css"],
            templateUrl: "app/cotizador.html"
        }), 
        __metadata('design:paramtypes', [cotizador_service_1.CotizadorService, cliente_service_1.ClienteService])
    ], CotizadorComponent);
    return CotizadorComponent;
}());
exports.CotizadorComponent = CotizadorComponent;
//# sourceMappingURL=cotizador.component.js.map