const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(12);
    },5000);
});

const p2 = Promise.resolve(13);

const p3 = new Promise((resolve,reject) => {
    resolve(14);
});


Promise.all([p1,p2,p3]).then(res => console.log(res));