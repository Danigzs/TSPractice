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
var router_1 = require("@angular/router");
var cotizador_component_1 = require("./../cotizador.component");
var producto_1 = require("./../producto/producto");
var producto_service_1 = require("./../producto/producto.service");
var user_1 = require("./../register/user");
var NavbarComponent = (function () {
    function NavbarComponent(route, router) {
        this.route = route;
        this.router = router;
        this.isLogin = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var user = window.localStorage.getItem("user");
        if (user) {
            this.user = JSON.parse(user);
        }
        else {
            this.user = new user_1.User();
        }
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    NavbarComponent.prototype.logout = function () {
        window.localStorage.clear();
        this.router.navigate(['login']);
    };
    return NavbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NavbarComponent.prototype, "isLogin", void 0);
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'navbar',
        styleUrls: ["./app/navbar/navbar.css"],
        templateUrl: "./app/navbar/navbar.html",
        providers: [cotizador_component_1.CotizadorComponent, producto_service_1.ProductoService, producto_1.Producto]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map