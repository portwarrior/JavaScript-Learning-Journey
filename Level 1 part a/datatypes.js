// there are 7 primitive data types in java
// nullnumber
// Symbol
// string
// Boolean
// BigInt
// undefined

let a=null
let b=123
let c=true
let d=BigInt("546") + BigInt(4)
let e="harr"
let f=Symbol("This is a symbol")
let g=undefined

console.log(a,b,c,d,e,f,g)
console.log(typeof d)

// objects in javasc

const item ={
    "har":true,
    "big":false,
    "kid":true
}

console.log(item["kid"])

//practice sets
let newstring="This is a string"
console.log(newstring)

newstring=newstring+42
console.log(newstring)
//updated value +42 happens below
newstring=newstring+"42"
console.log(newstring)

const objee ={
    fruitname: "Apple",
    "banana":true,
    serial:52
}

console.log("This is a constant object", objee)


objee["category"]="size" //adding a new object

objee["fruitname"]="lallu" //updating the value of fruitname

console.log("This is a constant object", objee)

