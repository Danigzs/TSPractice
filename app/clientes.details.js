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
var core_1 = require("@angular/core");
var cliente_service_1 = require("./cliente/cliente.service");
var cliente_1 = require("./cliente/cliente");
var ClientesComponent = (function () {
    function ClientesComponent(_clienteService) {
        this._clienteService = _clienteService;
        this.closeClientAdded = new core_1.EventEmitter();
        this.show = true;
        this.clientes = [];
    }
    ClientesComponent.prototype.ngOnInit = function () {
        this.cliente = new cliente_1.Cliente();
        this.reloadClients();
        this.show = this.showClients == undefined ? true : false;
    };
    ClientesComponent.prototype.reloadClients = function () {
        var _this = this;
        this._clienteService.getClients().subscribe(function (clients) {
            _this.clientes = clients;
        });
    };
    ClientesComponent.prototype.agregarCliente = function () {
        var _this = this;
        debugger;
        this._clienteService.addClient(this.cliente).subscribe(function (data) {
            if (_this.closeClientAdded)
                _this.closeClientAdded.emit(_this.cliente);
            _this.cliente = new cliente_1.Cliente();
            _this.reloadClients();
        });
    };
    return ClientesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ClientesComponent.prototype, "showClients", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClientesComponent.prototype, "closeClientAdded", void 0);
ClientesComponent = __decorate([
    core_1.Component({
        selector: 'clientes',
        providers: [cliente_service_1.ClienteService],
        styleUrls: ["./app/cliente/clientes.css"],
        templateUrl: "./app/cliente/clientes.html"
    }),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClientesComponent);
exports.ClientesComponent = ClientesComponent;
//# sourceMappingURL=clientes.details.js.map