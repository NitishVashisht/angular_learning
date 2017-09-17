"use strict";
exports.__esModule = true;
var point_class_1 = require("./point_class");
var Point_Constructor = (function () {
    function Point_Constructor(xlocal, ylocal) {
        //? means optional parameter this means fields associated with
        //the current object we are talking about and that is construct
        //object. the xlocal and ylocal which will be given as arguments will be
        //assigned to field variables
        this.x = xlocal;
        this.y = ylocal;
    }
    Point_Constructor.prototype.draw = function () {
        console.log('X: ' + this.x, 'Y: ' + this.y);
    };
    return Point_Constructor;
}());
var construct = new Point_Constructor(1, 2); //creating object calling constructor and providing params
construct.draw();
// creating object of imported class 
var pointobject = new point_class_1.point_class();
// calling methods of other object as it can be accessable
pointobject.x = 500;
pointobject.y = 1000;
pointobject.draw();
pointobject.getDistance(pointobject);
