"use strict";
var Cotizacion = (function () {
    function Cotizacion() {
        this.cliente = null;
        this.productos = [];
        this.total = 0.0;
        this.numeroCotizacion = "-1";
        this.fechaElaboracion = null;
        this.estatus = "Nada";
    }
    Cotizacion.prototype.setCotizacion = function (producto, cliente, productos, total, numeroCotizacion, fechaElaboracion, estatus, cantidad) {
        this.cliente = cliente;
        this.producto = producto;
        this.productos = productos;
        this.total = total;
        this.numeroCotizacion = numeroCotizacion;
        this.fechaElaboracion = fechaElaboracion;
        this.estatus = estatus;
    };
    return Cotizacion;
}());
exports.Cotizacion = Cotizacion;
//# sourceMappingURL=cotizacion.js.map