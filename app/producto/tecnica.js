"use strict";
var Tecnica = (function () {
    function Tecnica() {
        this.nombre = "";
        this.precio = 0.0;
        this.id = -1;
    }
    Tecnica.prototype.setTecnica = function (id, nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    };
    Tecnica.prototype.copyNewTecnica = function () {
        var _tecnica = new Tecnica();
        _tecnica.id = this.id;
        _tecnica.precio = this.precio;
        _tecnica.nombre = this.nombre;
        _tecnica["selected"] = this["selected"];
        return _tecnica;
    };
    return Tecnica;
}());
exports.Tecnica = Tecnica;
//# sourceMappingURL=tecnica.js.map