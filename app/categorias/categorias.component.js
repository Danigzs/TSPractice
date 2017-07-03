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
var categoria_service_1 = require("../categorias/categoria.service");
var categoria_1 = require("../categorias/categoria");
var CategoriasComponent = (function () {
    function CategoriasComponent(_categoriaService) {
        this._categoriaService = _categoriaService;
        this.categoriaService = _categoriaService;
        this.categorias = _categoriaService.getCategorias();
    }
    CategoriasComponent.prototype.ngOnInit = function () {
        this.categoria = new categoria_1.Categoria();
    };
    CategoriasComponent.prototype.agregarCategoria = function () {
        this.categoriaService.addCategoria(this.categoria);
        this.categoria = new categoria_1.Categoria();
    };
    return CategoriasComponent;
}());
CategoriasComponent = __decorate([
    core_1.Component({
        selector: 'categorias',
        providers: [categoria_service_1.CategoriaService],
        styleUrls: ["./app/categorias/categorias.css", "app/styles/table.css"],
        templateUrl: "./app/categorias/categorias.html"
    }),
    __metadata("design:paramtypes", [categoria_service_1.CategoriaService])
], CategoriasComponent);
exports.CategoriasComponent = CategoriasComponent;
//# sourceMappingURL=categorias.component.js.map