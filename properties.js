"use strict";
// imoplementation of properties which acts as fileds outside but as methods inside with underscore.
exports.__esModule = true;
var property = (function () {
    function property(_x, _y) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.didi = function () {
            // property in intellisense.
            console.log('X: ' + _this._x, 'Y: ' + _this._y);
        };
    }
    Object.defineProperty(property.prototype, "x", {
        get: function () { return this._x; },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(property.prototype, "y", {
        get: function () { return this._y; },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return property;
}());
exports.property = property;
var propobject = new property(10, 15); // we can only pass values to constructor in order to update the values of fields
//we cannot even use validations by this means so in order to pass required values to
//fields we can use concept of getter and setters like in other languages in type script
//we can bind them, properties also we can use validations in setter functionality.
propobject.didi();
