// // nested object
// let rohit={
//     T20:{
//         TotalMatches:125,
//         TotalRuns:8000,
//     },
//     ODI:{
//         TotalMatches:150,
//         TotalRuns:1000, 
//     },
//     Test:{
//         TotalMatches:43,
//         TotalRuns:5000,
//     }
// }
// for(let key in rohit)
//     {

// console.log(key+":");
// for(let k in rohit[key]){
//     console.log(`${k}:${rohit[key][k]}`);
// }
// }

let obj={
    key1:"val 1",
    key2:{
        key3:[1,2,3,4,5],
        key4:[7,11,[44,55],66],
        key5:{
            key6:"val 6",
            key7:"val 7",
        },
            key9:"val 9",     
    },
    key10:[55,66,[98,67]],
}
console.log(obj.key2.key9);
console.log(obj.key2.key4[2][0]);
