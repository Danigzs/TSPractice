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
var ubicaciones_service_1 = require("./ubicaciones.service");
var ubicaciones_1 = require("./ubicaciones");
var appConfig_1 = require("./../appConfig/appConfig");
var UbicacionComponent = (function () {
    function UbicacionComponent(_bordadoService) {
        this._bordadoService = _bordadoService;
    }
    UbicacionComponent.prototype.ngOnInit = function () {
        this.ubicaciones = new ubicaciones_1.Ubicaciones();
        this.reloadTecnicas();
    };
    UbicacionComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.ubicaciones = new ubicaciones_1.Ubicaciones();
        this._bordadoService.getTecnicas().subscribe(function (data) {
            _this.ubicacion = data;
        });
    };
    UbicacionComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.ubicaciones).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    UbicacionComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.ubicaciones).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return UbicacionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", appConfig_1.AppConfig)
], UbicacionComponent.prototype, "appConfig", void 0);
UbicacionComponent = __decorate([
    core_1.Component({
        selector: 'ubicaciones',
        providers: [ubicaciones_service_1.UbicacionesService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/ubicaciones.config.html"
    }),
    __metadata("design:paramtypes", [ubicaciones_service_1.UbicacionesService])
], UbicacionComponent);
exports.UbicacionComponent = UbicacionComponent;
//# sourceMappingURL=ubicaciones.config.js.map