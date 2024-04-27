//function with parameters and return and defalut value
function newFunction(num:number=1,num2:number=1):number{ // declearing
    return num+num2; //return value
}

console.log(newFunction()); //call function
let reciveFucntion:number=newFunction(); // accessible in variable
console.log(newFunction); // print function



let a: number = 1; //global scope variable 
if (1 === a) {
    let b: number = 20; //block scope variable
    console.log('let a:number=1; global scope variable accessible in block', a); 
    console.log('let b:number=20; variable in block scope so it will not be accessible outside the block', b);
}
else{
    console.log('error');

}
console.log(a); //global scope variable accessible in block
// console.log(b); variable in block scope so it will not be accessible outside the block


//arrow function 
let playerName=(name:string='guest123')=> {
    console.log(name);
    
}
playerName('sahil00');