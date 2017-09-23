"use strict";
var cliente_1 = require("../cliente/cliente");
var seller_1 = require("../sellers/seller");
var Order = (function () {
    function Order() {
        this.client = new cliente_1.Cliente;
        this.seller = new seller_1.Seller;
        this.products = [];
        this.maquilas = [];
        this.tecnicaBordados = [];
        this.total = 0;
        this.folio = 0;
        this.notes = "";
        this.advance = 0;
        this.debt = 0;
        this.shippingWay = "";
        this.shippingDate = new Date;
        this.subTotal = 0;
    }
    Order.prototype.setOrder = function (_id, client, seller, products, maquilas, tecnicaBordados, total, folio, notes, advance, debt, isPaid, createdAt, shippingWay, shippingDate, subTotal) {
        this._id = _id;
        this.client = client;
        this.seller = seller;
        this.products = products;
        this.maquilas = maquilas;
        this.tecnicaBordados = tecnicaBordados;
        this.total = total;
        this.folio = folio;
        this.isPaid = isPaid;
        this.createdAt = createdAt;
        this.notes = notes;
        this.advance = advance;
        this.debt = debt;
        this.shippingWay = shippingWay;
        this.shippingDate = shippingDate;
        this.subTotal = subTotal;
    };
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map