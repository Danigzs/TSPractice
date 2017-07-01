"use strict";
var Role = (function () {
    function Role() {
        this.id = -1;
        this.name = "";
    }
    Role.prototype.seRole = function (id, name) {
        this.id = id;
        this.name = name;
    };
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=role.js.map