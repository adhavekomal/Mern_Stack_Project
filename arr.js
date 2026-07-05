// even number
// arr=[1,2,3,4,5];
// arr.forEach((Val,index,arr1)=> {
//     if(Val%2==0)
//     console.log("",Val,index,arr1);
    
// });


// sum of even number
// let arr=[1,2,3,4,5];
// var sum=0;
// arr.forEach((val)=> {
//     if(val%2==0){
//         sum=sum+val;
//     }
    
// })
// console.log(sum);

// let arr=[1,2,3];
// let mar=arr.map((val)=>{
//     return val*3;
// })
// let farr=mar.filter((val)=>{
//     return val%2!=0;
// })
// let mul=farr.reduce((current,next)=>{
//     return current*next;
// })
// console.log(mul);

let arr=[1,2,3];
let mul=arr.map((val)=>{
    return val*3;
})
.filter((val)=>{
    return val%2!=0;
})
.reduce((current,next)=>{
    return current*next;
})
console.log(mul);