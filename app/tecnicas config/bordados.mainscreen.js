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
var appConfig_1 = require("../appConfig/appConfig");
var appConfig_service_1 = require("../appConfig/appConfig.service");
var BordadoMainComponent = (function () {
    function BordadoMainComponent(_appConfigService) {
        this._appConfigService = _appConfigService;
    }
    BordadoMainComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.appConfig = new appConfig_1.AppConfig();
        this.getAppConfig();
    };
    BordadoMainComponent.prototype.getAppConfig = function () {
        var _this = this;
        this._appConfigService.getAppConfig().subscribe(function (appConfig) {
            _this.appConfig = appConfig;
        });
    };
    return BordadoMainComponent;
}());
BordadoMainComponent = __decorate([
    core_1.Component({
        selector: 'bordado-main',
        providers: [appConfig_service_1.AppConfigService],
        styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
        templateUrl: "./app/tecnicas config/bordados.mainscreen.html"
    }),
    __metadata("design:paramtypes", [appConfig_service_1.AppConfigService])
], BordadoMainComponent);
exports.BordadoMainComponent = BordadoMainComponent;
//# sourceMappingURL=bordados.mainscreen.js.map