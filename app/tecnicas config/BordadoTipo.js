"use strict";
var BordadoTipo = (function () {
    function BordadoTipo() {
        this.price = 0.0;
        this.tipo = "";
    }
    BordadoTipo.prototype.setTecnica = function (tipo, price) {
        this.tipo = tipo;
        this.price = price;
    };
    BordadoTipo.prototype.copyNewTecnica = function () {
        var _bordadotipo = new BordadoTipo();
        _bordadotipo.tipo = this.tipo;
        _bordadotipo.price = this.price;
        return _bordadotipo;
    };
    return BordadoTipo;
}());
exports.BordadoTipo = BordadoTipo;
//# sourceMappingURL=BordadoTipo.js.map