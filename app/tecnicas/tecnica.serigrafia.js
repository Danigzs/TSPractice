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
var TecnicaSerigrafiaComponent = (function () {
    function TecnicaSerigrafiaComponent(_tecnicaService) {
        this._tecnicaService = _tecnicaService;
    }
    TecnicaSerigrafiaComponent.prototype.ngOnInit = function () {
        this.tecnica = new tecnica_1.Tecnica();
        this.reloadTecnicas();
    };
    TecnicaSerigrafiaComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.tecnica = new tecnica_1.Tecnica();
        this._tecnicaService.getTecnicas().subscribe(function (data) {
            _this.tecnicas = data;
        });
    };
    TecnicaSerigrafiaComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._tecnicaService.addTecnica(this.tecnica).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    TecnicaSerigrafiaComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._tecnicaService.addTecnica(this.tecnica).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return TecnicaSerigrafiaComponent;
}());
TecnicaSerigrafiaComponent = __decorate([
    core_1.Component({
        selector: 'tecnicaserigrafia',
        providers: [tecnica_service_1.TecnicaService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas/tecnica.serigrafia.html"
    }),
    __metadata("design:paramtypes", [tecnica_service_1.TecnicaService])
], TecnicaSerigrafiaComponent);
exports.TecnicaSerigrafiaComponent = TecnicaSerigrafiaComponent;
//# sourceMappingURL=tecnica.serigrafia.js.map