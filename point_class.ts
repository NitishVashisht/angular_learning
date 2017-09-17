export class point_class{
    x: number;
    y: number;
    didi =()=>{ //  it is not a method as it is an anoymous declaration of method it will be taken as
                // property in intellisense.
                
        console.log('X: ' +this.x,'Y: '+this.y);
    }

    getDistance(point: point_class ):void{  // we are telling sepcifically that return type is void
       console.log (this.y-this.x);
       return ;
    }
}

let pointobject = new point_class();
pointobject.x = 50;
pointobject.y = 100;
pointobject.getDistance(pointobject);
pointobject.didi();