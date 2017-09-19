import {point_class} from "./point_class" // importing only one component that is class from module

import {property,my_interface} from "./properties" // to import more than one component from a module

let vibes = (value: my_interface) :number  => {console.log(value.xx , value.yy);return 0 }

//let intobject : my_interface;
//intobject.xx = 10;
//intobject.yy = 20;
//console.log(vibes(intobject));


let intobject :my_interface=({
     xx:10,
     yy:20
})
vibes(intobject);
//console.log(vibes(intobject));