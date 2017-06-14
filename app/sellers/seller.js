"use strict";
var Seller = (function () {
    function Seller() {
        this.name = "";
        this.store = "";
        this.address = "";
        this.phone = "";
        this.email = "";
        this.rfc = "";
        this.code = "";
    }
    Seller.prototype.setSeller = function (name, store, address, phone, email, rfc, code) {
        this.name = name;
        this.store = store;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.rfc = rfc;
        this.code = code;
    };
    Seller.prototype.copyNewSeller = function () {
        var _seller = new Seller();
        _seller.name = this.name;
        _seller.store = this.store;
        _seller.address = this.address;
        _seller.phone = this.phone;
        _seller.email = this.email;
        _seller.rfc = this.rfc;
        _seller.code = this.code;
        return _seller;
    };
    return Seller;
}());
exports.Seller = Seller;
//# sourceMappingURL=seller.js.map