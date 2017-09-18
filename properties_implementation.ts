export class properties_implementation{ 
    
        constructor(private xVALUE? : number,private yVALUE? : number){}

        didi =(): number =>{ //  it is not a method as it is an anoymous declaration of method it will be taken as
                    // property in intellisense.
                    // also we have not defined fields tsc will create them by itself
                    
            console.log('X: ' +this.xVALUE,'Y: '+this.yVALUE);
            return 0;
        }

       get x(){ return this.xVALUE ;}

       set x(value){
           this.xVALUE = value;
       }

       get y(){ return this.yVALUE ;}

       set y(value){
          this.yVALUE = value;
         }
       
    }
    
    let propimp = new properties_implementation(10,15);
    propimp.didi();
    console.log(propimp.x,propimp.y); // here x is working as property but not as method also direct
                                        //access is not possible to xVALUE but only by getters and 
                                        //setters this functionality can e achieved also if we wanna
                                        //add some validations in set method then we can also add that
                                        //like if value is > 50 then this.yVALUE = value.
    propimp.x = 50;
    propimp.y= 5000;
    //let xprop = propimp.x;
   // let yprop = propimp.y;
    console.log(propimp.x,propimp.y);