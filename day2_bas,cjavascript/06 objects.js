///simple
let person ={
    name:'John',
    age:30
}

//Nested Object
let car={
    make:'Toyota',
    model:'Corolla',
    year:2020,
    owner:{
        name:'Alice',
        age:25
    }
}
////containing array
let laptop={
    brand:'Apple',
    model:'MacBook Pro',
    specs:['intel corei7', '16GB', '512SD' ]
}

let calculatoe={
    add:function (x,y){
        return x-y
    }

};

//complex object

let university={
    name:'HArdvard Unievevr',
    location:'cambridekşdsfkd',
    established:1636,
    departments:['Comnmösdc', 'psyc', 'H,st' ],
    ranking:{
        world:1,
        national:1
    },
    getInfo :function(){
        return this.name+"is located in"+ this.location +
         ".It was establihed in "+ this.established+ " ."
    }


};

//Acccesible and using object properties
console.log(person.name);
console.log(car.owner.name);
console.log(laptop.specs[2]);
console.log(calculatoe.add(3,5));
console.log(university.getInfo());

///deeleteing
delete person.age;
console.log("age" in person);
////looop,ng though the 
for (let key in car){
    console.log(key + ":"+ car[key]);
    console.log(car.owner.name);
    console.log(car.owner.age);

}


