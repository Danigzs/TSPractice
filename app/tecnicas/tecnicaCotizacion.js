"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tecnica_1 = require("./../producto/tecnica");
var TecnicaCotizacion = (function (_super) {
    __extends(TecnicaCotizacion, _super);
    function TecnicaCotizacion() {
        var _this = _super.call(this) || this;
        _this.quantity = 1;
        _this.total = 0.0;
        return _this;
    }
    TecnicaCotizacion.prototype.setTecnicaCotizacion = function (name, subType, size, position, price, quantity, total) {
        this.name = name;
        this.subType = subType;
        this.size = size;
        this.position = position;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
    };
    TecnicaCotizacion.prototype.copyNewTecnica = function () {
        var _tecnica = new TecnicaCotizacion();
        _tecnica.name = this.name;
        _tecnica.subType = this.subType;
        _tecnica.size = this.size;
        _tecnica.position = this.position;
        _tecnica.price = this.price;
        _tecnica.quantity = this.quantity;
        _tecnica.total = this.total;
        return _tecnica;
    };
    TecnicaCotizacion.copyFromTecnica = function (tecnica) {
        var _tecnica = new TecnicaCotizacion();
        _tecnica.name = tecnica.name;
        _tecnica.subType = tecnica.subType;
        _tecnica.size = tecnica.size;
        _tecnica.position = tecnica.position;
        _tecnica.price = tecnica.price;
        _tecnica.quantity = 1;
        _tecnica.total = _tecnica.quantity * _tecnica.price;
        return _tecnica;
    };
    return TecnicaCotizacion;
}(tecnica_1.Tecnica));
exports.TecnicaCotizacion = TecnicaCotizacion;
//# sourceMappingURL=tecnicaCotizacion.js.map