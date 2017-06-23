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
        this.folio = 0;
        this.notes = "";
        this.advance = 0;
        this.debt = 0;
        this.shippingWay = "";
        this.shippingDate = Date.now();
    }
    Order.prototype.setOrder = function (client, seller, products, maquilas, total, folio, notes, advance, debt, isPaid, createdAt, shippingWay, shippingDate) {
        this.client = client;
        this.seller = seller;
        this.products = products;
        this.maquilas = maquilas;
        this.total = total;
        this.folio = folio;
        this.isPaid = isPaid;
        this.createdAt = createdAt;
        this.notes = notes;
        this.advance = advance;
        this.debt = debt;
        this.shippingWay = shippingWay;
        this.shippingDate = shippingDate;
    };
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map