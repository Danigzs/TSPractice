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
var order_service_1 = require("./order.service");
var OrdersComponent = (function () {
    function OrdersComponent(_orderService) {
        this._orderService = _orderService;
        this.clientname = "";
        this.clientfolio = "";
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._orderService.getOrders().subscribe(function (data) {
            _this.orders = data;
        });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    core_1.Component({
        selector: 'orders',
        providers: [order_service_1.OrderService],
        styleUrls: ["app/orders/orders.css", "app/styles/table.css"],
        templateUrl: "app/orders/orders.html"
    }),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map