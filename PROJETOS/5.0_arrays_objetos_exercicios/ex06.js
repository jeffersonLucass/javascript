let nums = [1,2,3,4,5,6,7,8,9,10];
let nums2 = [1,2,3,5];

let verificar = (array)=>{
    if (array.length >= 5) {
        console.log("Muitos Elementos");
    }else{
        console.log("Poucos Elementos");
    }
};

verificar(nums);
verificar(nums2);
