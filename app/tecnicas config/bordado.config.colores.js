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
var colores_service_1 = require("./colores.service");
var colores_1 = require("./colores");
var appConfig_1 = require("./../appConfig/appConfig");
var ColoresComponent = (function () {
    function ColoresComponent(_tecnicaService) {
        this._tecnicaService = _tecnicaService;
        this.cantidad = 1000;
    }
    ColoresComponent.prototype.ngOnInit = function () {
        this.colores = new colores_1.Colores();
        this.reloadTecnicas();
    };
    ColoresComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.colores = new colores_1.Colores();
        this._tecnicaService.getTecnicas().subscribe(function (data) {
            _this.color = data;
        });
    };
    ColoresComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._tecnicaService.addTecnica(this.colores).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    ColoresComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._tecnicaService.addTecnica(this.colores).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return ColoresComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", appConfig_1.AppConfig)
], ColoresComponent.prototype, "appConfig", void 0);
ColoresComponent = __decorate([
    core_1.Component({
        selector: 'bordado-colores',
        providers: [colores_service_1.ColoresService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/bordado.config.colores.html"
    }),
    __metadata("design:paramtypes", [colores_service_1.ColoresService])
], ColoresComponent);
exports.ColoresComponent = ColoresComponent;
//# sourceMappingURL=bordado.config.colores.js.map