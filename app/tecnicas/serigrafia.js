"use strict";
var Serigrafia = (function () {
    function Serigrafia() {
        this.size = "";
        this.position = "";
        this.price = 0.0;
        this.tintas = 0.0;
    }
    Serigrafia.prototype.setTecnica = function (size, position, price, tintas) {
        this.size = size;
        this.position = position;
        this.price = price;
        this.tintas = tintas;
    };
    Serigrafia.prototype.copyNewTecnica = function () {
        var _serigrafia = new Serigrafia();
        _serigrafia.size = this.size;
        _serigrafia.position = this.position;
        _serigrafia.price = this.price;
        _serigrafia.tintas = this.tintas;
        return _serigrafia;
    };
    return Serigrafia;
}());
exports.Serigrafia = Serigrafia;
//# sourceMappingURL=serigrafia.js.map