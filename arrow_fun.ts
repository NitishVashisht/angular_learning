//let myadd = (message) => {console.log(message);} //example of arrow function

let myAdd :(x,y) => number = function(x, y) { return x + y; };

let cb = myAdd(20,9); //this is how to call the arrow function and type of cb will be any.

console.log(cb);