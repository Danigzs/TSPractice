"use strict";
var BordadoTipo = (function () {
    function BordadoTipo() {
        this.costo = 0.0;
        this.nombre = "";
    }
    BordadoTipo.prototype.setTecnica = function (nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    };
    BordadoTipo.prototype.copyNewTecnica = function () {
        var _bordadotipo = new BordadoTipo();
        _bordadotipo.nombre = this.nombre;
        _bordadotipo.costo = this.costo;
        return _bordadotipo;
    };
    return BordadoTipo;
}());
exports.BordadoTipo = BordadoTipo;
//# sourceMappingURL=BordadoTipo.js.map