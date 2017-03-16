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
var core_1 = require('@angular/core');
var material_1 = require('@angular/material');
var DialogInventarioComponent = (function () {
    function DialogInventarioComponent(dialog) {
        this.dialog = dialog;
    }
    DialogInventarioComponent.prototype.open = function () {
        var dialogRef;
        dialogRef = this.dialog.open(DialogInventarioComponent);
        return dialogRef.afterClosed();
    };
    DialogInventarioComponent = __decorate([
        core_1.Component({
            selector: 'modal-inventario-selector',
            templateUrl: "./app/modals/dialog_inventario.html"
        }), 
        __metadata('design:paramtypes', [material_1.MdDialog])
    ], DialogInventarioComponent);
    return DialogInventarioComponent;
}());
exports.DialogInventarioComponent = DialogInventarioComponent;
//# sourceMappingURL=dialog.inventario.component.js.map