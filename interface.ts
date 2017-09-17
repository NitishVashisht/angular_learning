let firstinter = ({x,y}) =>{  // explicitly passing object to anonymous fat arrow function having
                                //two properties as x and y of type any and function's returning 
                                //any as well best part is intellisense.

    return (x+y); 
};

let c = firstinter({
    x:1,
    y:2
});

console.log(c);

//----------------------------------------------------------------------------------------------------
//
//


let randomfunction = (point)=>{  //type of argument being passed here is any so we can  even 
                                    //pass an object//during calling of that function
                                   //returning that object  as well.
return (point); 

};

let bazooka = randomfunction({ //calling the function and passing an object with x and y as properties
    x:1,                        // type of bazooka is also any as function is returing type as any
    y:2
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

let inlineannotation = (point:{x:number,y: number})=>{ //point is of custom type now, which is an object

    return (point.x+point.y); //
};

let bazooka1 = inlineannotation({ //calling the function and passing an object with x and y as properties
    x:1,                        // type of bazooka1 is number as function is returing type number 
    y:22
});

console.log(bazooka1);

//-----------------------------------------------------------------------------------------------------

interface Pointinterface{

    x:number,
    y:number
};

let interface=(point:Pointinterface) => {return point.x+point.y;};

let gh = interface({
    x:15,
    y:25
})

console.log(gh);