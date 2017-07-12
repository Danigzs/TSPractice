"use strict";
var Tecnica = (function () {
    function Tecnica() {
        this.name = "";
        this.subType = "";
        this.size = "";
        this.position = "";
        this.price = 0.0;
        this.puntadas = 0;
    }
    Tecnica.prototype.setTecnica = function (puntadas, name, subType, size, position, price) {
        this.name = name;
        this.subType = subType;
        this.size = size;
        this.position = position;
        this.price = price;
        this.puntadas = puntadas;
    };
    Tecnica.prototype.copyNewTecnica = function () {
        var _tecnica = new Tecnica();
        _tecnica.name = this.name;
        _tecnica.subType = this.subType;
        _tecnica.size = this.size;
        _tecnica.position = this.position;
        _tecnica.price = this.price;
        _tecnica.puntadas = this.puntadas;
        return _tecnica;
    };
    return Tecnica;
}());
exports.Tecnica = Tecnica;
//# sourceMappingURL=tecnica.js.map