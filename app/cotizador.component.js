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
var core_1 = require('@angular/core');
var CotizadorComponent = (function () {
    function CotizadorComponent() {
    }
    CotizadorComponent = __decorate([
        core_1.Component({
            selector: 'cotizador',
            template: "\n  \n\n                        <label for=\"\">Cliente</label>\n                        <form class=\"form-inline\" role=\"form\">\n                          <div class=\"form-group\">\n                        <select class=\"form-control\" placeholder=\"Cliente\" push=\"left\">                         \n                    <option value=\"\" disabled selected>Select your option</option>\n                    <option value=\"hurr\">Bordesa</option>\n                    <option value=\"hurr\">Not assigned</option>\n                    <option value=\"hurr\">Not assigned</option>\n                    </select>\n                          <input name=\"email\" id=\"email\" type=\"text\" required class=\"form-control\" placeholder=\"Email\" disabled=\"disabled\">\n                          <input name=\"telefono\" id=\"telefono\" type=\"text\" required class=\"form-control\" placeholder=\"Telefono\" disabled=\"disabled\">                          \n                          </div>\n                        </form>\n                        <label for=\"\">Producto</label>\n                        <form class=\"form-inline\" role=\"form\">\n                          <div class=\"form-group\">\n                        <select class=\"form-control\" placeholder=\"Cliente\">                         \n                    <option value=\"\" disabled selected>Tecnicas</option>\n                    <option value=\"hurr\">Bordesa</option>\n                    <option value=\"hurr\">Not assigned</option>\n                    <option value=\"hurr\">Not assigned</option>\n                    </select>\n                          <input name=\"email\" id=\"email\" type=\"text\" required class=\"form-control\" placeholder=\"Email\" disabled=\"disabled\">\n                          <input name=\"telefono\" id=\"telefono\" type=\"text\" required class=\"form-control\" placeholder=\"Telefono\" disabled=\"disabled\">                          \n                          </div>\n                        </form>\n\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], CotizadorComponent);
    return CotizadorComponent;
}());
exports.CotizadorComponent = CotizadorComponent;
//# sourceMappingURL=cotizador.component.js.map