"use strict";
var AppConfig = (function () {
    function AppConfig() {
        this.bordado = 0;
        this.serigrafia = 0;
        this.sublimado = 0;
    }
    AppConfig.prototype.setCategoria = function (id, bordado, serigrafia, sublimado) {
        this.bordado = bordado;
        this.serigrafia = serigrafia;
        this.sublimado = sublimado;
        this.id = id;
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=appConfig.js.map