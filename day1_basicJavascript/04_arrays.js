let score=new Array();
let numbers=new Array(10);
let num =new Array(10,2,5,7);

let arr=Array(3);
let color =Array('Red')

let emptyArray=[];
let color1=['red','green','black'];
console.log(score);
console.log(numbers);
console.log(num);
console.log(arr);
console.log(color);
console.log(color1);

let tools=['Jest','Selenum','testcafe','phantomJS','protactor']

console.log(tools);
console.log(tools.toString());
console.log(tools[2]);

const string =tools.toString();
console.log(string);

const join = tools.join;
console.log(join);

const pop=tools.pop()
console.log(tools);
console.log(pop);

const push =tools.push('SlimerJS');
console.log(tools);
console.log(push);

const shift=tools.shift();
console.log(shift);
const unshift = tools.unshift('Selenoid');
console.log(tools);

const sort=tools.sort();
console.log(tools);

const reverse=tools.reverse()
console.log(tools);

console.log('-----------lrngth--------------------');


console.log(tools.length);
console.log('-------------forof loop----------------------');

for (let index=0; index<tools.length;index++){
    const element=tools[index];
    console.log('for loop=>'+ element);
}

console.log('------------fer each loop------------');
tools.forEach(element=>{
    console.log(element);
});
console.log('----------addingmultiple--------');
let multipleData=[5,'brk',false,undefined ]
multipleData.forEach(element=>{
    console.log(element+'-->'+typeof element);
});

console.log("------------------cypress is trending now----------------");

tools.forEach((value)=>{
    if(value=="cypress"){
        console.log(value+"is very good testing tool");
    }else{
        console.log("element is not found")
    }

    
})


 

