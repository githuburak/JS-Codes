console.log('Hello!')
let a;
console.log(typeof a)

a=6
console.log(typeof a)
a='Javascript'
console.log(typeof a)
//a=Cypress
console.log(typeof a)
//let a=6;
let b=6,c='Cypress'
console.log(b+c);
console.log(b*c)
console.log(a,b,c)
let str1='Im learning';
let result;
result=str1+a+'and' +c;
console.log(result)

var name="Mike";
var age=35;
var name_Object={firstname:'Jake',lastname:'materse'}
var truth=true;
var skills='Kate';
var x=null;
var name='adam';

var student={
    firstname:'Dave',
    lastname:'materse',
    age:27,
    height:180,
    fullname:function(){
        return this.firstname+"  "+ this.lastname
    }

}

const ageValue=student.age;
console.log(ageValue)
console.log(student.fullname())