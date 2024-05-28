for(let i=0;i<5;i++){
    console.log(i);

}
//console.log(i);//let local scope
for(var j=0;j<5;j++){
    console.log(j);
}

console.log(j);


let i=0;
while(i<5){
    console.log('while loop: '+i);
    i++;
}

let n=0;
do {
    console.log('Do while loop: '+n);
    n++
}while(n<5);