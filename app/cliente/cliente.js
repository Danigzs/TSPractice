"use strict";
var Cliente = (function () {
    function Cliente() {
        this.code = "";
        this.name = "";
        this.businessName = "";
        this.address = "";
        this.state = "";
        this.town = "";
        this.district = "";
        this.country = "";
        this.postalCode = "";
        this.phone = "";
        this.email = "";
        this.attentTo = "";
        this.rfc = "";
    }
    Cliente.prototype.setCliente = function (code, name, businessName, address, state, town, district, country, postalCode, phone, email, attentTo, rfc) {
        this.code = code;
        this.name = name;
        this.businessName = businessName;
        this.address = address;
        this.state = state;
        this.town = town;
        this.district = district;
        this.country = country;
        this.postalCode = postalCode;
        this.phone = phone;
        this.email = email;
        this.attentTo = attentTo;
        this.rfc = rfc;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map