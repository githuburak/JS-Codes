const printOrder=(order,callback)=>{
    setTimeout(
        ()=>{
            console.log(order);
            if(callback){
                callback();
            }
        },
        (Math.random()*100)
    )
}

const printAll=()=>{
    printOrder("1",()=>{
        printOrder("2",()=>{
            printOrder("3",()=>{

            });
        });
    }); 
}
printAll()