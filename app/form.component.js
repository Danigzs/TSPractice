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
var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form-directive',
            template: "\n  \n<div class=\"modal fade\" id=\"basicModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">   \n\n\n\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Basic Modal</h4>\n            </div>\n\n\n\t\t\t\t\t\t<!--\n\t\t\t\t\tBody\n\t\t\t\t\tMODAL\n\t\t\t\t\t-->\n\n\n\n            <div class=\"modal-body\">\n                <h3>Modal Body</h3>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n    <div class=\"table-responsive\">          \n  <table class=\"table table-bordered\">\n    \n      <tr>\n        <th>#</th>\n        <th>Fecha</th>\n        <th>Cliente</th>\n        <th>Subtotal</th>\n        <th>IVA</th>\n        <th>Descuento</th>\n        <th>Total</th>\n        <th>Tipo de venta</th>     \n      </tr>\n\n      <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n        <td>Not assigned</td>\n      \t<td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n\n      </tr>\n      <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n        <td>Not assigned</td>\n      \t<td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n\n      </tr>\n\n\t\t<tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n        <td>Not assigned</td>\n      \t<td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        </tr>\n\n        <tr class='clickable-row' data-href='#'data-toggle=\"modal\" data-target=\"#basicModal\">\n        <td>Not assigned</td>\n      \t<td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        <td>Not assigned</td>\n        </tr>    \n    \n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map