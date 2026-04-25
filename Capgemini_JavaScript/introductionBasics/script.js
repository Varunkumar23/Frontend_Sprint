// console.log("Heloooooooooooooooooooooooooooooooooo!")


// To create a variable we have to use any of these 3
// 1. var 
// 2. let 
// 3. const 


var name="Sarabu Varun Kumar";
console.log(name);



// 1. var

// In var variable all these operations are possible

var age; //Only Declaration
age=22; //Only Initialization
console.log(age)
age=20 //Re Initialization
console.log(age)
var age=10 //Re Declaration
console.log(age)


// 2. let

// In let except re  declaration remaining operations are possible

let a; //Only Declaration
a=12217815; //Only Initialization
console.log(a);

a=12216611; //Re Initialization
console.log(a);

// let a=12213762 //Re Declaration is not possible


// 3.const
// In const we cannot declare later
// Reinitialization is not possible
// Redeclaration is not possible 

const salary=108710;
console.log(salary)


// Difference according to scope

{
    var year=2004;
}
console.log(year)

// {
//     let year1=2004;
// }
// console.log(year1)

// {
//     const year2=2004;
// }
// console.log(year2)


// function add(){
//     var ax=10;
// }
// add();
// console.log(ax);



// String

let username="Varun Kumar"
const college="Lovely Professional University"
let details=`Iam ${username} from ${college}`
console.log(details);


const info='Hello Im from "Hyderabad"'     // when we want to highlight anything we can use the quotes which we have not used to wrap that whole sentence
console.log(info)


//boolean

let isMarried=true
console.log(isMarried)
console.log(typeof(isMarried))

console.log(typeof(3.4))


// undefined

let aun =undefined
console.log(aun)
console.log(typeof(aun))


//null
let anu =null
console.log(anu)
console.log(typeof(anu))


//big int

let big=3469127369126397126387912n
console.log(big)
console.log(typeof big)




// Array
let arr=[1,2,3,4,5,6]
console.log(arr)


let num1=10
let num2='10'

console.log(num1==num2) //(only checks value)
console.log(num1===num2) //(checks value and datatype)







