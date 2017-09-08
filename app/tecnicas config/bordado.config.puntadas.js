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
var BordadoPuntadas_service_1 = require("./BordadoPuntadas.service");
var BordadoPuntadas_1 = require("./BordadoPuntadas");
var appConfig_1 = require("./../appConfig/appConfig");
var BordadoPuntadasComponent = (function () {
    function BordadoPuntadasComponent(_tecnicaService) {
        this._tecnicaService = _tecnicaService;
        this.cantidad = 1000;
    }
    BordadoPuntadasComponent.prototype.ngOnInit = function () {
        this.bordadopuntadas = new BordadoPuntadas_1.BordadoPuntadas();
        this.reloadTecnicas();
    };
    BordadoPuntadasComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.bordadopuntadas = new BordadoPuntadas_1.BordadoPuntadas();
        this._tecnicaService.getTecnicas().subscribe(function (data) {
            _this.bordados = data;
        });
    };
    BordadoPuntadasComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._tecnicaService.addTecnica(this.bordadopuntadas).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    BordadoPuntadasComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._tecnicaService.addTecnica(this.bordadopuntadas).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return BordadoPuntadasComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", appConfig_1.AppConfig)
], BordadoPuntadasComponent.prototype, "appConfig", void 0);
BordadoPuntadasComponent = __decorate([
    core_1.Component({
        selector: 'bordado-puntadas',
        providers: [BordadoPuntadas_service_1.BordadoPuntadasService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/bordado.config.puntadas.html"
    }),
    __metadata("design:paramtypes", [BordadoPuntadas_service_1.BordadoPuntadasService])
], BordadoPuntadasComponent);
exports.BordadoPuntadasComponent = BordadoPuntadasComponent;
//# sourceMappingURL=bordado.config.puntadas.js.map