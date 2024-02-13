// Strings are a collection of characters
let Studnet="Arpit"
console.log(Studnet.length)

let otherstudent='James'
console.log(otherstudent)

//traversing a string nd printing them all in a line
for(let i=0;i<Studnet.length;i++){
    console.log(Studnet[i])
}


//template literals

let studnet1="Jhon"
let studnet2="Tomas"

let sentence = `${studnet1} is a friend of ${studnet2}`
console.log(sentence)

//these use backtics insted of quotes to define a string
//we can insert variables directly in template literal. this is called string interpolation


//escape sequence characters
//so if someone's name has an apostrophe in it then we can make use of the escape squence to tell the js that their name has not ended at the first '. we can do this by inserting a \ before it
//other escape sequence character we have are 
// /n->newline
// /t->tab
// /r->carriage return
let fruit='Bana\'na'
console.log(fruit)

//string manipulation
let fruity="Apple"
console.log(fruit.toUpperCase()) // converts all characters to uppercase
console.log(fruit.toLowerCase()) // converts all characters to lowercase

console.log(fruit.slice(2,4)) // slices the string between the given indices. the first index is inclusive and the last index is exlusive. if the last parameter is kept empty then it will slice from first till the string ends

console.log(fruit.replace("App","perr")) // replaces the first given parmater with the second parameter. in this case it will replace App with perr which would make the end result perrle

let vegetable="Lettuce"
console.log(fruity.concat(" and ",vegetable," any sentence ",fruity)) // joins more than one string together

let anothervegtable="         APPLE  oranges  "
console.log(anothervegtable.trim()) // removes all the spaces from the front and the end of the string


//strings are immutable which essentially means that you cannot uodate the value once you have created it. wheever we run any of the string manipulation methods it returns back a new string rather than updating the original string which prooves thats strings are immutable
