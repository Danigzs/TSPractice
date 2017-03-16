"use strict";
var Producto = (function () {
    function Producto() {
        this.nombre = "";
        this.precio = 0.0;
        this.descripcion = "";
    }
    Producto.prototype.setProducto = function (nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    };
    return Producto;
}());
exports.Producto = Producto;
//# sourceMappingURL=producto.js.map