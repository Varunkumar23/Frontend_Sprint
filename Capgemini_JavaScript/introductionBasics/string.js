let username="Sarabu Varun Kumar"
console.log(username)

// length
console.log(username.length)

//uppercase
console.log(username.toUpperCase())

//lowercase
console.log(username.toLowerCase())



// replace replaceAll


let locati="India";

let replace=locati.replace('a','z');
console.log(replace)


//replaceAll
let all="ababababababa";
let replceall=all.replaceAll('a','O');
console.log(replceall)



//trim
// let info="Iam Sarabu Varun Kumar "
// console.log(info.length);
// console.log(info.trim().length);


// //trimStart
// let start="   Sarabu Varun Kumar";
// console.log(start);
// console.log(start.trimStart())


// //trimEnd
// let end="Sarabu Varun Kumar   ";
// console.log(end)
// console.log(end.trimEnd())


///substring
// let info="Iam from HYDERABAD"

// console.log(info.substring(1))

// slice---> same as substring but support negative values
// console.log(info.slice(-2,-5))



//split

let info="Iam from GREATER_HYDERABAD";

console.log(info)
console.log(info.split(" "))
console.log(info.split("_"))
console.log(info.split(""))



//concat

let firstName="Sarabu"

let middleName="Varun"

let lastName="Kumar"

let fullName=firstName.concat(middleName).concat(lastName);
let formattedName=firstName.concat(" ").concat(middleName).concat(" ").concat(lastName);


console.log(fullName);
console.log(formattedName);



























