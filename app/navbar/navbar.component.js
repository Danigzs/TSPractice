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
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            template: "\n  \n    <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-folder-close\"> Cotizaciones </span><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"http://www.w3schools.com/js/js_window_screen.asp\" target=\"_blank\">link text</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-2</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-3</a></li>\n          </ul>\n        </li>\n\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-folder-open\"> Inventario </span><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#basicModal\">Nuevo</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Ver Inventario</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Modificar</a></li>\n          </ul>      \n        </li>\n\n        <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-user\"> Clientes </span><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"http://www.w3schools.com/css/css_navbar.asp\">Page 1-1</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-2</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-3</a></li>\n          </ul>\n        </li>\n\n\n        <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-book\"> Page 3 </span><span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"http://www.w3schools.com/css/css_navbar.asp\">Page 1-1</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-2</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"#\">Page 1-3</a></li>\n          </ul>\n        </li>\n\n      </ul>     \n    </div>\n  </div>\n</nav>\n\n<div class=\"modal fade\" id=\"basicModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">   \n\n\n\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Basic Modal</h4>\n\n                \t<h1>Datos del articulo</h1>\n        \t\t<form action=\"demo_form.asp\">\n \t\t\t\t First name: <input type=\"text\" name=\"fname\"><br>\n  \t\t\t\t Last name: <input type=\"text\" name=\"lname\"><br>\n  \t\t\t\t\t<input type=\"submit\" value=\"Submit\">\n\t\t\t\t</form>\n\n\t\t\t\t\t<li>\n                        <input type=\"file\" id=\"myfile\" name=\"myfile\" class=\"rm-input\" onchange=\"selectedFile();\"/></li>\n    \t\t\t\t<li>\n\t\t\t\t\t\t<div id=\"fileSize\"></div></li>\n    \t\t\t\t<li>\n\t\t\t\t\t\t<div id=\"fileType\"></div></li>\n    \t\t\t\t<li>\n                        <input type=\"button\" value=\"Subir Archivo\" onClick=\"uploadFile()\" class=\"rm-button\" /></li>\n\n            </div>\n            <div class=\"modal-body\">\n                <h3>Modal Body</h3>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">\n                    Save changes\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n  \n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map