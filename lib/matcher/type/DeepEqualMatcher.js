"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepEqualMatcher = void 0;
var _ = require("lodash");
var Matcher_1 = require("./Matcher");
var DeepEqualMatcher = (function (_super) {
    __extends(DeepEqualMatcher, _super);
    function DeepEqualMatcher(expectedValue) {
        var _this = _super.call(this) || this;
        _this.expectedValue = expectedValue;
        return _this;
    }
    DeepEqualMatcher.prototype.match = function (value) {
        return _.isEqualWith(this.expectedValue, value, function (expected, actual) {
            if (expected instanceof Matcher_1.Matcher) {
                return expected.match(actual);
            }
            return undefined;
        });
    };
    DeepEqualMatcher.prototype.toString = function () {
        if (this.expectedValue instanceof Array) {
            return "deepEqual([".concat(this.expectedValue, "])");
        }
        else {
            return "deepEqual(".concat(this.expectedValue, ")");
        }
    };
    return DeepEqualMatcher;
}(Matcher_1.Matcher));
exports.DeepEqualMatcher = DeepEqualMatcher;
//# sourceMappingURL=DeepEqualMatcher.js.map