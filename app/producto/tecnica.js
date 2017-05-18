"use strict";
var Tecnica = (function () {
    function Tecnica() {
        this.selected = false;
        this.nombre = "";
        this.precio = 0.0;
        this.id = -1;
    }
    Tecnica.prototype.setTecnica = function (id, nombre, precio, selected) {
        if (selected === void 0) { selected = false; }
        this.selected = selected;
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    };
    Tecnica.prototype.copyNewTecnica = function () {
        var _tecnica = new Tecnica();
        _tecnica.selected = this.selected;
        _tecnica.id = this.id;
        _tecnica.precio = this.precio;
        _tecnica.nombre = this.nombre;
        return _tecnica;
    };
    return Tecnica;
}());
exports.Tecnica = Tecnica;
//# sourceMappingURL=tecnica.js.map