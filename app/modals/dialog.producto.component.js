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
var material_1 = require("@angular/material");
var DialogProductoComponent = (function () {
    function DialogProductoComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.hideModal = true;
    }
    DialogProductoComponent.prototype.Details = function () {
        this.hideModal = false;
    };
    DialogProductoComponent.prototype.closeModal = function () {
        this.hideModal = true;
    };
    return DialogProductoComponent;
}());
DialogProductoComponent = __decorate([
    core_1.Component({
        selector: 'modal-producto-selector',
        templateUrl: "./app/modals/dialog_producto.html",
        styleUrls: ["./app/modals/dialog_producto.css"],
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], DialogProductoComponent);
exports.DialogProductoComponent = DialogProductoComponent;
//# sourceMappingURL=dialog.producto.component.js.map