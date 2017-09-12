"use strict";
var Posiciones = (function () {
    function Posiciones() {
        this.costo = 0.0;
        this.posiciones = "";
    }
    Posiciones.prototype.setTecnica = function (posiciones, costo) {
        this.posiciones = posiciones;
        this.costo = costo;
    };
    Posiciones.prototype.copyNewTecnica = function () {
        var _posiciones = new Posiciones();
        _posiciones.posiciones = this.posiciones;
        _posiciones.costo = this.costo;
        return _posiciones;
    };
    return Posiciones;
}());
exports.Posiciones = Posiciones;
//# sourceMappingURL=posiciones.js.map