const arr = [1, 2, 3, 4, 5];

const highNumbers =  arr.filter((n) => {
    if(n >= 3){
        return n; 
    }
})

console.log(highNumbers);

const user =
[{name: 'Jefferson', avaliable: true}, 
{name: 'Lucas', avaliable: false},
{name: 'pedro', avaliable: false},
{name: 'gabriel', avaliable: true}];


const avaliableUsers = user.filter((user) => user.avaliable);
const NotavaliableUsers = user.filter((user) => !user.avaliable);
console.log(avaliableUsers);
console.log(NotavaliableUsers);