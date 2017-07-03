"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SearchCode = (function () {
    function SearchCode() {
    }
    SearchCode.prototype.transform = function (value, name, caseInsensitive) {
        if (name !== undefined) {
            // filter users, users which match and return true will be kept, false will be filtered out
            return value.filter(function (producto) {
                if (caseInsensitive) {
                    return (producto.code.toLowerCase().indexOf(name.toLowerCase()) !== -1);
                }
                else {
                    return (producto.code.indexOf(name) !== -1);
                }
            });
        }
        return value;
    };
    return SearchCode;
}());
SearchCode = __decorate([
    core_1.Pipe({
        name: 'searchcode',
        pure: false
    }),
    core_1.Injectable()
], SearchCode);
exports.SearchCode = SearchCode;
//# sourceMappingURL=productcode.filter.js.map