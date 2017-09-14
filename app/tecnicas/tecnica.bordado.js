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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var bordado_service_1 = require("./bordado.service");
/**
 * Config bordados  - Models
 */
var BordadoTipo_1 = require("./../tecnicas config/BordadoTipo");
var BordadoPuntadas_1 = require("./../tecnicas config/BordadoPuntadas");
var BordadoSize_1 = require("./../tecnicas config/BordadoSize");
var posiciones_1 = require("./../tecnicas config/posiciones");
/**
 * Config bordados - Services
 */
var BordadoTipo_service_1 = require("./../tecnicas config/BordadoTipo.service");
var BordadoPuntadas_service_1 = require("./../tecnicas config/BordadoPuntadas.service");
var BordadoSize_service_1 = require("./../tecnicas config/BordadoSize.service");
var posiciones_service_1 = require("./../tecnicas config/posiciones.service");
var bordado_1 = require("./bordado");
var TecnicaBordadoComponent = (function () {
    function TecnicaBordadoComponent(_bordadoTypeService, _bordadoStitchService, _bordadoSizeService, _bordadoPositionService) {
        this._bordadoTypeService = _bordadoTypeService;
        this._bordadoStitchService = _bordadoStitchService;
        this._bordadoSizeService = _bordadoSizeService;
        this._bordadoPositionService = _bordadoPositionService;
        /**
         * Config bordado
         */
        this.bordadoTypeSelected = new BordadoTipo_1.BordadoTipo;
        this.bordadoStitchSelected = new BordadoPuntadas_1.BordadoPuntadas;
        this.bordadoSizeSelected = new BordadoSize_1.BordadoSize;
        this.bordadoPositionSelected = new posiciones_1.Posiciones;
        this.bordadotipoSelected = new BordadoTipo_1.BordadoTipo;
    }
    TecnicaBordadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bordado = new bordado_1.Bordado();
        this.bordadoTypeSelected = new BordadoTipo_1.BordadoTipo();
        this.bordadoSizeSelected = new BordadoSize_1.BordadoSize();
        this.bordadoPositionSelected = new posiciones_1.Posiciones();
        this.bordadoStitchSelected = new BordadoPuntadas_1.BordadoPuntadas();
        this.getBordadosData().then(function (res) {
            if (_this.bordadoTypes.length > 0) {
                _this.bordadoTypeSelected = _this.bordadoTypes[0];
                _this.OnSelectBordadoType(_this.bordadoTypeSelected);
            }
            if (_this.bordadoSizes.length > 0) {
                _this.bordadoSizeSelected = _this.bordadoSizes[0];
                _this.OnSelectBordadoSize(_this.bordadoSizeSelected);
            }
            if (_this.bordadoPositions.length > 0) {
                _this.bordadoPositionSelected = _this.bordadoPositions[0];
                _this.OnSelectBordadoPosition(_this.bordadoPositionSelected);
            }
            if (_this.bordadoStitches.length > 0)
                _this.bordadoStitchSelected = _this.bordadoStitches[0];
        });
    };
    TecnicaBordadoComponent.prototype.selectBordadoType = function (event) {
        this.OnSelectBordadoType(this.bordadoTypeSelected);
    };
    TecnicaBordadoComponent.prototype.selectBordadoSize = function (event) {
        this.OnSelectBordadoSize(this.bordadoSizeSelected);
    };
    TecnicaBordadoComponent.prototype.selectBordadoPosition = function (event) {
        this.OnSelectBordadoPosition(this.bordadoPositionSelected);
    };
    TecnicaBordadoComponent.prototype.selectBordadoStitch = function (event) {
    };
    TecnicaBordadoComponent.prototype.getBordadosData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Observable_1.Observable.forkJoin(_this._bordadoTypeService.getTecnicas(), _this._bordadoSizeService.getTecnicas(), _this._bordadoStitchService.getTecnicas(), _this._bordadoPositionService.getTecnicas()).subscribe(function (results) {
                _this.bordadoTypes = results[0];
                _this.bordadoSizes = results[1];
                _this.bordadoStitches = results[2];
                _this.bordadoPositions = results[3];
                resolve(true);
            });
        });
    };
    return TecnicaBordadoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TecnicaBordadoComponent.prototype, "OnSelectBordadoType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TecnicaBordadoComponent.prototype, "OnSelectBordadoSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TecnicaBordadoComponent.prototype, "OnSelectBordadoPosition", void 0);
TecnicaBordadoComponent = __decorate([
    core_1.Component({
        selector: 'tecnicabordado',
        providers: [bordado_service_1.BordadoService, BordadoSize_service_1.BordadoSizeService, BordadoPuntadas_service_1.BordadoPuntadasService, BordadoTipo_service_1.BordadoTipoService, posiciones_service_1.PosicionesService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas/tecnica.bordado.html"
    }),
    __metadata("design:paramtypes", [BordadoTipo_service_1.BordadoTipoService,
        BordadoPuntadas_service_1.BordadoPuntadasService,
        BordadoSize_service_1.BordadoSizeService,
        posiciones_service_1.PosicionesService])
], TecnicaBordadoComponent);
exports.TecnicaBordadoComponent = TecnicaBordadoComponent;
//# sourceMappingURL=tecnica.bordado.js.map