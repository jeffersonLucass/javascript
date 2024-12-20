// var,let const


var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);


let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
    console.log(i);
    
}

console.log(i);

function logName(){
    const name = "Jefferson";
    console.log(name);
}

const name = "Lucas";

console.log(name);
logName();


// arrow function

const sum = function sum(a,b){
    return a + b;
};

const arrowsum = (a,b) => a + b;

console.log(sum(5,5));
console.log(arrowsum(5,5));

const greeting = (name) => {
    if (name){
        return `Ola ${name}`;
    }else{
        return "Ola";
    }
}


console.log(greeting("Jefferson"));
console.log(greeting());


const user = {
    name: "Jefferson",
    sayUserName(){
        var self = this;
        setTimeout(function () {

            console.log(self);
            console.log("Username: " + self.name); 
        },500);
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this);
            console.log("Username: " + this.name); 
        },700);
    }
}

user.sayUserName();

user.sayUserNameArrow();


