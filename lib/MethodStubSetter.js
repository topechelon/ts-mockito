"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodStubSetter = void 0;
var CallFunctionMethodStub_1 = require("./stub/CallFunctionMethodStub");
var RejectPromiseMethodStub_1 = require("./stub/RejectPromiseMethodStub");
var ResolvePromiseMethodStub_1 = require("./stub/ResolvePromiseMethodStub");
var ReturnValueMethodStub_1 = require("./stub/ReturnValueMethodStub");
var ThrowErrorMethodStub_1 = require("./stub/ThrowErrorMethodStub");
var MethodStubSetter = (function () {
    function MethodStubSetter(methodToStub) {
        this.methodToStub = methodToStub;
        this.groupIndex = ++MethodStubSetter.globalGroupIndex;
    }
    MethodStubSetter.prototype.thenReturn = function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        this.convertToPropertyIfIsNotAFunction();
        rest.forEach(function (value) {
            _this.methodToStub.methodStubCollection.add(new ReturnValueMethodStub_1.ReturnValueMethodStub(_this.groupIndex, _this.methodToStub.matchers, value));
        });
        return this;
    };
    MethodStubSetter.prototype.thenThrow = function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        this.convertToPropertyIfIsNotAFunction();
        rest.forEach(function (error) {
            _this.methodToStub.methodStubCollection.add(new ThrowErrorMethodStub_1.ThrowErrorMethodStub(_this.groupIndex, _this.methodToStub.matchers, error));
        });
        return this;
    };
    MethodStubSetter.prototype.thenCall = function (func) {
        this.convertToPropertyIfIsNotAFunction();
        this.methodToStub.methodStubCollection.add(new CallFunctionMethodStub_1.CallFunctionMethodStub(this.groupIndex, this.methodToStub.matchers, func));
        return this;
    };
    MethodStubSetter.prototype.thenResolve = function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        this.convertToPropertyIfIsNotAFunction();
        if (rest.length === 0) {
            rest.push(undefined);
        }
        rest.forEach(function (value) {
            _this.methodToStub.methodStubCollection.add(new ResolvePromiseMethodStub_1.ResolvePromiseMethodStub(_this.groupIndex, _this.methodToStub.matchers, value));
        });
        return this;
    };
    MethodStubSetter.prototype.thenReject = function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        this.convertToPropertyIfIsNotAFunction();
        if (rest.length === 0) {
            rest.push(new Error("mocked '".concat(this.methodToStub.name, "' rejected")));
        }
        rest.forEach(function (value) {
            _this.methodToStub.methodStubCollection.add(new RejectPromiseMethodStub_1.RejectPromiseMethodStub(_this.groupIndex, _this.methodToStub.matchers, value));
        });
        return this;
    };
    MethodStubSetter.prototype.thenDoNothing = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        this.convertToPropertyIfIsNotAFunction();
        return this;
    };
    MethodStubSetter.prototype.convertToPropertyIfIsNotAFunction = function () {
        if (!this.methodToStub.methodStubCollection) {
            var info = this.methodToStub("__tsMockitoGetInfo");
            delete info.mocker.mock[info.key];
            delete info.mocker.instance[info.key];
            info.mocker.createPropertyStub(info.key);
            info.mocker.createInstancePropertyDescriptorListener(info.key, {}, undefined);
            info.mocker.createInstanceActionListener(info.key, undefined);
            this.methodToStub = info.mocker.mock[info.key];
        }
    };
    MethodStubSetter.globalGroupIndex = 0;
    return MethodStubSetter;
}());
exports.MethodStubSetter = MethodStubSetter;
//# sourceMappingURL=MethodStubSetter.js.map