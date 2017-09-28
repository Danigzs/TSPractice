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
var BordadoTipo_1 = require("./../tecnicas config/BordadoTipo");
var BordadoPuntadas_1 = require("./../tecnicas config/BordadoPuntadas");
var BordadoSize_1 = require("./../tecnicas config/BordadoSize");
var posiciones_1 = require("./../tecnicas config/posiciones");
var colores_1 = require("./../tecnicas config/colores");
var appConfig_1 = require("./../appConfig/appConfig");
var appConfig_service_1 = require("./../appConfig/appConfig.service");
var Bordado = Bordado_1 = (function () {
    function Bordado() {
        this.appConfig = new appConfig_1.AppConfig;
        this.size = "";
        this.position = "";
        this.price = 0.0;
        this.puntadas = 0;
        this.bordado = "";
        this.colores = 0;
        this.cantidad = 0;
        this.bType = new BordadoTipo_1.BordadoTipo();
        this.bStitches = new BordadoPuntadas_1.BordadoPuntadas();
        this.bSize = new BordadoSize_1.BordadoSize();
        this.bPosition = new posiciones_1.Posiciones();
        this.bColores = new colores_1.Colores();
    }
    Bordado.prototype.calculateBordadoPrice = function () {
        this.appConfig = new appConfig_1.AppConfig();
        this.price = this.cantidad * ((this.bType.costo * .01) * this.appConfig.bordado) + (this.bSize.costo * .01) + (this.bPosition.costo * .01);
    };
    Bordado.prototype.setTecnica = function (cantidad, colores, bordado, puntadas, size, position, price) {
        this.size = size;
        this.position = position;
        this.price = price;
        this.puntadas = puntadas;
        this.bordado = bordado;
        this.colores = colores;
        this.cantidad = cantidad;
    };
    Bordado.prototype.copyNewTecnica = function () {
        var _bordado = new Bordado_1();
        _bordado.size = this.size;
        _bordado.position = this.position;
        _bordado.price = this.price;
        _bordado.puntadas = this.puntadas;
        _bordado.bordado = this.bordado;
        _bordado.colores = this.colores;
        _bordado.cantidad = this.cantidad;
        _bordado.bType = this.bType;
        _bordado.bStitches = this.bStitches;
        _bordado.bPosition = this.bPosition;
        _bordado.bSize = this.bSize;
        _bordado.bColores = this.bColores;
        return _bordado;
    };
    return Bordado;
}());
Bordado = Bordado_1 = __decorate([
    core_1.Component({
        providers: [appConfig_service_1.AppConfigService],
    }),
    __metadata("design:paramtypes", [])
], Bordado);
exports.Bordado = Bordado;
var Bordado_1;
//# sourceMappingURL=bordado.js.map