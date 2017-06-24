"use strict";
var Payment = (function () {
    function Payment() {
        this.order_id = -1;
        this.paymentWay = "";
        this.date = new Date;
        this.concept = "";
        this.amount = 0;
    }
    Payment.prototype.setPayment = function (order_id, paymentWay, date, concept, amount) {
        this.order_id = order_id;
        this.paymentWay = paymentWay;
        this.date = date;
        this.concept = concept;
        this.amount = amount;
    };
    return Payment;
}());
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map