"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var producto_1 = require("./producto");
var ProductCotizacion = (function (_super) {
    __extends(ProductCotizacion, _super);
    function ProductCotizacion() {
        var _this = _super.call(this) || this;
        _this.quantity = 1;
        _this.total = 0;
        return _this;
    }
    ProductCotizacion.prototype.setProductCotizacion = function (name, price, description, supplies, isProvider, isBordesa, code, quantity, total) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.supplies = supplies;
        this.isProvider = isProvider;
        this.isBordesa = isBordesa;
        this.code = code;
        this.quantity = quantity;
        this.total = total;
        // this.tecnicas = tecnicas;
    };
    ProductCotizacion.prototype.copyNewProductCotizacion = function () {
        var _producto = new ProductCotizacion();
        _producto.name = this.name;
        _producto.price = this.price;
        _producto.description = this.description;
        _producto.supplies = this.supplies;
        _producto.isProvider = this.isProvider;
        _producto.isBordesa = this.isBordesa;
        _producto.code = this.code;
        _producto.quantity = this.quantity;
        _producto.total = this.total;
        // _producto.tecnicas = this.tecnicas;
        return _producto;
    };
    ProductCotizacion.copyFromProduct = function (producto) {
        var _producto = new ProductCotizacion();
        _producto.name = producto.name;
        _producto.price = producto.price;
        _producto.description = producto.description;
        _producto.supplies = producto.supplies;
        _producto.isProvider = producto.isProvider;
        _producto.isBordesa = producto.isBordesa;
        _producto.code = producto.code;
        _producto.quantity = 1;
        _producto.total = _producto.quantity * _producto.price;
        // _producto.tecnicas = [];
        return _producto;
    };
    return ProductCotizacion;
}(producto_1.Producto));
exports.ProductCotizacion = ProductCotizacion;
//# sourceMappingURL=productCotizacion.js.map