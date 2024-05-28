//Basic Arrow Function

const add = (a, b) => {
    return a + b;
}

console.log(add(3, 5));

//single line Arrow Function
const multiple = (a, b) => a * b;
console.log(multiple(3, 5));

//No parameters
const greet = () => {
    console.log("Hello!");
}
greet();

// single parameter
const square = x => x * x;
console.log(square(8));

// returning object
const createPerson = (name, age) => ({ name: name, age: age })
console.log(createPerson("Jake", 42)); // { name: 'Jake', age: 42 }

// Arrow Function with array methods
const numbers=[1,2,3,4,5];
const squaredNumbers=numbers.map(num=>num*num)
console.log(squaredNumbers);

//Using map with arrow function to double each number in the array
let doubleNumbers=numbers.map(num=>num*2)
console.log(doubleNumbers);

//A function to concatenate strings with variable arguments
function concatenate(...string){
    return string.join("");
}

console.log(concatenate('Hello',' ','World!'));

//Using the spread operartor to concatenate two arrays
let arr1=[1,2,3];
let arr2=[4,5,6];
let mergeArr=[...arr1,...arr2];
console.log(mergeArr);

//An arrow functio to find the max value in an array
let findMax=arr=>Math.max(...arr);
console.log(findMax([10,5,2,45,1]));
// Using a rest parameter (...number)
const sum=(...numSum)=>{
    let total=0;
    for (let number of numSum) {
        total+=number;
    }
    return total;
}

console.log(sum(1,2,3,4,5));

// using the spread operator to concateate the array followed by the mid array
let mid=[3,4];
arr1=[1,2];
arr2=[...arr1,...mid,5,6];
console.log(arr2);

//split into individual characters
let str='Hello World!';
let charArray=[...str];
console.log(charArray); [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!' ]