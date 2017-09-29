"use strict";
var SerigrafiaTipoTinta = (function () {
    function SerigrafiaTipoTinta() {
        this.price = 0.0;
        this.tipotinta = "";
    }
    SerigrafiaTipoTinta.prototype.setTecnica = function (tipotinta, price) {
        this.tipotinta = tipotinta;
        this.price = price;
    };
    SerigrafiaTipoTinta.prototype.copyNewTecnica = function () {
        var _serigrafiatipotinta = new SerigrafiaTipoTinta();
        _serigrafiatipotinta.tipotinta = this.tipotinta;
        _serigrafiatipotinta.price = this.price;
        return _serigrafiatipotinta;
    };
    return SerigrafiaTipoTinta;
}());
exports.SerigrafiaTipoTinta = SerigrafiaTipoTinta;
//# sourceMappingURL=SerigrafiaTipoTinta.js.map