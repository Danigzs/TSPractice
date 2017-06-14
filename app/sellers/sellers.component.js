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
var seller_service_1 = require("./seller.service");
var seller_1 = require("./seller");
var SellersComponent = (function () {
    function SellersComponent(_sellerService) {
        this._sellerService = _sellerService;
    }
    SellersComponent.prototype.ngOnInit = function () {
        this.seller = new seller_1.Seller();
        this.reloadSellers();
    };
    SellersComponent.prototype.reloadSellers = function () {
        var _this = this;
        this.seller = new seller_1.Seller();
        this._sellerService.getSellers().subscribe(function (data) {
            _this.sellers = data;
        });
    };
    SellersComponent.prototype.agregarSeller = function () {
        var _this = this;
        this._sellerService.addSeller(this.seller).subscribe(function (data) {
            _this.reloadSellers();
        });
    };
    SellersComponent.prototype.updateSeller = function () {
        var _this = this;
        this._sellerService.addSeller(this.seller).subscribe(function (data) {
            _this.reloadSellers();
        });
    };
    return SellersComponent;
}());
SellersComponent = __decorate([
    core_1.Component({
        selector: 'sellers',
        providers: [seller_service_1.SellerService],
        styleUrls: ["./app/sellers/sellers.css"],
        templateUrl: "./app/sellers/sellers.html"
    }),
    __metadata("design:paramtypes", [seller_service_1.SellerService])
], SellersComponent);
exports.SellersComponent = SellersComponent;
//# sourceMappingURL=sellers.component.js.map