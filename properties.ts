// imoplementation of properties which acts as fileds outside but as methods inside with underscore.

export interface my_interface{
    xx:number;          //we can use semicolon or comma for this functionality in interface.
    yy:number;
}
export class propertee{ // access modifiers in constructor .
    
            constructor(private _x? : number,private _y? : number){}
            display(){

                console.log('X: ' +this._x,'Y: '+this._y);
            }
            didi =()=>{ //  it is not a method as it is an anoymous declaration of method it will be                        
                        //taken as property in intellisense. 

            console.log('X: ' +this._x,'Y: '+this._y);
            }  
        
        get x(){return this._x ;} // with the use of get and set x and y still will be shown as properties
                                 //BUT THEY WILL ACT AS METHODS THIS IS BEAUTY OF ANGULAR
    
        set x(value){
            this._x = value;
        }
    
        get y(){return this._y ;}
    
        set y(value){
    
            this._y = value;
        }
    }  
    
    let propobject = new propertee(10,15); // we can only pass values to constructor in order to update the values of fields
                                          //we cannot even use validations by this means so in order to pass required values to
                                          //fields we can use concept of getter and setters like in other languages in type script
                                         //we can bind them, properties also ,we can use validations in setter functionality.
    propobject.didi();

    propobject.x = 500; //because set x() is a property so we cannot call them as methods we can assign valuse
    console.log(propobject.x);

    propobject.didi(); // again to check if value of _x has changed or not.

    let mybad=(point:my_interface)=>{return point.xx+point.yy ;}

    let my_bad = mybad({xx:10,yy:20});

    console.log(my_bad);
