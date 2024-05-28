function add(a,b){
    console.log('result=  '+ (a+b));
}

console.log("-----------calling function-----------");
add(5,6)

console.log("-----------return type function---------");
function multiply(a,b){
    return(a*b)
}
console.log(multiply(7,8))

console.log("------------no overloading js--------------");
add(10,20,30)

console.log("----------function is another datatype---------");
let devide = function(a,b){
    return a/b;
}

console.log(devide(36,6));
let someFunction=devide;
console.log('some function =' + someFunction(25,5));
console.log("--------------pass a function as an argument to other functions-------")

function sum (a,b){
    return(a+b);

}
function avarage(a,b,fn){
    return fn(a,b)/2;

}
let avarageResult=avarage(30,50,sum);
console.log(avarageResult);


avarageResult=avarage(40,5,multiply);
console.log(avarageResult)

avarageResult=avarage(40,5,devide);
console.log(avarageResult)