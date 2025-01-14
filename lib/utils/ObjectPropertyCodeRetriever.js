"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectPropertyCodeRetriever = void 0;
var ObjectPropertyCodeRetriever = (function () {
    function ObjectPropertyCodeRetriever() {
    }
    ObjectPropertyCodeRetriever.prototype.get = function (object, propertyName) {
        var descriptor = Object.getOwnPropertyDescriptor(object, propertyName);
        if (!descriptor) {
            return "";
        }
        var accessorsCodes = [];
        if (descriptor.get) {
            accessorsCodes.push(descriptor.get.toString());
        }
        if (descriptor.set) {
            accessorsCodes.push(descriptor.set.toString());
        }
        return accessorsCodes.join(" ") || String(object[propertyName]);
    };
    return ObjectPropertyCodeRetriever;
}());
exports.ObjectPropertyCodeRetriever = ObjectPropertyCodeRetriever;
//# sourceMappingURL=ObjectPropertyCodeRetriever.js.map