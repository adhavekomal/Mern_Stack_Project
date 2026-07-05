function getUser(id)
{
    return new Promise((res,rej)=>{
        if(id<=10)
        {
            res("user found"+id);
        }
        else{
            rej("user not found");
        }
    })
}
console.log(start);

async function fetchData()
{
    try{
        const data=await getUser(30);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}