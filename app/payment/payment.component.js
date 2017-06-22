"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var payment_service_1 = require("./payment.service");
var PaymentComponent = (function () {
    function PaymentComponent() {
    }
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    core_1.Component({
        selector: 'payment',
        providers: [payment_service_1.PaymentService],
        styleUrls: ["./app/payment/payment.css"],
        templateUrl: "./app/payment/payment.html"
    })
], PaymentComponent);
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=payment.component.js.map