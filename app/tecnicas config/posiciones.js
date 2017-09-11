"use strict";
var Posiciones = (function () {
    function Posiciones() {
        this.costo = 0.0;
        this.posicion = "";
    }
    Posiciones.prototype.setTecnica = function (posicion, costo) {
        this.posicion = posicion;
        this.costo = costo;
    };
    Posiciones.prototype.copyNewTecnica = function () {
        var _posiciones = new Posiciones();
        _posiciones.posicion = this.posicion;
        _posiciones.costo = this.costo;
        return _posiciones;
    };
    return Posiciones;
}());
exports.Posiciones = Posiciones;
//# sourceMappingURL=posiciones.js.map