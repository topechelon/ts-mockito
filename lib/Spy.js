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
exports.Spy = void 0;
var _ = require("lodash");
var Mock_1 = require("./Mock");
var RealMethod_1 = require("./spy/RealMethod");
var CallThroughMethodStub_1 = require("./stub/CallThroughMethodStub");
var Spy = (function (_super) {
    __extends(Spy, _super);
    function Spy(instance) {
        var _this = _super.call(this, instance.constructor, instance) || this;
        if (_.isObject(instance)) {
            _this.processProperties(instance);
        }
        return _this;
    }
    Spy.prototype.reset = function () {
        var _this = this;
        _.forEach(this.realMethods, function (method, key) {
            if (method.instance) {
                Object.defineProperty(_this.instance, key, method.descriptor);
            }
            else {
                delete _this.instance[key];
            }
        });
        _super.prototype.reset.call(this);
    };
    Spy.prototype.getEmptyMethodStub = function (key, args) {
        var realMethod = this.realMethods[key];
        if (realMethod) {
            var method = realMethod.descriptor.get || realMethod.descriptor.value;
            return new CallThroughMethodStub_1.CallThroughMethodStub(this.instance, method);
        }
        return _super.prototype.getEmptyMethodStub.call(this, key, args);
    };
    Spy.prototype.createInstancePropertyDescriptorListener = function (key, descriptor, prototype) {
        if (!this.realMethods) {
            this.realMethods = {};
        }
        if (this.realMethods[key]) {
            return;
        }
        this.realMethods[key] = new RealMethod_1.RealMethod(descriptor, prototype === this.instance);
        Object.defineProperty(this.instance, key, {
            get: this.createActionListener(key),
            configurable: true,
        });
    };
    Spy.prototype.createInstanceActionListener = function (key, prototype) {
        if (!this.realMethods) {
            this.realMethods = {};
        }
        if (this.realMethods[key]) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(prototype, key);
        this.realMethods[key] = new RealMethod_1.RealMethod(descriptor, prototype === this.instance);
        this.instance[key] = this.createActionListener(key);
    };
    return Spy;
}(Mock_1.Mocker));
exports.Spy = Spy;
//# sourceMappingURL=Spy.js.map