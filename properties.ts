// imoplementation of properties which acts as fileds outside but as methods inside with underscore.

export class property{ // access modifiers in constructor .

        constructor(private _x? : number,private _y? : number){}
        didi =()=>{ //  it is not a method as it is an anoymous declaration of method it will be taken as
                    // property in intellisense.
                    
            console.log('X: ' +this._x,'Y: '+this._y);
        }  
    
    get x(){return this._x ;}

    set x(value){
        this._x = value;
    }

    get y(){return this._y ;}

    set y(value){

        this._y = value;
    }
}  

let propobject = new property(10,15); // we can only pass values to constructor in order to update the values of fields
                                      //we cannot even use validations by this means so in order to pass required values to
                                      //fields we can use concept of getter and setters like in other languages in type script
                                     //we can bind them, properties also we can use validations in setter functionality.
propobject.didi();