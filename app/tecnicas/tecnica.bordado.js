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
var bordado_service_1 = require("./bordado.service");
var bordado_1 = require("./bordado");
var TecnicaBordadoComponent = (function () {
    function TecnicaBordadoComponent(_bordadoService) {
        this._bordadoService = _bordadoService;
    }
    TecnicaBordadoComponent.prototype.ngOnInit = function () {
        this.bordado = new bordado_1.Bordado();
        this.reloadTecnicas();
    };
    TecnicaBordadoComponent.prototype.reloadTecnicas = function () {
        var _this = this;
        this.bordado = new bordado_1.Bordado();
        this._bordadoService.getTecnicas().subscribe(function (data) {
            _this.bordados = data;
        });
    };
    TecnicaBordadoComponent.prototype.agregarTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.bordado).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    TecnicaBordadoComponent.prototype.updateTecnica = function () {
        var _this = this;
        this._bordadoService.addTecnica(this.bordado).subscribe(function (data) {
            _this.reloadTecnicas();
        });
    };
    return TecnicaBordadoComponent;
}());
TecnicaBordadoComponent = __decorate([
    core_1.Component({
        selector: 'tecnicabordado',
        providers: [bordado_service_1.BordadoService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas/tecnica.bordado.html"
    }),
    __metadata("design:paramtypes", [bordado_service_1.BordadoService])
], TecnicaBordadoComponent);
exports.TecnicaBordadoComponent = TecnicaBordadoComponent;
//# sourceMappingURL=tecnica.bordado.js.map