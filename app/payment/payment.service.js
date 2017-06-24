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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var http_3 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/api/payments'; // URL to web API
        this.urlOrderPayments = 'http://localhost:8000/api/getOrderPayments'; // URL to web API
    }
    PaymentService.prototype.getPayments = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PaymentService.prototype.getOrderPayments = function (order_id) {
        var headers = new http_2.Headers({
            'Content-Type': 'application/json'
        });
        var myParams = new http_3.URLSearchParams();
        myParams.append('id', order_id.toString());
        var options = new http_2.RequestOptions();
        options.headers = headers;
        options.search = new http_3.URLSearchParams();
        options.search.append('id', order_id.toString());
        return this.http.get(this.urlOrderPayments, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PaymentService.prototype.ddPayment = function (payment) {
        var headers = new http_2.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_2.RequestOptions({
            headers: headers
        });
        return this.http.post(this.url, payment, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PaymentService.prototype.extractData = function (res) {
        var data = res.json();
        return data.payments || {};
    };
    PaymentService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return PaymentService;
}());
PaymentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map