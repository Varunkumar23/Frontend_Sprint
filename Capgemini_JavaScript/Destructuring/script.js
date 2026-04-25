console.log("Introduction to DESTRUCTURING");

// So instead of accessing the elements by index we just extract the elements from array and store them inside the variables.
// So that we can access the elements by the name
// We can give any name for the variables

// let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(marks);

// let [a, b, c] = marks;

// console.log(a);
// console.log(b);
// console.log(c);


//===========================================================================================================================


// Object Destructuring
// In this we will extract the properties of an object with the same name that we have defined in the properties of that particular object


// let person = {
//   name: "Sarabu Varun Kumar",
//   city: "Banglore",
// };

// let { name, city } = person;

// console.log(name);
// console.log(city);

//===========================================================================================================================

// spread and rest (...)

// let week1=[10,20,30]

// let week2=[30,40,50]

// let combine=[... week1,...week2]
// console.log(combine);






// In Object

// let person={
//     name:"Varun",
//     city:"Hyderabad"
// }

// let updatedPerson={
//     ...person,
//     country:"India"
// }

// console.log(updatedPerson);



// rest

// let marks=[10,20,30,40,50,60,70,80,90,100];

// let[a,b,...c]=marks;
// console.log(c);



//In Object

// let user={
//     username:"Varun",
//     role:"admin",
//     salary:80000,

// }

// let{username,...extraInfo}=user;
// console.log(username);
// console.log(extraInfo);



// rest in function

// function add(...c){
//     console.log(c);
//     // console.log(c);
    
//     let res=c.reduce((a,b)=>a+b);
//     console.log(res);
    
    
// }


// add(10,20,30,40,50,60,70,80,90,100);



// so here when we try to combine a number abd array then js will convert the array into the string and it will do that as string concatenation
// let num=1;
// let arr=[1,2,3];
// console.log( typeof (num+arr));



// spread in fucntion

let marks=[10,20,30,40,50,60,70,80,90,100];

function add(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f);
    
}

add(...marks)







