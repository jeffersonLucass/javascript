let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

let msg = (e) => {
    console.log(e);
}


btn1.addEventListener("click",msg );


btn2.addEventListener("click", () =>{
    btn1.removeEventListener("click",msg );
} )
