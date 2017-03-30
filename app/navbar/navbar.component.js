"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var cotizador_component_1 = require("./../cotizador.component");
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'navbar',
        template: "\n \n <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      \n      <a class=\"navbar-brand\" routerLink=\"/my-app\">WebSiteName</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-folder-close\"> Cotizaciones </span><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/cotizador\">Nueva</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a routerLink=\"/form-directive\">Ver Cotizaciones</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-3</a></li>\n          </ul>\n        </li>\n\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-folder-open\"> Inventario </span><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a (click)=\"open($event)\">Nuevo producto</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a routerLink=\"/inventario\">Ver inventario</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Modificar</a></li>\n          </ul>\n        </li>\n\n        <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-user\"> Clientes </span><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#basicModal\">Nuevo</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a routerLink=\"/clientes\">clientes</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-3</a></li>\n          </ul>\n        </li>\n\n\n        <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-book\"> Page 3 </span><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"http://www.w3schools.com/css/css_navbar.asp\">Page 1-1</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-2</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-3</a></li>\n          </ul>\n        </li>\n      </ul>     \n    </div>\n  </div>\n</nav>\n\t\t\t\t\t<!--\n\t\t\t\t\tMODALS\n\t\t\t\t\tMODALS\n\t\t\t\t\tMODALS\n\t\t\t\t\tMODALS\n\t\t\t\t\tMODALS\n\t\t\t\t\t-->\n\n\t\t\t\t\t<!--\n\n\t\t\t\t\tMODAL 2\n\n\t\t\t\t\t-->\n  \n<div class=\"modal fade\" id=\"modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal2\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\"> \n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Basic Modal</h4>\n                \t\n\t\t\t\t\t\t<!--\n\t\t\t\t\tBody\n\t\t\t\t\tMODAL\n\t\t\t\t\t-->\n\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n                \n                 \n\n        \t</div>\n\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\t\t\t\t\t<!--\t\t\n\n\t\t\t\t\tMODAL 3\n\t\t\t\t\t\n\t\t\t\t\t-->\n\n\n<div class=\"modal fade\" id=\"modal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal3\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\"> \n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Basic Modal</h4>\n                \t\n\t\t\t\t\t\t<!--\n\t\t\t\t\tBody\n\t\t\t\t\tMODAL\n\t\t\t\t\t-->\n\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n                <h3>Modal Body</h3>\n                <div class=\"form-group\">\n  \t\t\t\t\t<label for=\"usr\">Name:</label>\n  \t\t\t\t\t<input type=\"text\" class=\"form-control\" >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n  \t\t\t\t\t<label for=\"usr\">Numero:</label>\n  \t\t\t\t\t<input type=\"text\" class=\"form-control\" >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n  \t\t\t\t\t<label for=\"usr\">Telefono:</label>\n  \t\t\t\t\t<input type=\"text\" class=\"form-control\" >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n  \t\t\t\t\t<label for=\"usr\">Name:</label>\n  \t\t\t\t\t<input type=\"text\" class=\"form-control\" >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n  \t\t\t\t\t<label for=\"usr\">Name:</label>\n  \t\t\t\t\t<input type=\"text\" class=\"form-control\" >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n  \t\t\t\t\t<label for=\"usr\">Name:</label>\n  \t\t\t\t\t<input type=\"text\" class=\"form-control\" >\n\t\t\t\t</div>\n        \t</div>\n\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<router-outlet></router-outlet>\n  ",
        providers: [cotizador_component_1.CotizadorComponent]
    })
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map