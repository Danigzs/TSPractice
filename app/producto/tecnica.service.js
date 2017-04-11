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
var core_1 = require("@angular/core");
var tecnica_1 = require("./tecnica");
var TecnicaService = (function () {
    function TecnicaService() {
        var tecnica1 = new tecnica_1.Tecnica();
        var tecnica2 = new tecnica_1.Tecnica();
        tecnica1.setTecnica("Bordado", 150);
        tecnica2.setTecnica("Serigrafia", 50);
        this.tecnicas = [tecnica1, tecnica2];
    }
    TecnicaService.prototype.getTecnicas = function () {
        return this.tecnicas;
    };
    return TecnicaService;
}());
TecnicaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TecnicaService);
exports.TecnicaService = TecnicaService;
//# sourceMappingURL=tecnica.service.js.map