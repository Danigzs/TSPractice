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
var cotizador_service_1 = require("./cotizacion/cotizador.service");
var cliente_service_1 = require("./cliente/cliente.service");
var cliente_1 = require("./cliente/cliente");
var cotizacion_1 = require("./cotizacion/cotizacion");
var producto_1 = require("./producto/producto");
var producto_service_1 = require("./producto/producto.service");
var tecnica_1 = require("./producto/tecnica");
var tecnica_service_1 = require("./producto/tecnica.service");
var material_1 = require("@angular/material");
// import { Modal } from './modals/modalAgregarProducto';
var CotizadorComponent = (function () {
    function CotizadorComponent(dialog, _cotizadorService, _clienteService, _productoService, _tecnicaService) {
        this.dialog = dialog;
        this.hideModal = true;
        this.hideModal2 = true;
        this.hideModal3 = true;
        // dialogProducto = DialogProductoComponent;
        this.cotizacion = new cotizacion_1.Cotizacion();
        this.totalCotizacion = 0.0;
        this.selectedValue = {};
        this.productoSelected = new producto_1.Producto;
        this.clienteSelected = new cliente_1.Cliente;
        this.tecnicaSelected = new tecnica_1.Tecnica;
        this.currentDate = this.getTodayDate();
        this.gridKeys = ["Cantidad", "Nombre", "Descripcion", "Precio Unitario", "Total"];
        this.clientes = _clienteService.getClientes();
        this.productos = _productoService.getProductos();
        this.tecnicas = _tecnicaService.getTecnicas();
        this.clienteSelected = this.clientes[0];
        this.tecnicaSelected = this.tecnicas[0];
        this.cotizacion.tecnica = this.tecnicaSelected;
        this.cotizacion.cliente = this.clienteSelected;
        this.productos = this.productos;
        this.productoSelected = this.productos[0];
        this.cotizacion.producto = this.productoSelected;
        this.productosCotizacion = [];
        this.init();
    }
    CotizadorComponent.prototype.updateCliente = function (event) {
        console.warn(this.clienteSelected);
    };
    CotizadorComponent.prototype.updateTecnica = function (event) {
        console.warn(this.tecnicaSelected);
    };
    CotizadorComponent.prototype.updateProducto = function (event) {
        console.warn(this.productoSelected);
    };
    CotizadorComponent.prototype.addProducto = function (producto) {
        producto.total = producto.precio * producto.cantidad;
        this.productosCotizacion.push(producto);
        this.calculateTotal();
    };
    CotizadorComponent.prototype.calculateTotal = function () {
        var _total = 0;
        for (var _i = 0, _a = this.productosCotizacion; _i < _a.length; _i++) {
            var producto = _a[_i];
            _total += producto.precio * producto.cantidad;
            for (var _b = 0, _c = producto.tecnicas; _b < _c.length; _b++) {
                var tecnica = _c[_b];
                _total += producto.cantidad * tecnica.precio;
            }
        }
        this.totalCotizacion = _total;
    };
    CotizadorComponent.prototype.init = function () {
        this.cotizacion.numeroCotizacion = "000000000001";
    };
    CotizadorComponent.prototype.getTodayDate = function () {
        return new Date().toLocaleDateString();
    };
    // open() {
    // let dialogRef: MdDialogRef < DialogProductoComponent > ;
    //dialogRef = this.dialog.open(DialogProductoComponent);
    //return dialogRef.afterClosed();
    //}
    //Modal
    CotizadorComponent.prototype.verProductos = function () {
        this.hideModal = false;
    };
    CotizadorComponent.prototype.verTecnica = function (index) {
        this.pIndex = index;
        this.hideModal2 = false;
        this.setTecnicasSelected();
    };
    CotizadorComponent.prototype.setTecnicasSelected = function () {
        for (var _i = 0, _a = this.productos[this.pIndex].tecnicas; _i < _a.length; _i++) {
            var tecnicaP = _a[_i];
            for (var _b = 0, _c = this.tecnicas; _b < _c.length; _b++) {
                var tecnica = _c[_b];
                if (tecnicaP.id == tecnica.id) {
                    tecnica.selected = true;
                    break;
                }
            }
        }
    };
    CotizadorComponent.prototype.Details = function () {
        this.hideModal3 = false;
    };
    CotizadorComponent.prototype.closeModal = function () {
        this.hideModal = true;
    };
    CotizadorComponent.prototype.closeTecnicas = function () {
        this.hideModal2 = true;
        for (var _i = 0, _a = this.tecnicas; _i < _a.length; _i++) {
            var tecnica = _a[_i];
            if (!this.isTecnicaSelected(tecnica)) {
                if (this.alreadyTecnicaAdded(tecnica)) {
                    this.deleteTecnica(tecnica);
                }
            }
            else {
                if (!this.alreadyTecnicaAdded(tecnica)) {
                    this.productos[this.pIndex].tecnicas.push(tecnica.copyNewTecnica());
                }
            }
        }
        this.resetTecnicas();
        this.calculateTotal();
    };
    CotizadorComponent.prototype.resetTecnicas = function () {
        for (var _i = 0, _a = this.tecnicas; _i < _a.length; _i++) {
            var tecnica = _a[_i];
            tecnica.selected = false;
        }
    };
    CotizadorComponent.prototype.alreadyTecnicaAdded = function (tecnicaToAdd) {
        for (var _i = 0, _a = this.productos[this.pIndex].tecnicas; _i < _a.length; _i++) {
            var tecnica = _a[_i];
            if (tecnica.id == tecnicaToAdd.id) {
                return true;
            }
        }
        return false;
    };
    CotizadorComponent.prototype.deleteTecnica = function (tecnica) {
        for (var i = 0; i < this.productos[this.pIndex].tecnicas.length; i++) {
            if (this.productos[this.pIndex].tecnicas[i].id = tecnica.id) {
                this.productos[this.pIndex].tecnicas.splice(i, 1);
            }
        }
    };
    CotizadorComponent.prototype.calcularTotalProducto = function (producto) {
        var total = producto.precio * producto.cantidad;
        for (var _i = 0, _a = producto.tecnicas; _i < _a.length; _i++) {
            var tecnica = _a[_i];
            total += producto.cantidad * tecnica.precio;
        }
        return total;
    };
    CotizadorComponent.prototype.closeModal2 = function () {
        this.hideModal3 = true;
        this.hideModal2 = false;
    };
    CotizadorComponent.prototype.seleccionarProducto = function (producto) {
        this.addProducto(producto);
        this.closeModal();
    };
    CotizadorComponent.prototype.selectTecnica = function (tecnica) {
        tecnica.selected = (tecnica.selected == undefined || tecnica.selected == null) ? true : !tecnica.selected;
    };
    CotizadorComponent.prototype.isTecnicaSelected = function (tecnica) {
        if (tecnica.selected == undefined || tecnica.selected == null) {
            return false;
        }
        return tecnica.selected;
    };
    return CotizadorComponent;
}());
CotizadorComponent = __decorate([
    core_1.Component({
        selector: 'cotizador',
        // directives: [ Modal ],
        providers: [cotizador_service_1.CotizadorService, cliente_service_1.ClienteService, producto_service_1.ProductoService, tecnica_service_1.TecnicaService],
        styleUrls: ["app/cotizador.css"],
        templateUrl: "app/cotizador.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialog, cotizador_service_1.CotizadorService, cliente_service_1.ClienteService, producto_service_1.ProductoService, tecnica_service_1.TecnicaService])
], CotizadorComponent);
exports.CotizadorComponent = CotizadorComponent;
//# sourceMappingURL=cotizador.component.js.map