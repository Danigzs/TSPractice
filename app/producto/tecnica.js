"use strict";
var Tecnica = (function () {
    function Tecnica() {
        this.name = "";
        this.subType = "";
        this.size = "";
        this.position = "";
        this.price = 0.0;
    }
    Tecnica.prototype.setTecnica = function (name, subType, size, position, price) {
        this.name = name;
        this.subType = subType;
        this.size = size;
        this.position = position;
        this.price = price;
    };
    Tecnica.prototype.copyNewTecnica = function () {
        var _tecnica = new Tecnica();
        _tecnica.name = this.name;
        _tecnica.subType = this.subType;
        _tecnica.size = this.size;
        _tecnica.position = this.position;
        _tecnica.price = this.price;
        return _tecnica;
    };
    return Tecnica;
}());
exports.Tecnica = Tecnica;
//# sourceMappingURL=tecnica.js.map