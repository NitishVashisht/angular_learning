/* Example of importing the components from classes from same packages 
using of optional parameters and parameterized constructor */

import {point_class} from './point_class' ;

class Point_Constructor{
    x: number;
    y: number;
    constructor(xlocal?: number,ylocal?:number){  
        //? means optional parameter this means fields associated with
        //the current object we are talking about and that is construct
        //object. the xlocal and ylocal which will be given as arguments will be
        //assigned to field variables
        this.x = xlocal;
        this.y = ylocal;
    }
    draw(){
        console.log('X: ' +this.x,'Y: '+this.y);
    }
    
}

let construct = new Point_Constructor(1,2); //creating object calling constructor and providing params
construct.draw();
// creating object of imported class 
let pointobject = new point_class();
// calling methods of other object as it can be accessable
pointobject.x = 500;
pointobject.y = 1000;
pointobject.didi();pointobject.getDistance(pointobject);

/*
because it will first execute the concepts of imported component or file
50
X: 50 Y: 100
X: 1 Y: 2
X: 500 Y: 1000
500
*/