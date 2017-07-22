"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var tecnica_service_1 = require("../producto/tecnica.service");
var TecnicaSublimadoComponent = (function () {
    function TecnicaSublimadoComponent() {
    }
    return TecnicaSublimadoComponent;
}());
TecnicaSublimadoComponent = __decorate([
    core_1.Component({
        selector: 'tecnicasublimado',
        providers: [tecnica_service_1.TecnicaService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas/tecnica.sublimado.html"
    })
], TecnicaSublimadoComponent);
exports.TecnicaSublimadoComponent = TecnicaSublimadoComponent;
//# sourceMappingURL=tecnica.sublimado.js.map