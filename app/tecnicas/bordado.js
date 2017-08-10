"use strict";
var Bordado = (function () {
    function Bordado() {
        this.size = "";
        this.position = "";
        this.price = 0.0;
        this.puntadas = 0;
        this.bordado = "";
        this.colores = "";
    }
    Bordado.prototype.setTecnica = function (colores, bordado, puntadas, name, subType, size, position, price) {
        this.size = size;
        this.position = position;
        this.price = price;
        this.puntadas = puntadas;
        this.bordado = bordado;
        this.colores = colores;
    };
    Bordado.prototype.copyNewTecnica = function () {
        var _bordado = new Bordado();
        _bordado.subType = this.subType;
        _bordado.size = this.size;
        _bordado.position = this.position;
        _bordado.price = this.price;
        _bordado.puntadas = this.puntadas;
        _bordado.bordado = this.bordado;
        _bordado.colores = this.colores;
        return _bordado;
    };
    return Bordado;
}());
exports.Bordado = Bordado;
//# sourceMappingURL=bordado.js.map