"use strict";
var BordadoPuntadas = (function () {
    function BordadoPuntadas() {
        this.costo = 0.0;
    }
    BordadoPuntadas.prototype.setTecnica = function (costo) {
        this.costo = costo;
    };
    BordadoPuntadas.prototype.copyNewTecnica = function () {
        var _bordadopuntadas = new BordadoPuntadas();
        _bordadopuntadas.costo = this.costo;
        return _bordadopuntadas;
    };
    return BordadoPuntadas;
}());
exports.BordadoPuntadas = BordadoPuntadas;
//# sourceMappingURL=BordadoPuntadas.js.map