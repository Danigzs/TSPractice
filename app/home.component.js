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
var dashboard_service_1 = require("./dashboard/dashboard.service");
var HomeComponent = (function () {
    function HomeComponent(_dashboardService) {
        this._dashboardService = _dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dashboardService.getOrders().subscribe(function (data) {
            _this.orders = data;
        });
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        providers: [dashboard_service_1.DashboardService],
        styleUrls: ["app/dashboard.css", "app/styles/table.css"],
        templateUrl: "app/home.component.html"
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map