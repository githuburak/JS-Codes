console.log(5+5*(-2)-10/5);
let a=5
console.log(++a);
a=9
console.log(a++);
console.log(a);
a+=5;
console.log(5 > 3);
//console.log(a);
let num=2;
let num_str='2';
let number=2;
let number_str='2';

console.log(num==number);
console.log(num_str==number_str);

let month=12;
let dayCount;
switch(month){
    case 1: case 3: case 5: case 7:  case 8: case 10: case 12:
        dayCount=31;
        break
        case 4: case 6: case 9: case 11:  
        dayCount=30;
        break
        case 2: 
        dayCount=28;
        break;
        default:
            dayCount=-1;
            break

}

console.log(dayCount);