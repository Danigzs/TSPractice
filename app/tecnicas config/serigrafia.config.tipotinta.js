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
var SerigrafiaTipoTinta_service_1 = require("./SerigrafiaTipoTinta.service");
var SerigrafiaTipoTinta_1 = require("./SerigrafiaTipoTinta");
var appConfig_1 = require("./../appConfig/appConfig");
var TipoTintaComponent = (function () {
    function TipoTintaComponent(_tecnicaService) {
        this._tecnicaService = _tecnicaService;
        this.cantidad = 1000;
    }
    TipoTintaComponent.prototype.ngOnInit = function () {
        this.tipos = new SerigrafiaTipoTinta_1.SerigrafiaTipoTinta();
        this.reloadTecnicas();
    };
    TipoTintaComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.tipos = new SerigrafiaTipoTinta_1.SerigrafiaTipoTinta();
        this._tecnicaService.getTecnicas().subscribe(function (data) {
            _this.tipotinta = data;
        });
    };
    TipoTintaComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._tecnicaService.addTecnica(this.tipos).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    TipoTintaComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._tecnicaService.addTecnica(this.tipos).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return TipoTintaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", appConfig_1.AppConfig)
], TipoTintaComponent.prototype, "appConfig", void 0);
TipoTintaComponent = __decorate([
    core_1.Component({
        selector: 'tinta-tipo',
        providers: [SerigrafiaTipoTinta_service_1.SerigrafiaTipoTintaService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/serigrafia.config.tipotinta.html"
    }),
    __metadata("design:paramtypes", [SerigrafiaTipoTinta_service_1.SerigrafiaTipoTintaService])
], TipoTintaComponent);
exports.TipoTintaComponent = TipoTintaComponent;
//# sourceMappingURL=serigrafia.config.tipotinta.js.map