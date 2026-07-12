// function order(shoe)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=> {
//             reject("Shoe not delivered due to heavy rain")
//         },4000)
//     })
// }
// order("nike").then((res)=>{
//     console.log(res);
// }).catch((err1)=>{
//     console.log(err1);
// })
// console.log("watch fifa");

function order(shoe)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Shoe can't be delivered today due to heavy rain")
        },4000)
    })
}
order("nike").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

console.log("Watch FIFA");