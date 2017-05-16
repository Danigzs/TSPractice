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
var categoria_1 = require("./categoria");
var CategoriaService = (function () {
    function CategoriaService() {
        var categoria1 = new categoria_1.Categoria();
        var categoria2 = new categoria_1.Categoria();
        var categoria3 = new categoria_1.Categoria();
        var categoria4 = new categoria_1.Categoria();
        var categoria5 = new categoria_1.Categoria();
        var categoria6 = new categoria_1.Categoria();
        var categoria7 = new categoria_1.Categoria();
        categoria1.setCategoria(1, "Chalecos");
        categoria2.setCategoria(2, "Pantalones");
        categoria3.setCategoria(3, "Telas");
        categoria4.setCategoria(4, "Bordados");
        categoria5.setCategoria(5, "Kits");
        categoria6.setCategoria(6, "Laptops");
        this.categorias = [categoria1, categoria2, categoria3, categoria4, categoria5, categoria6, categoria7];
    }
    CategoriaService.prototype.getCategorias = function () {
        return this.categorias;
    };
    CategoriaService.prototype.addCategoria = function (categoria) {
        this.categorias.push(categoria);
    };
    return CategoriaService;
}());
CategoriaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CategoriaService);
exports.CategoriaService = CategoriaService;
//# sourceMappingURL=categoria.service.js.map