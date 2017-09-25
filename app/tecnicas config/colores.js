"use strict";
var Colores = (function () {
    function Colores() {
        this.color = 0.0;
    }
    Colores.prototype.setTecnica = function (color) {
        this.color = color;
    };
    Colores.prototype.copyNewTecnica = function () {
        var _colores = new Colores();
        _colores.color = this.color;
        return _colores;
    };
    return Colores;
}());
exports.Colores = Colores;
//# sourceMappingURL=colores.js.map