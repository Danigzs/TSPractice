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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
/*
    Objects
*/
var cliente_1 = require("./cliente/cliente");
var cotizacion_1 = require("./cotizacion/cotizacion");
var producto_1 = require("./producto/producto");
var tecnica_1 = require("./producto/tecnica");
var seller_1 = require("./sellers/seller");
var productCotizacion_1 = require("./producto/productCotizacion");
var tecnicaCotizacion_1 = require("./tecnicas/tecnicaCotizacion");
var order_1 = require("./orders/order");
/*
    Services
*/
var cotizador_service_1 = require("./cotizacion/cotizador.service");
var cliente_service_1 = require("./cliente/cliente.service");
var producto_service_1 = require("./producto/producto.service");
var order_service_1 = require("./orders/order.service");
var tecnica_service_1 = require("./producto/tecnica.service");
var seller_service_1 = require("./sellers/seller.service");
var BordadoPuntadas_1 = require("./tecnicas config/BordadoPuntadas");
var BordadoSize_1 = require("./tecnicas config/BordadoSize");
var posiciones_1 = require("./tecnicas config/posiciones");
var core_2 = require("@angular/core");
var material_1 = require("@angular/material");
var CotizadorComponent = (function () {
    function CotizadorComponent(dialog, _cotizadorService, _clienteService, _productoService, _tecnicaService, changeDetectorRef, _sellerService, _orderService) {
        this.dialog = dialog;
        this._cotizadorService = _cotizadorService;
        this._clienteService = _clienteService;
        this._productoService = _productoService;
        this._tecnicaService = _tecnicaService;
        this.changeDetectorRef = changeDetectorRef;
        this._sellerService = _sellerService;
        this._orderService = _orderService;
        //public maquilasCotizacion: Array < TecnicaCotizacion > = [];
        this.hideModal = true;
        this.hideModal2 = true;
        this.hideModal3 = true;
        this.hideModalpago = true;
        this.hideModalcliente = true;
        this.maquilasModal = true;
        this.showBordado = true;
        this.showSerigrafia = false;
        this.showSublimado = false;
        this.checked = true;
        this.shippingDate = "";
        this.context = this;
        this.cotizacion = new cotizacion_1.Cotizacion();
        this.selectedValue = {};
        this.productoSelected = new producto_1.Producto;
        this.clienteSelected = new cliente_1.Cliente;
        this.tecnicaSelected = new tecnica_1.Tecnica;
        this.sellerSelected = new seller_1.Seller;
        this.bordadoStitchSelected = new BordadoPuntadas_1.BordadoPuntadas;
        this.bordadoSizeSelected = new BordadoSize_1.BordadoSize;
        this.bordadoPositionSelected = new posiciones_1.Posiciones;
        this.hidebordado = true;
        this.hideserigrafia = true;
        this.hidesublimado = true;
        this.currentDate = this.getTodayDate();
        this.gridKeys = ["Cantidad", "Nombre", "Descripcion", "Precio Unitario", "Total"];
        this.closeMaquilas = this.closeMaquilas.bind(this);
        this.OnAddBordadoTecnica = this.OnAddBordadoTecnica.bind(this);
    }
    CotizadorComponent.prototype.openBordados = function () {
        this.hideserigrafia = true;
        this.hidesublimado = true;
        this.hidebordado = false;
    };
    CotizadorComponent.prototype.openSerigrafia = function () {
        this.hidebordado = true;
        this.hidesublimado = true;
        this.hideserigrafia = false;
    };
    CotizadorComponent.prototype.openSublimado = function () {
        this.hidebordado = true;
        this.hideserigrafia = true;
        this.hidesublimado = false;
    };
    CotizadorComponent.prototype.setShippingDate = function () {
        var d = new Date();
        // this.shippingDate = d.getDate().toString() + "/" + d.getMonth().toString() + "/" + d.getFullYear().toString();
    };
    CotizadorComponent.prototype.updateCliente = function (event) {
        console.warn(this.clienteSelected);
    };
    CotizadorComponent.prototype.updateTecnica = function (event) {
        console.warn(this.tecnicaSelected);
    };
    CotizadorComponent.prototype.updateProducto = function (event) {
        console.warn(this.productoSelected);
    };
    CotizadorComponent.prototype.updateSeller = function (event) {
        console.warn(this.sellerSelected);
    };
    CotizadorComponent.prototype.updateAdvance = function (event) {
        if (this.order.total - this.order.advance >= 0) {
            this.order.debt = this.order.total - this.order.advance;
        }
        else {
            this.order.advance = 0;
        }
    };
    CotizadorComponent.prototype.OnAddBordadoTecnica = function (bordado) {
        this.closeMaquilas();
        this.order.tecnicaBordados.push(bordado.copyNewTecnica());
    };
    CotizadorComponent.prototype.addProducto = function (producto) {
        producto.total = producto.price * producto.quantity;
        this.order.products.push(producto.copyNewProductCotizacion());
        producto.quantity = 1;
        producto.total = producto.price;
        this.calculateTotal();
    };
    CotizadorComponent.prototype.seleccionarTecnica = function (tecnica) {
        tecnica.total = tecnica.price * tecnica.quantity;
        this.order.maquilas.push(tecnica.copyNewTecnica());
        tecnica.quantity = 1;
        tecnica.total = tecnica.price;
        this.calculateTotal();
    };
    CotizadorComponent.prototype.closeClientAdded = function (event) {
        var _this = this;
        this.clienteSelected = event;
        this._clienteService.getClients().subscribe(function (clients) {
            _this.clientes = clients;
        });
        this.hideModalcliente = true;
    };
    CotizadorComponent.prototype.getProductPrice = function (product) {
        if (product.quantity >= 1 && product.quantity <= 12) {
            var price = product.price + product.price * .25;
            return price + price * .16;
        }
        else if (product.quantity >= 13 && product.quantity <= 50) {
            var price = product.price + product.price * .21;
            return price + price * .16;
        }
        else if (product.quantity >= 51 && product.quantity <= 200) {
            var price = product.price + product.price * .17;
            return price + price * .16;
        }
        else if (product.quantity > 200) {
            var price = product.price + product.price * .13;
            return price + price * .16;
        }
    };
    CotizadorComponent.prototype.calculateTotal = function () {
        var _total = 0;
        for (var _i = 0, _a = this.order.products; _i < _a.length; _i++) {
            var producto = _a[_i];
            _total += this.getProductPrice(producto); //producto.price * producto.quantity;
        }
        for (var _b = 0, _c = this.order.maquilas; _b < _c.length; _b++) {
            var maquila = _c[_b];
            _total += maquila.price * maquila.quantity;
        }
        this.order.total = _total;
    };
    CotizadorComponent.prototype.init = function () {
        this.cotizacion.numeroCotizacion = "000000000001";
    };
    CotizadorComponent.prototype.getTodayDate = function () {
        return new Date().toLocaleDateString();
    };
    //Modal
    CotizadorComponent.prototype.verProductos = function () {
        this.hideModal = false;
    };
    CotizadorComponent.prototype.verMaquilas = function () {
        this.maquilasModal = false;
    };
    CotizadorComponent.prototype.verTecnica = function (index) {
        this.pIndex = index;
        this.hideModal2 = false;
        this.setTecnicasSelected();
    };
    CotizadorComponent.prototype.setTecnicasSelected = function () {
    };
    CotizadorComponent.prototype.Details = function () {
        this.hideModal3 = false;
    };
    CotizadorComponent.prototype.ClienteModal = function () {
        this.hideModalcliente = false;
    };
    CotizadorComponent.prototype.closeModal = function () {
        this.hideModal = true;
        this.hideModalcliente = true;
    };
    CotizadorComponent.prototype.closeMaquilas = function () {
        this.maquilasModal = true;
        this.calculateTotal();
    };
    CotizadorComponent.prototype.closeTecnicas = function () {
        this.hideModal2 = true;
        this.resetTecnicas();
        this.calculateTotal();
    };
    CotizadorComponent.prototype.resetTecnicas = function () {
        // for (let tecnica of this.tecnicas) {
        //   tecnica.selected = false;
        // }
    };
    CotizadorComponent.prototype.alreadyTecnicaAdded = function (tecnicaToAdd) {
    };
    CotizadorComponent.prototype.deleteTecnica = function (tecnica) {
    };
    CotizadorComponent.prototype.calcularTotalProducto = function (producto) {
        return this.getProductPrice(producto) * producto.quantity;
    };
    CotizadorComponent.prototype.closeModal2 = function () {
        this.hideModal3 = true;
        this.hideModal2 = false;
    };
    CotizadorComponent.prototype.seleccionarProducto = function (producto) {
        this.addProducto(producto);
    };
    CotizadorComponent.prototype.selectTecnica = function (tecnica) {
    };
    CotizadorComponent.prototype.isTecnicaSelected = function (tecnica) {
    };
    CotizadorComponent.prototype.deleteRow = function (rowNumber) {
        this.order.products.splice(rowNumber, 1);
        this.changeDetectorRef.detectChanges();
        this.calculateTotal();
    };
    CotizadorComponent.prototype.getProductsCotizacionFromProducts = function (_products) {
        var prodsCot = Array();
        _products.forEach(function (prod) {
            prodsCot.push(productCotizacion_1.ProductCotizacion.copyFromProduct(prod));
        });
        return prodsCot;
    };
    CotizadorComponent.prototype.getTecnicasCotizacionFromTecnicas = function (_tecnicas) {
        var tecnicasCot = Array();
        _tecnicas.forEach(function (tecnica) {
            tecnicasCot.push(tecnicaCotizacion_1.TecnicaCotizacion.copyFromTecnica(tecnica));
        });
        return tecnicasCot;
    };
    CotizadorComponent.prototype.getConfigData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Observable_1.Observable.forkJoin(_this._clienteService.getClients(), _this._productoService.getProducts(), _this._tecnicaService.getTecnicas(), _this._sellerService.getSellers()).subscribe(function (results) {
                _this.clientes = results[0];
                _this.productos = _this.getProductsCotizacionFromProducts(results[1]);
                _this.tecnicas = _this.getTecnicasCotizacionFromTecnicas(results[2]);
                _this.sellers = results[3];
                resolve(true);
            });
        });
    };
    CotizadorComponent.prototype.CreateOrder = function () {
        this.order.client = this.clienteSelected;
        this.order.seller = this.sellerSelected;
        this.order.debt = this.order.total - this.order.advance;
        if (this.order.debt == 0) {
            this.order.isPaid = 1;
        }
        else {
            this.order.isPaid = 0;
        }
        console.log(this.order);
        this._orderService.addOrder(this.order).subscribe(function (data) {
            console.log("order added");
            alert("Pedido Creado");
        });
    };
    CotizadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.order = new order_1.Order;
        // this.order.folio = "300";
        this.getConfigData().then(function (res) {
            if (_this.clientes.length > 0)
                _this.clienteSelected = _this.clientes[0];
            if (_this.tecnicas.length > 0)
                _this.tecnicaSelected = _this.tecnicas[0];
            if (_this.productos.length > 0)
                _this.productoSelected = _this.productos[0];
            if (_this.sellers.length > 0)
                _this.sellerSelected = _this.sellers[0];
            _this.cotizacion.tecnica = _this.tecnicaSelected;
            _this.cotizacion.cliente = _this.clienteSelected;
            _this.productos = _this.productos;
            _this.cotizacion.producto = _this.productoSelected;
            _this.order.products = [];
            _this.order.maquilas = [];
            _this.order.tecnicaBordados = [];
            _this.setShippingDate();
        });
    };
    return CotizadorComponent;
}());
CotizadorComponent = __decorate([
    core_1.Component({
        selector: 'cotizador',
        providers: [cotizador_service_1.CotizadorService, cliente_service_1.ClienteService, producto_service_1.ProductoService, tecnica_service_1.TecnicaService, seller_service_1.SellerService, order_service_1.OrderService],
        styleUrls: ["app/cotizador.css", "app/styles/table.css"],
        templateUrl: "app/cotizador.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialog,
        cotizador_service_1.CotizadorService,
        cliente_service_1.ClienteService,
        producto_service_1.ProductoService,
        tecnica_service_1.TecnicaService,
        core_2.ChangeDetectorRef,
        seller_service_1.SellerService,
        order_service_1.OrderService])
], CotizadorComponent);
exports.CotizadorComponent = CotizadorComponent;
//# sourceMappingURL=cotizador.component.js.map