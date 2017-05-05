"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var producto_1 = require("./producto");
var ProductoService = (function () {
    function ProductoService() {
        var producto1 = new producto_1.Producto();
        var producto2 = new producto_1.Producto();
        var producto3 = new producto_1.Producto();
        producto1.setProducto("celular", 2000, "Telefono celular", 1, []);
        producto2.setProducto("Television", 9000, "Television Full HD", 1, []);
        producto3.setProducto("Laptop", 13000, "Computadora portatil", 1, []);
        this.productos = [producto1, producto2, producto3];
    }
    ProductoService.prototype.getProductos = function () {
        return this.productos;
    };
    return ProductoService;
}());
ProductoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map