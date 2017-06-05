"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NuevoProductoComponent = (function () {
    function NuevoProductoComponent() {
        this.clienteSelected = {};
        this.producto = {};
    }
    NuevoProductoComponent.prototype.AgregarProducto = function (producto) {
    };
    NuevoProductoComponent.prototype.Calcular = function (producto) {
        if (producto.cantidad >= 1 && producto.cantidad <= 12) {
        }
        if (producto.cantidad > 12 && producto.cantidad <= 50) {
        }
        if (producto.cantidad > 50 && producto.cantidad <= 100) {
        }
        if (producto.cantidad > 100) {
        }
    };
    return NuevoProductoComponent;
}());
NuevoProductoComponent = __decorate([
    core_1.Component({
        selector: 'nuevoproducto',
        styleUrls: ["app/nuevoproducto/nuevoproducto.css"],
        templateUrl: "app/nuevoproducto/nuevoproducto.html"
    })
], NuevoProductoComponent);
exports.NuevoProductoComponent = NuevoProductoComponent;
//# sourceMappingURL=nuevoproducto.component.js.map