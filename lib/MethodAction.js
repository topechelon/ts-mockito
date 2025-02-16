"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodAction = void 0;
var MethodAction = (function () {
    function MethodAction(methodName, args) {
        this.methodName = methodName;
        this.args = args;
        this.callIndex = ++MethodAction.globalCallIndex;
    }
    MethodAction.prototype.isApplicable = function (methodName, matchers) {
        var _this = this;
        var methodNameMatch = this.methodName === methodName;
        var argumentsCountMatch = this.args.length === matchers.length;
        if (!methodNameMatch || !argumentsCountMatch) {
            return false;
        }
        return matchers.every(function (matcher, index) { return matcher.match(_this.args[index]); });
    };
    MethodAction.prototype.getCallIndex = function () {
        return this.callIndex;
    };
    MethodAction.prototype.hasBeenCalledBefore = function (action) {
        return this.getCallIndex() < action.getCallIndex();
    };
    MethodAction.globalCallIndex = 0;
    return MethodAction;
}());
exports.MethodAction = MethodAction;
//# sourceMappingURL=MethodAction.js.map