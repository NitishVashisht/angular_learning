"use strict";
exports.__esModule = true;
var point_class = (function () {
    function point_class() {
    }
    point_class.prototype.draw = function () {
        console.log('X: ' + this.x, 'Y: ' + this.y);
    };
    point_class.prototype.getDistance = function (point) {
        console.log(this.y - this.x);
        return;
    };
    return point_class;
}());
exports.point_class = point_class;
var pointobject = new point_class();
pointobject.x = 50;
pointobject.y = 100;
pointobject.getDistance(pointobject);
pointobject.draw();
