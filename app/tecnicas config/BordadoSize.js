"use strict";
var BordadoSize = (function () {
    function BordadoSize() {
        this.costo = 0.0;
        this.size = "";
    }
    BordadoSize.prototype.setTecnica = function (size, costo) {
        this.size = size;
        this.costo = costo;
    };
    BordadoSize.prototype.copyNewTecnica = function () {
        var _bordadosize = new BordadoSize();
        _bordadosize.size = this.size;
        _bordadosize.costo = this.costo;
        return _bordadosize;
    };
    return BordadoSize;
}());
exports.BordadoSize = BordadoSize;
//# sourceMappingURL=BordadoSize.js.map