"use strict";
var BordadoSize = (function () {
    function BordadoSize() {
        this.price = 0.0;
        this.size = "";
    }
    BordadoSize.prototype.setTecnica = function (size, price) {
        this.size = size;
        this.price = price;
    };
    BordadoSize.prototype.copyNewTecnica = function () {
        var _bordadosize = new BordadoSize();
        _bordadosize.size = this.size;
        _bordadosize.price = this.price;
        return _bordadosize;
    };
    return BordadoSize;
}());
exports.BordadoSize = BordadoSize;
//# sourceMappingURL=BordadoSize.js.map