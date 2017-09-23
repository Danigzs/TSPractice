"use strict";
var BordadoTipo_1 = require("./../tecnicas config/BordadoTipo");
var BordadoPuntadas_1 = require("./../tecnicas config/BordadoPuntadas");
var BordadoSize_1 = require("./../tecnicas config/BordadoSize");
var posiciones_1 = require("./../tecnicas config/posiciones");
var Bordado = (function () {
    function Bordado() {
        this.size = "";
        this.position = "";
        this.price = 0.0;
        this.puntadas = 0;
        this.bordado = "";
        this.colores = "";
        this.cantidad = 0;
        this.bType = new BordadoTipo_1.BordadoTipo();
        this.bStitches = new BordadoPuntadas_1.BordadoPuntadas();
        this.bSize = new BordadoSize_1.BordadoSize();
        this.bPosition = new posiciones_1.Posiciones();
    }
    Bordado.prototype.calculateBordadoPrice = function () {
        this.price = this.cantidad * (this.bType.costo + this.bSize.costo + this.bPosition.costo + this.bStitches.costo);
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
        var _bordado = new Bordado();
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
        return _bordado;
    };
    return Bordado;
}());
exports.Bordado = Bordado;
//# sourceMappingURL=bordado.js.map