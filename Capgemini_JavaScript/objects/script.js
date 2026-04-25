console.log("Introduction to Objects!");


// Object

let person={
    name:"Sarabu Varun Kumar",
    city:"Hyderabad",
    age:22,
    isGraduated:false,
    skills:["Java","Python"],
    greet:function(){
        console.log("Nadhi dhoolpet naak koncham dhoola ekkuva");
        
    }
}

console.log(person);

console.log(person.name);
console.log(person['city']);
console.log(person.skills[0]);
console.log(person['skills'][1]);
person.greet();


person.city="Telangana"
console.log(person);



//seal
Object.seal(person)
// After this we cannot add or delete the properties of the object but we can modify

console.log(Object.isSealed(person));


// freeze
Object.freeze(person)
//After this we cannot add or delete or modify aswell

console.log(Object.isFrozen(person));


//keys 

console.log(Object.keys(person));

//values

console.log(Object.values(person));


///








