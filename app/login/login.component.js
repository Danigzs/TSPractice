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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var register_service_1 = require("./../register/register.service");
var user_1 = require("./../register/user");
var LoginComponent = (function () {
    function LoginComponent(_registerService, route, router) {
        this._registerService = _registerService;
        this.route = route;
        this.router = router;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user.username = this.username;
        this.user.password = this.password;
        this._registerService.login(this.user).subscribe(function (data) {
            if (data && data.username) {
                alert("Inicio de sesión correcto");
                window.localStorage.setItem("user", JSON.stringify(data));
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                alert("Usuario o contraseña incorrecto");
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        providers: [register_service_1.RegisterService],
        styleUrls: ["./app/login/login.css"],
        templateUrl: "./app/login/login.html"
    }),
    __metadata("design:paramtypes", [register_service_1.RegisterService, router_1.ActivatedRoute,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map