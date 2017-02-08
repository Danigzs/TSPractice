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
            template: "                   \n\n                    <p>Fecha: \n                     {{date | date: 'dd'}}/{{date | date:'MM'}}/{{date | date: 'yyyy'}}</p>\n\n                           \n\n\n                        <label for=\"\">Cliente</label>\n                        <form class=\"form-inline\" role=\"form\">\n                          <div class=\"form-group\">\n                        <select class=\"form-control\" placeholder=\"Cliente\" push=\"left\">\n                    <option value=\"\" disabled selected>Select your option</option>\n                    <option value=\"hurr\">Bordesa</option>\n                    <option value=\"hurr\">Not assigned</option>\n                    <option value=\"hurr\">Not assigned</option>\n                    </select>\n                          <input name=\"email\" id=\"email\" type=\"text\" required class=\"form-control\" placeholder=\"Email\" disabled=\"disabled\">\n                          <input name=\"telefono\" id=\"telefono\" type=\"text\" required class=\"form-control\" placeholder=\"Telefono\" disabled=\"disabled\">\n                          </div>\n                        </form>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        \n                        <label for=\"\">Producto</label>\n                        <form class=\"form-inline\" role=\"form\">\n                          <div class=\"form-group\">\n\n\n                          \n                            <br/>\n                            <select class=\"form-control\" id=\"grp_option\">\n                             <option value=\"\" disabled selected>Tecnicas</option>\n                                <optgroup label=\"Group 1\">\n                                    <option>Option 1.1</option>\n                                </optgroup>\n                                <optgroup label=\"Group 2\">\n                                    <option>Option 2.1</option>\n                                    <option>Option 2.2</option>\n                                </optgroup>\n                                <optgroup label=\"Group 3\" disabled>\n                                    <option>Option 3.1</option>\n                                    <option>Option 3.2</option>\n                                    <option>Option 3.3</option>\n                                </optgroup>\n                            </select>\n\n                        \n                   \n                    \n                                  <select class=\"form-control\" placeholder=\"Grafico\" id=\"graf_option\">\n                            <option value=\"\" disabled selected>Ubicacion del grafico</option>\n                            <optgroup label=\"group 1\">\n                              <option>Centro</option>\n                              </optgroup>\n                            </select>\n\n\n                              <button type=\"button\" class=\"btn btn-primary\" onClick=\"target\">Submit</button>\n\n                            <select class=\"form-control\" placeholder=\"Talla\">\n                            <option value=\"\" disabled selected>Talla</option>\n                            </select>\n\n                            <li role=\"presentation\" class=\"divider\"></li>\n\n\n\n                            <table class = \"table table-bordered\" id=\"submittable\">    \n                          <tr>\n                            <th>Tecnicas</th>\n                            <th>Ubicaciones de grafico</th>\n                            <th>Precio</th>\n                            \n                            </tr>\n\n                          <tr >\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>                            \n                            </tr>\n                         \n\n                            </table>\n\n                          </div>\n                        </form>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n                        <li role=\"presentation\" class=\"divider\"></li>\n\n\n                        <form class=\"form-inline\" role=\"form\">\n                            <div class=\"form-group\" align=\"right\">\n                            <label>Cantidad:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cant\" placeholder=\"Cantidad\">\n                            <label>Precio de prenda:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Precio prenda\" disabled=\"disabled\">\n                            <label>Precio de Graficos:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Precio Grafico\" disabled=\"disabled\">\n                            <label>Precio Final:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Precio Final\" disabled=\"disabled\">\n                            </div>\n                        </form>\n\n                        \n                        <table class=\"table table-bordered\">\n    \n                          <tr>\n                            <th>Fecha</th>\n                            <th>Producto</th>\n                            <th>Cantidad</th>\n                            <th>Precio unitario</th>\n                            <th>Subtotal</th>\n                            <th>IVA</th>\n                            <th>Total</th>                                \n                          </tr>\n\n                          <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            \n\n                          </tr>\n                          <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            \n\n                          </tr>\n\n                          <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            \n                            </tr>\n                            <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            \n                            </tr>\n                            <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            \n                            </tr>\n                            <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            \n                            </tr>\n                            <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>\n                            <td>Not assigned</td>                            \n                            </tr>                          \n\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], CotizadorComponent);
    return CotizadorComponent;
}());
exports.CotizadorComponent = CotizadorComponent;
//# sourceMappingURL=cotizador.component.js.map