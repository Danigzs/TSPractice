"use strict";
var Role = (function () {
    function Role() {
        this._id = -1;
        this.name = "";
    }
    Role.prototype.seRole = function (_id, name) {
        this._id = _id;
        this.name = name;
    };
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=role.js.map