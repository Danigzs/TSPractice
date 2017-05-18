"use strict";
var Producto = (function () {
    function Producto() {
        this.nombre = "";
        this.precio = 0.0;
        this.descripcion = "";
        this.cantidad = 0;
        this.total = 0;
        this.tecnicas = [];
    }
    Producto.prototype.setProducto = function (nombre, precio, descripcion, cantidad, tecnicas) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.total = cantidad * precio;
        this.tecnicas = [];
    };
    Producto.prototype.copyNewProducto = function () {
        var _producto = new Producto();
        _producto.nombre = this.nombre;
        _producto.precio = this.precio;
        _producto.descripcion = this.descripcion;
        _producto.cantidad = this.cantidad;
        _producto.total = this.total;
        _producto.tecnicas = this.tecnicas;
        return _producto;
    };
    return Producto;
}());
exports.Producto = Producto;
//# sourceMappingURL=producto.js.map