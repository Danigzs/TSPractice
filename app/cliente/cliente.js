"use strict";
var Cliente = (function () {
    function Cliente() {
        this.id = 0;
        this.clave = 0;
        this.nombre = "";
        this.razonSocial = "";
        this.domicilio = "";
        this.estado = "";
        this.municipio = "";
        this.colonia = "";
        this.pais = "";
        this.codigoPostal = "";
        this.telefono = "";
        this.email = "";
        this.atencionA = "";
        this.rfc = "";
    }
    Cliente.prototype.setCliente = function (id, clave, nombre, razonSocial, domicilio, estado, municipio, colonia, pais, codigoPostal, telefono, email, atencionA, rfc) {
        this.id = id;
        this.clave = clave;
        this.nombre = nombre;
        this.razonSocial = razonSocial;
        this.domicilio = domicilio;
        this.estado = estado;
        this.municipio = municipio;
        this.colonia = colonia;
        this.pais = pais;
        this.codigoPostal = codigoPostal;
        this.telefono = telefono;
        this.email = email;
        this.atencionA = atencionA;
        this.rfc = rfc;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map