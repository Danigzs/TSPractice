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
var register_service_1 = require("./register.service");
var role_service_1 = require("./../roles/role.service");
var role_1 = require("./../roles/role");
var user_1 = require("./user");
var RegisterComponent = (function () {
    function RegisterComponent(_rolesService, _registerService) {
        this._rolesService = _rolesService;
        this._registerService = _registerService;
        this.user = new user_1.User;
        this.roleSelected = new role_1.Role;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var _this = this;
        this._rolesService.getRoles().subscribe(function (data) {
            _this.roles = data;
            if (_this.roles.length > 0) {
                _this.roleSelected = _this.roles[0];
            }
        });
    };
    RegisterComponent.prototype.register = function () {
        this.user.role = this.roleSelected;
        this._registerService.register(this.user).subscribe(function (data) {
            console.log(data);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        providers: [role_service_1.RoleService],
        templateUrl: "app/register/register.html",
        styleUrls: ["app/register/register.css"]
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService, register_service_1.RegisterService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map