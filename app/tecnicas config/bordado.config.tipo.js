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
var BordadoTipo_service_1 = require("./BordadoTipo.service");
var BordadoTipo_1 = require("./BordadoTipo");
var appConfig_1 = require("./../appConfig/appConfig");
var BordadoTipoComponent = (function () {
    function BordadoTipoComponent(_bordadoService) {
        this._bordadoService = _bordadoService;
    }
    BordadoTipoComponent.prototype.ngOnInit = function () {
        this.bordadotipo = new BordadoTipo_1.BordadoTipo();
        this.reloadTecnicas();
    };
    BordadoTipoComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.bordadotipo = new BordadoTipo_1.BordadoTipo();
        this._bordadoService.getTecnicas().subscribe(function (data) {
            _this.bordados = data;
        });
    };
    BordadoTipoComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.bordadotipo).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    BordadoTipoComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.bordadotipo).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return BordadoTipoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", appConfig_1.AppConfig)
], BordadoTipoComponent.prototype, "appConfig", void 0);
BordadoTipoComponent = __decorate([
    core_1.Component({
        selector: 'bordado-tipo',
        providers: [BordadoTipo_service_1.BordadoTipoService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/bordado.config.tipo.html"
    }),
    __metadata("design:paramtypes", [BordadoTipo_service_1.BordadoTipoService])
], BordadoTipoComponent);
exports.BordadoTipoComponent = BordadoTipoComponent;
//# sourceMappingURL=bordado.config.tipo.js.map