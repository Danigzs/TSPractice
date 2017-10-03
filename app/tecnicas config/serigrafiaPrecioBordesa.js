"use strict";
var SerigrafiaPrecioBordesa = (function () {
    function SerigrafiaPrecioBordesa() {
        this.costo = 0.0;
        this.tintas = 0;
        this.desde = 0;
        this.hasta = 0;
    }
    SerigrafiaPrecioBordesa.prototype.setTecnica = function (tintas, costo, desde, hasta) {
        this.tintas = tintas;
        this.costo = costo;
        this.desde = desde;
        this.hasta = hasta;
    };
    SerigrafiaPrecioBordesa.prototype.copyNewTecnica = function () {
        var _serigrafiaPrecioBordesa = new SerigrafiaPrecioBordesa();
        _serigrafiaPrecioBordesa.tintas = this.tintas;
        _serigrafiaPrecioBordesa.costo = this.costo;
        _serigrafiaPrecioBordesa.desde = this.desde;
        _serigrafiaPrecioBordesa.hasta = this.hasta;
        return _serigrafiaPrecioBordesa;
    };
    return SerigrafiaPrecioBordesa;
}());
exports.SerigrafiaPrecioBordesa = SerigrafiaPrecioBordesa;
//# sourceMappingURL=serigrafiaPrecioBordesa.js.map