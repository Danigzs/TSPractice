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
var AppComponent = (function () {
    function AppComponent(_elmRef) {
        this._elmRef = _elmRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#grp_option').on('change', function () {
                showLabel();
            });
            // fire on page load
            $('#grp_option').change();
        });
        function showLabel() {
            var selected = $('#grp_option :selected');
            var item = selected.text();
            var group = selected.parent().attr('label');
            $('#target').text('Selected: ' + group + ' - ' + item);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \n    <h1>Testing angular directives components</h1>\n\n    <label id=\"target\" for=\"grp_option\">Selected: </label>\n\t\t<br/>\n\t\t<select id=\"grp_option\">\n\t\t    <optgroup label=\"Group 1\">\n\t\t        <option>Option 1.1</option>\n\t\t    </optgroup>\n\t\t    <optgroup label=\"Group 2\">\n\t\t        <option>Option 2.1</option>\n\t\t        <option>Option 2.2</option>\n\t\t    </optgroup>\n\t\t    <optgroup label=\"Group 3\" enabled>\n\t\t        <option>Option 3.1</option>\n\t\t        <option>Option 3.2</option>\n\t\t        <option>Option 3.3</option>\n\t\t    </optgroup>\n\t\t</select>\n    \n      ",
            styles: ["\n\n  h1{\n  position: fixed;\n  bottom: 0;\n  width: 100%\n\n  }\n    \n   "]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map