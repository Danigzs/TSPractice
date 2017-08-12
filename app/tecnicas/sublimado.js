"use strict";
var Sublimado = (function () {
    function Sublimado() {
        this.size = "";
        this.position = "";
        this.price = 0.0;
    }
    Sublimado.prototype.setTecnica = function (size, position, price) {
        this.size = size;
        this.position = position;
        this.price = price;
    };
    Sublimado.prototype.copyNewTecnica = function () {
        var _sublimado = new Sublimado();
        _sublimado.size = this.size;
        _sublimado.position = this.position;
        _sublimado.price = this.price;
        return _sublimado;
    };
    return Sublimado;
}());
exports.Sublimado = Sublimado;
//# sourceMappingURL=sublimado.js.map