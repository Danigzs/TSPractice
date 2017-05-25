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
var tecnica_service_1 = require("../producto/tecnica.service");
var tecnica_1 = require("../producto/tecnica");
var TecnicasComponent = (function () {
    function TecnicasComponent(_tecnicaService) {
        this._tecnicaService = _tecnicaService;
        this.tecnicaService = _tecnicaService;
        this.tecnicas = _tecnicaService.getTecnicas();
    }
    TecnicasComponent.prototype.ngOnInit = function () {
        this.tecnica = new tecnica_1.Tecnica();
    };
    TecnicasComponent.prototype.agregarTecnica = function () {
        this.tecnicaService.addTecnica(this.tecnica);
        this.tecnica = new tecnica_1.Tecnica();
    };
    TecnicasComponent.prototype.updateTecnica = function () {
    };
    return TecnicasComponent;
}());
TecnicasComponent = __decorate([
    core_1.Component({
        selector: 'tecnicas',
        providers: [tecnica_service_1.TecnicaService],
        styleUrls: ["./app/tecnicas/tecnicas.css"],
        templateUrl: "./app/tecnicas/tecnicas.html"
    }),
    __metadata("design:paramtypes", [tecnica_service_1.TecnicaService])
], TecnicasComponent);
exports.TecnicasComponent = TecnicasComponent;
//# sourceMappingURL=tecnicas.component.js.map