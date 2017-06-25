"use strict";
var RequestMessage = (function () {
    function RequestMessage() {
        this.status = -1;
        this.message = "";
        this.success = false;
    }
    RequestMessage.prototype.setRequestMessage = function (status, message, success) {
        this.status = status;
        this.message = message;
        this.success = success;
    };
    return RequestMessage;
}());
exports.RequestMessage = RequestMessage;
//# sourceMappingURL=requestMessage.js.map