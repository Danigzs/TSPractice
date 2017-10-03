"use strict";
var Ubicaciones = (function () {
    function Ubicaciones() {
        this.ubicaciones = "";
    }
    Ubicaciones.prototype.setTecnica = function (ubicaciones) {
        this.ubicaciones = ubicaciones;
    };
    Ubicaciones.prototype.copyNewTecnica = function () {
        var _ubicaciones = new Ubicaciones();
        _ubicaciones.ubicaciones = this.ubicaciones;
        return _ubicaciones;
    };
    return Ubicaciones;
}());
exports.Ubicaciones = Ubicaciones;
//# sourceMappingURL=ubicaciones.js.map