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
var producto_1 = require("./../producto/producto");
var producto_service_1 = require("./../producto/producto.service");
var NuevoProductoComponent = (function () {
    function NuevoProductoComponent(_productService) {
        this._productService = _productService;
        this.clienteSelected = {};
    }
    NuevoProductoComponent.prototype.updatePrice = function () {
        this.producto.pCantidadDD = this.producto.price + this.producto.price * .25;
        this.producto.pCantidadTC = this.producto.price + this.producto.price * .21;
        this.producto.pCantidadCC = this.producto.price + this.producto.price * .17;
        this.producto.pCantidadMC = this.producto.price + this.producto.price * .13;
        this.producto.CantidadDDiva = this.producto.pCantidadDD + this.producto.pCantidadDD * .16;
        this.producto.CantidadTCiva = this.producto.pCantidadTC + this.producto.pCantidadTC * .16;
        this.producto.CantidadCCiva = this.producto.pCantidadCC + this.producto.pCantidadCC * .16;
        this.producto.CantidadMCiva = this.producto.pCantidadMC + this.producto.pCantidadMC * .16;
    };
    NuevoProductoComponent.prototype.Calcular = function (producto) {
    };
    NuevoProductoComponent.prototype.agregarProducto = function () {
        if (this.producto.isProvider == 1) {
            this.producto.supplies = "";
            this.producto.isProvider = 1;
            this.producto.isBordesa = 0;
            this._productService.addProduct(this.producto).subscribe(function (data) {
            });
        }
        else {
            this.producto.isBordesa = 1;
            this.producto.isProvider = 0;
            this._productService.addProduct(this.producto).subscribe(function (data) {
            });
        }
    };
    NuevoProductoComponent.prototype.ngOnInit = function () {
        this.producto = new producto_1.Producto();
        this.producto.isProvider = 1;
        this.producto.isBordesa = 0;
        this.producto.stock = 1;
    };
    NuevoProductoComponent.prototype.onProviderChange = function () {
        // if(this.producto.isProvider){
        //   this.producto.isProvider = 0;
        //   this.producto.isBordesa = 1
        // }
        // else{
        //   this.producto.isProvider = 1;
        //   this.producto.isBordesa = 0
        // }
        this.producto.isBordesa = this.producto.isProvider == 1 ? 0 : 1;
    };
    NuevoProductoComponent.prototype.onBordesaChange = function () {
        this.producto.isProvider = this.producto.isBordesa == 1 ? 0 : 1;
    };
    return NuevoProductoComponent;
}());
NuevoProductoComponent = __decorate([
    core_1.Component({
        selector: 'nuevoproducto',
        styleUrls: ["app/nuevoproducto/nuevoproducto.css"],
        templateUrl: "app/nuevoproducto/nuevoproducto.html"
    }),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], NuevoProductoComponent);
exports.NuevoProductoComponent = NuevoProductoComponent;
//# sourceMappingURL=nuevoproducto.component.js.map