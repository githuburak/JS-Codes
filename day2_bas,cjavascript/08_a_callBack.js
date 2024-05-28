const printOrder=(order)=>{
    setTimeout(
        ()=>{
            console.log(order);
        },
        (Math.random()*100)
    )
}

const printAll=()=>{
    printOrder("1");
    printOrder("2");
    printOrder("3");
}
printAll()