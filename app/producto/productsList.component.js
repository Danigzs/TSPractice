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
var producto_service_1 = require("./producto.service");
var ProductsListComponent = (function () {
    function ProductsListComponent(_productService) {
        this._productService = _productService;
        this.products = [];
        this.providerProducts = [];
        this.bordesaProducts = [];
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.providerProducts = data.filter(function (x) { return x.isProvider == 1; });
            _this.bordesaProducts = data.filter(function (x) { return x.isBordesa == 1; });
        });
    };
    return ProductsListComponent;
}());
ProductsListComponent = __decorate([
    core_1.Component({
        selector: 'products-list',
        providers: [producto_service_1.ProductoService],
        styleUrls: ["./app/producto/products-list.css", 'app/styles/table.css'],
        templateUrl: "./app/producto/products-list.html"
    }),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductsListComponent);
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=productsList.component.js.map