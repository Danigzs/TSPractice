"use strict";
var AppConfig = (function () {
    function AppConfig() {
        this.bordado = 0;
        this.serigrafia = 0;
        this.sublimado = 0;
        this.revelado = 0;
        this.presecado = 0;
    }
    AppConfig.prototype.setCategoria = function (presecado, revelado, id, bordado, serigrafia, sublimado) {
        this.bordado = bordado;
        this.serigrafia = serigrafia;
        this.sublimado = sublimado;
        this.revelado = revelado;
        this.presecado = presecado;
        this.id = id;
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=appConfig.js.map