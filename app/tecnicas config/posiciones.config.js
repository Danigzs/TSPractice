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
var posiciones_service_1 = require("./posiciones.service");
var posiciones_1 = require("./posiciones");
var appConfig_1 = require("./../appConfig/appConfig");
var PosicionComponent = (function () {
    function PosicionComponent(_bordadoService) {
        this._bordadoService = _bordadoService;
    }
    PosicionComponent.prototype.ngOnInit = function () {
        this.posiciones = new posiciones_1.Posiciones();
        this.reloadTecnicas();
    };
    PosicionComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.posiciones = new posiciones_1.Posiciones();
        this._bordadoService.getTecnicas().subscribe(function (data) {
            _this.posicion = data;
        });
    };
    PosicionComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.posiciones).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    PosicionComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.posiciones).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return PosicionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", appConfig_1.AppConfig)
], PosicionComponent.prototype, "appConfig", void 0);
PosicionComponent = __decorate([
    core_1.Component({
        selector: 'posiciones',
        providers: [posiciones_service_1.PosicionesService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/posiciones.config.html"
    }),
    __metadata("design:paramtypes", [posiciones_service_1.PosicionesService])
], PosicionComponent);
exports.PosicionComponent = PosicionComponent;
//# sourceMappingURL=posiciones.config.js.map