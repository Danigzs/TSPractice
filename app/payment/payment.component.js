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
var payment_service_1 = require("./payment.service");
var order_1 = require("./../orders/order");
var order_service_1 = require("./../orders/order.service");
var PaymentComponent = (function () {
    function PaymentComponent(_paymentService, _orderService) {
        this._paymentService = _paymentService;
        this._orderService = _orderService;
        this.orders = [];
        this.showModalPayment = false;
        this.selectedOrder = new order_1.Order;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._orderService.getOrders().subscribe(function (data) {
            _this.orders = data;
            _this.selectedOrder = (_this.orders && _this.orders.length > 0) ? _this.orders[0] : null;
            _this.getOrderPayments();
        });
    };
    PaymentComponent.prototype.getOrderPayments = function () {
        var _this = this;
        this._paymentService.getOrderPayments(this.selectedOrder._id).subscribe(function (data) {
            _this.payments = data;
        });
    };
    PaymentComponent.prototype.addPayment = function () {
        this.showModalPayment = true;
    };
    PaymentComponent.prototype.closeModalPaymeny = function () {
        this.showModalPayment = false;
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    core_1.Component({
        selector: 'payment',
        providers: [payment_service_1.PaymentService, order_service_1.OrderService],
        styleUrls: ["./app/payment/payment.css"],
        templateUrl: "./app/payment/payment.html"
    }),
    __metadata("design:paramtypes", [payment_service_1.PaymentService, order_service_1.OrderService])
], PaymentComponent);
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=payment.component.js.map