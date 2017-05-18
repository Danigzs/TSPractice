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
var cliente_1 = require("./cliente");
var ClienteService = (function () {
    function ClienteService() {
        var cliente1 = new cliente_1.Cliente();
        var cliente2 = new cliente_1.Cliente();
        var cliente3 = new cliente_1.Cliente();
        cliente1.setCliente(0, 0, "BORDESA", "BORDADOS", "AVENIDA XYZ", "NUEVO LEON", "MONTERREY", "COLONIA", "MEXICO", "1231", "213312321", "bordesa@bordesa.com", "A", "DASDDFAS");
        cliente2.setCliente(0, 0, "BORDESA APODACA", "BORDADOS", "AVENIDA XYZ", "NUEVO LEON", "MONTERREY", "COLONIA", "MEXICO", "1231", "8112348481", "bordesa@apodaca.com", "atencion", "RFCKSAKD");
        cliente3.setCliente(0, 0, "BORDESA GUADALUPE", "BORDADOS", "AVENIDA XYZ", "NUEVO LEON", "MONTERREY", "COLONIA", "MEXICO", "1231", "81145894", "bordesa@guadalupe.com", "atencion a", "RFCASKODKASODSA");
        this.clientes = [cliente1, cliente2, cliente3];
    }
    ClienteService.prototype.addCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    ClienteService.prototype.getClientes = function () {
        return this.clientes;
    };
    return ClienteService;
}());
ClienteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map