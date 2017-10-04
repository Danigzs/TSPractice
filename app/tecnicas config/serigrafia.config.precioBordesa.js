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
var serigrafia_precioBordesa_service_1 = require("./serigrafia.precioBordesa.service");
var serigrafiaPrecioBordesa_1 = require("./serigrafiaPrecioBordesa");
var appConfig_1 = require("./../appConfig/appConfig");
var SerigrafiaPrecioBordesaComponent = (function () {
    function SerigrafiaPrecioBordesaComponent(_bordadoService) {
        this._bordadoService = _bordadoService;
    }
    SerigrafiaPrecioBordesaComponent.prototype.ngOnInit = function () {
        this.precios = new serigrafiaPrecioBordesa_1.SerigrafiaPrecioBordesa();
        this.reloadTecnicas();
    };
    SerigrafiaPrecioBordesaComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.precios = new serigrafiaPrecioBordesa_1.SerigrafiaPrecioBordesa();
        this._bordadoService.getTecnicas().subscribe(function (data) {
            _this.precio = data;
        });
    };
    SerigrafiaPrecioBordesaComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.precios).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    SerigrafiaPrecioBordesaComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.precios).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return SerigrafiaPrecioBordesaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", appConfig_1.AppConfig)
], SerigrafiaPrecioBordesaComponent.prototype, "appConfig", void 0);
SerigrafiaPrecioBordesaComponent = __decorate([
    core_1.Component({
        selector: 'serigrafia-preciobordesa',
        providers: [serigrafia_precioBordesa_service_1.SerigrafiaPrecioBordesaService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/serigrafia.config.precioBordesa.html"
    }),
    __metadata("design:paramtypes", [serigrafia_precioBordesa_service_1.SerigrafiaPrecioBordesaService])
], SerigrafiaPrecioBordesaComponent);
exports.SerigrafiaPrecioBordesaComponent = SerigrafiaPrecioBordesaComponent;
//# sourceMappingURL=serigrafia.config.precioBordesa.js.map