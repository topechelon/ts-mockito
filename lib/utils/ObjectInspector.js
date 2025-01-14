"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectInspector = void 0;
var _ = require("lodash");
var ObjectInspector = (function () {
    function ObjectInspector() {
    }
    ObjectInspector.prototype.getObjectPrototypes = function (prototype) {
        var prototypes = [];
        while (_.isObject(prototype) && (prototype !== Object.prototype && prototype !== Function.prototype)) {
            prototypes.push(prototype);
            prototype = Object.getPrototypeOf(prototype);
        }
        return prototypes;
    };
    ObjectInspector.prototype.getObjectOwnPropertyNames = function (object) {
        return _.isObject(object) ? Object.getOwnPropertyNames(object) : [];
    };
    return ObjectInspector;
}());
exports.ObjectInspector = ObjectInspector;
//# sourceMappingURL=ObjectInspector.js.map