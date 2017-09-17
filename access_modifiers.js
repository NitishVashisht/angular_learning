"use strict";
exports.__esModule = true;
var access_modifiers = (function () {
    function access_modifiers(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.didi = function () {
            // property in intellisense.
            console.log('X: ' + _this.x, 'Y: ' + _this.y);
        };
    }
    return access_modifiers;
}());
exports.access_modifiers = access_modifiers;
var amobject = new access_modifiers(10, 15);
amobject.didi();
