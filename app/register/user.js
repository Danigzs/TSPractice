"use strict";
var role_1 = require("../roles/role");
var User = (function () {
    function User() {
        this.id = -1;
        this.name = "";
        this.username = "";
        this.password = "";
        this.email = "";
        this.role = new role_1.Role;
    }
    User.prototype.setUser = function (id, name, username, password, email, role) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map