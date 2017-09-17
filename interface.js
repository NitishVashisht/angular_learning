var firstinter = function (_a) {
    var x = _a.x, y = _a.y;
    return (x + y);
};
var c = firstinter({
    x: 1,
    y: 2
});
console.log(c);
var randomfunction = function (point) {
    //pass an object//during calling of that function
    //returning that object  as well.
    return (point);
};
var bazooka = randomfunction({
    x: 1,
    y: 2
});
console.log(bazooka); // printing whatever has got strored in variable bazooka which is an object 
//having two properties this is exactly what will get displayed which is
// {x:1,y:2} in case of y:'Nitish' it would have returned {x:1,y:'Nitish'}
//--------------------------------------------------------------------------------------------------
//
//
// there is one problem with it instead of passing x,y property of object in function calling we can pass
//name : 'nitish' and by that means we have no restriction in passing arguments type as it is any
//on the first place, which can cause huge blunders in code to cop up with this we have two techniques
// 2. interfaces
// 1. Inline annotation
//INLINE ANNOTATION (explicitly define the type and type of properties in object)
var inlineannotation = function (point) {
    return (point.x + point.y); //
};
var bazooka1 = inlineannotation({
    x: 1,
    y: 22
});
console.log(bazooka1);
;
var interface = function (point) { return point.x + point.y; };
var gh = interface({
    x: 15,
    y: 25
});
console.log(gh);
