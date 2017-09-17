export class access_modifiers{ // access modifiers in constructor .

    constructor(private x? : number,private y? : number){}
    didi =()=>{ //  it is not a method as it is an anoymous declaration of method it will be taken as
                // property in intellisense.
                
        console.log('X: ' +this.x,'Y: '+this.y);
    }

   
}

let amobject = new access_modifiers(10,15);
amobject.didi();