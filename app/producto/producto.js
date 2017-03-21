"use strict";
var Producto = (function () {
    function Producto() {
        this.nombre = "";
        this.precio = 0.0;
        this.descripcion = "";
        this.cantidad = 0;
    }
    Producto.prototype.setProducto = function (nombre, precio, descripcion, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    };
    return Producto;
}());
exports.Producto = Producto;
//# sourceMappingURL=producto.js.map