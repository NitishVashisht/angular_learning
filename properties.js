"use strict";
// imoplementation of properties which acts as fileds outside but as methods inside with underscore.
exports.__esModule = true;
var propertee = (function () {
    function propertee(_x, _y) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.didi = function () {
            //taken as property in intellisense. 
            console.log('X: ' + _this._x, 'Y: ' + _this._y);
        };
    }
    propertee.prototype.display = function () {
        console.log('X: ' + this._x, 'Y: ' + this._y);
    };
    Object.defineProperty(propertee.prototype, "x", {
        get: function () { return this._x; } // with the use of get and set x and y still will be shown as properties
        ,
        //BUT THEY WILL ACT AS METHODS THIS IS BEAUTY OF ANGULAR
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertee.prototype, "y", {
        get: function () { return this._y; },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return propertee;
}());
exports.propertee = propertee;
var propobject = new propertee(10, 15); // we can only pass values to constructor in order to update the values of fields
//we cannot even use validations by this means so in order to pass required values to
//fields we can use concept of getter and setters like in other languages in type script
//we can bind them, properties also ,we can use validations in setter functionality.
propobject.didi();
propobject.x = 500; //because set x() is a property so we cannot call them as methods we can assign valuse
console.log(propobject.x);
propobject.didi(); // again to check if value of _x has changed or not.
var mybad = function (point) { return point.xx + point.yy; };
var my_bad = mybad({ xx: 10, yy: 20 });
console.log(my_bad);
