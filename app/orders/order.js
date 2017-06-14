"use strict";
var cliente_1 = require("../cliente/cliente");
var seller_1 = require("../sellers/seller");
var Order = (function () {
    function Order() {
        this.client = new cliente_1.Cliente;
        this.seller = new seller_1.Seller;
        this.products = [];
        this.maquilas = [];
        this.total = 0;
        this.folio = "";
        this.notes = "";
        this.advance = 0;
        this.discount = 0;
        this.shippingWay = "";
        this.shippingDate = Date.now();
    }
    Order.prototype.setOrder = function (client, seller, products, maquilas, total, folio, notes, advance, discount, shippingWay, shippingDate) {
        this.client = client;
        this.seller = seller;
        this.products = products;
        this.maquilas = maquilas;
        this.total = total;
        this.folio = folio;
        this.notes = notes;
        this.advance = advance;
        this.discount = discount;
        this.shippingWay = shippingWay;
        this.shippingDate = shippingDate;
    };
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map