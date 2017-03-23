"use strict";
var Tecnica = (function () {
    function Tecnica() {
        this.nombre = "";
        this.precio = 0.0;
    }
    Tecnica.prototype.setTecnica = function (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    };
    return Tecnica;
}());
exports.Tecnica = Tecnica;
//# sourceMappingURL=tecnica.js.map