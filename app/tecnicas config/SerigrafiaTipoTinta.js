"use strict";
var SerigrafiaTipoTinta = (function () {
    function SerigrafiaTipoTinta() {
        this.price = 0.0;
        this.tipo = "";
    }
    SerigrafiaTipoTinta.prototype.setTecnica = function (tipo, price) {
        this.tipo = tipo;
        this.price = price;
    };
    SerigrafiaTipoTinta.prototype.copyNewTecnica = function () {
        var _serigrafiatipotinta = new SerigrafiaTipoTinta();
        _serigrafiatipotinta.tipo = this.tipo;
        _serigrafiatipotinta.price = this.price;
        return _serigrafiatipotinta;
    };
    return SerigrafiaTipoTinta;
}());
exports.SerigrafiaTipoTinta = SerigrafiaTipoTinta;
//# sourceMappingURL=SerigrafiaTipoTinta.js.map