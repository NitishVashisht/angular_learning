"use strict";
exports.__esModule = true;
var properties_implementation = (function () {
    function properties_implementation(xVALUE, yVALUE) {
        var _this = this;
        this.xVALUE = xVALUE;
        this.yVALUE = yVALUE;
        this.didi = function () {
            // property in intellisense.
            // also we have not defined fields tsc will create them by itself
            console.log('X: ' + _this.xVALUE, 'Y: ' + _this.yVALUE);
            return 0;
        };
    }
    Object.defineProperty(properties_implementation.prototype, "x", {
        get: function () { return this.xVALUE; },
        set: function (value) {
            this.xVALUE = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties_implementation.prototype, "y", {
        get: function () { return this.yVALUE; },
        set: function (value) {
            this.yVALUE = value;
        },
        enumerable: true,
        configurable: true
    });
    return properties_implementation;
}());
exports.properties_implementation = properties_implementation;
var propimp = new properties_implementation(10, 15);
propimp.didi();
console.log(propimp.x, propimp.y);
propimp.x = 50;
propimp.y = 5000;
//let xprop = propimp.x;
// let yprop = propimp.y;
console.log(propimp.x, propimp.y);
