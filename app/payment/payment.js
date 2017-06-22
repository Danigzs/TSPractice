"use strict";
var Payment = (function () {
    function Payment() {
        this.paymentWay = "";
        this.paymentDate = "";
        this.concept = "";
        this.amount = 0;
    }
    Payment.prototype.setPayment = function (paymentWay, paymentDate, concept, amount) {
        this.paymentWay = paymentWay;
        this.paymentDate = paymentDate;
        this.concept = concept;
        this.amount = amount;
    };
    return Payment;
}());
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map