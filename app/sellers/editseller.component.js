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
var EditSellerComponent = (function () {
    function EditSellerComponent(_sellerService) {
        this._sellerService = _sellerService;
        this.onCloseEdit = new core_1.EventEmitter();
    }
    EditSellerComponent.prototype.close = function () {
        this.onCloseEdit.emit();
    };
    EditSellerComponent.prototype.updateSeller = function () {
        var _this = this;
        this._sellerService.updateSeller(this.seller).subscribe(function (data) {
            if (!data) {
                alert("Ha ocurrido un error");
            }
            if (data) {
                alert("Vendedor actualizado correctamente");
            }
            _this.onCloseEdit.emit();
        });
    };
    return EditSellerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditSellerComponent.prototype, "onCloseEdit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", seller_1.Seller)
], EditSellerComponent.prototype, "seller", void 0);
EditSellerComponent = __decorate([
    core_1.Component({
        selector: 'editseller',
        providers: [seller_service_1.SellerService],
        styleUrls: ["./app/sellers/edit-seller.css"],
        templateUrl: "./app/sellers/edit-seller.html"
    }),
    __metadata("design:paramtypes", [seller_service_1.SellerService])
], EditSellerComponent);
exports.EditSellerComponent = EditSellerComponent;
//# sourceMappingURL=editseller.component.js.map