"use strict";
var Categoria = (function () {
    function Categoria() {
        this.selected = false;
        this.nombre = "";
        this.id = -1;
    }
    Categoria.prototype.setCategoria = function (id, nombre, selected) {
        if (selected === void 0) { selected = false; }
        this.selected = selected;
        this.nombre = nombre;
        this.id = id;
    };
    Categoria.prototype.copyNewCategoria = function () {
        var _categoria = new Categoria();
        _categoria.selected = this.selected;
        _categoria.id = this.id;
        _categoria.nombre = this.nombre;
        _categoria["selected"] = this["selected"];
        return _categoria;
    };
    return Categoria;
}());
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.js.map