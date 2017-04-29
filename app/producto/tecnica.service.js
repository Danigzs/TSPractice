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
        var tecnica3 = new tecnica_1.Tecnica();
        var tecnica4 = new tecnica_1.Tecnica();
        var tecnica5 = new tecnica_1.Tecnica();
        var tecnica6 = new tecnica_1.Tecnica();
        var tecnica7 = new tecnica_1.Tecnica();
        tecnica1.setTecnica(1, "Bordado", 150);
        tecnica2.setTecnica(2, "Serigrafia", 50);
        tecnica3.setTecnica(3, "Tampografia", 60);
        tecnica4.setTecnica(4, "Vinil", 80);
        tecnica5.setTecnica(5, "Sublimado", 90);
        tecnica6.setTecnica(6, "Bordado3D", 200);
        tecnica7.setTecnica(7, "Vinil Textil", 100);
        this.tecnicas = [tecnica1, tecnica2, tecnica3, tecnica4, tecnica5, tecnica6, tecnica7];
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