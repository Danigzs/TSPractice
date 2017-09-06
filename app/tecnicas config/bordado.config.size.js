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
var BordadoSize_service_1 = require("./BordadoSize.service");
var BordadoSize_1 = require("./BordadoSize");
var BordadoTamañoComponent = (function () {
    function BordadoTamañoComponent(_bordadoService) {
        this._bordadoService = _bordadoService;
    }
    BordadoTamañoComponent.prototype.ngOnInit = function () {
        this.bordado = new BordadoSize_1.BordadoSize();
        this.reloadTecnicas();
    };
    BordadoTamañoComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.bordado = new BordadoSize_1.BordadoSize();
        this._bordadoService.getTecnicas().subscribe(function (data) {
            _this.bordados = data;
        });
    };
    BordadoTamañoComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.bordado).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    BordadoTamañoComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.bordado).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return BordadoTamañoComponent;
}());
BordadoTamañoComponent = __decorate([
    core_1.Component({
        selector: 'bordado-size',
        providers: [BordadoSize_service_1.BordadoSizeService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/bordado.config.size.html"
    }),
    __metadata("design:paramtypes", [BordadoSize_service_1.BordadoSizeService])
], BordadoTamañoComponent);
exports.BordadoTamañoComponent = BordadoTamañoComponent;
//# sourceMappingURL=bordado.config.size.js.map