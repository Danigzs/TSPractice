"use strict";
var SerigrafiaPrecioBordesa = (function () {
    function SerigrafiaPrecioBordesa() {
        this.costo = 0.0;
        this.tintas = 0;
        this.prendaDe = 0;
        this.prendaHasta = 0;
    }
    SerigrafiaPrecioBordesa.prototype.setTecnica = function (tintas, costo, desde, hasta) {
        this.tintas = tintas;
        this.costo = costo;
        this.prendaDe = desde;
        this.prendaHasta = hasta;
    };
    SerigrafiaPrecioBordesa.prototype.copyNewTecnica = function () {
        var _serigrafiaPrecioBordesa = new SerigrafiaPrecioBordesa();
        _serigrafiaPrecioBordesa.tintas = this.tintas;
        _serigrafiaPrecioBordesa.costo = this.costo;
        _serigrafiaPrecioBordesa.prendaDe = this.prendaDe;
        _serigrafiaPrecioBordesa.prendaHasta = this.prendaHasta;
        return _serigrafiaPrecioBordesa;
    };
    return SerigrafiaPrecioBordesa;
}());
exports.SerigrafiaPrecioBordesa = SerigrafiaPrecioBordesa;
//# sourceMappingURL=serigrafiaPrecioBordesa.js.map