"use strict";
exports.__esModule = true;
var vibes = function (value) { console.log(value.xx, value.yy); return 0; };
//let intobject : my_interface;
//intobject.xx = 10;
//intobject.yy = 20;
//console.log(vibes(intobject));
var intobject = ({
    xx: 10,
    yy: 20
});
vibes(intobject);
//console.log(vibes(intobject)); 
