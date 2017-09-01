"use strict";
var BordadoPuntadas = (function () {
    function BordadoPuntadas() {
        this.price = 0.0;
    }
    BordadoPuntadas.prototype.setTecnica = function (price) {
        this.price = price;
    };
    BordadoPuntadas.prototype.copyNewTecnica = function () {
        var _bordadopuntadas = new BordadoPuntadas();
        _bordadopuntadas.price = this.price;
        return _bordadopuntadas;
    };
    return BordadoPuntadas;
}());
exports.BordadoPuntadas = BordadoPuntadas;
//# sourceMappingURL=BordadoPuntadas.js.map