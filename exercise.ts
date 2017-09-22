
/*
Background 
Imagine you're working at Facebook and your job is to implement the "Like" functionality. 

When a user clicks the "Like" button below a post, the button is highlighted 
(to indicate that it is selected) and the number of likes is increased. 

you'll need to create a component. 
 as TypeScript class that encapsulates the data for rendering the like button 
 (eg: the number of likes, and whether the button is in the on/off state). 
 It also responds to user actions. So, when the user clicks the "Like" button, 
 the number of likes should be increased and the button should be in the "selected/on" state. 
 If the user clicks the button again,
  the number of likes should be decreased and the button should be in the "unselected" state. 

Spec 
Your focus should be purely on defining a TypeScript class with the right members 
(fields, properties, methods, constructor). 
Allow the consumer of this class to pass the initial number of likes when creating an instance
of this class. Define this class in a separate module and use it in the main module.
Simulate the scenario where the user clicks the like component. 
Display the total number of likes and 
whether the button is in the selected or unselected state on the console. 

*/
export class like_function{
    private _state:number = 0;
    constructor (private _likes?:number){}
    like(){

        if(this._state == 0)
        {
            this._likes+=1;
            console.log('Liked and number of likes are :- '+ this._likes);
            console.log('The switch is in selected state');
            this._state=1;
            return ;
        }

        else {
            this._likes-=1;
            console.log('unLiked and number of likes are :- '+ this._likes);
            console.log('The switch is not in selected state');
            this._state = 0;
        }
        
    }
    /*get state(){
        return this._state;
    }   

    set state(value){

        if(value =0){
            this._state = 1;
            console.log('the button is on now');
        }

        else{
            this._state = 0;
            console.log('the button is off now')
        }

    } */
}

let first_user = new like_function(10);

first_user.like();
first_user.like();
first_user.like();