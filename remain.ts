let mytext = 'abc';
let b = mytext.endsWith('c');
console.log(b);

let mytext1;
mytext1 = 'abc';
let z = (<String>mytext1).endsWith
console.log(b);

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob"); 
