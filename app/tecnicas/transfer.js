"use strict";
var Transfer = (function () {
    function Transfer() {
        this.size = "";
        this.position = "";
        this.price = 0.0;
    }
    Transfer.prototype.setTecnica = function (size, position, price) {
        this.size = size;
        this.position = position;
        this.price = price;
    };
    Transfer.prototype.copyNewTecnica = function () {
        var _transfer = new Transfer();
        _transfer.size = this.size;
        _transfer.position = this.position;
        _transfer.price = this.price;
        return _transfer;
    };
    return Transfer;
}());
exports.Transfer = Transfer;
//# sourceMappingURL=transfer.js.map