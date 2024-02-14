//arrays are mutable,they are also objects as when we return their type it says objects.
let marks=[10,20,50,undefined,false,null]
let moremarks=[10,12,100,20,10,20,50,undefined,false,null]

console.log(marks)
console.log(marks[0])
console.log(marks[2])
console.log(marks[3]) 
console.log("The length of an array is ",marks.length) 
marks[0]=90 //updating the value
marks[marks.length]=54 //adding a new element
console.log(marks )

let tostringconverter=marks.toString()
console.log(tostringconverter)

let c=marks.join("_") //joins elements with the specified element
console.log(c)

marks.pop()//removes the last item and when assigned to a variable then it returns the popped item
console.log(marks)

marks.push(20) //adds the specified element into the array. it modifies the array.
console.log(marks)


let r =marks.shift()//removes the element from the start of a array
console.log(r)
let s=marks.unshift(10)//adds an elemt to the start of the array
console.log(marks)

delete marks[0] //when we use this operator then the length of the array is not affected
console.log(marks)


let newarray=marks.concat(moremarks)
console.log("The new array is ",newarray) //this does not change the existing array


console.log(newarray.sort()) //this sorts alphabettically 

console.log(marks.reverse())//reverses the array

//splice can e used to add new items to the array

const numbers=[6,1,2,3,6,4,5,45,4,4,4,6,10]

numbers.splice(8,9,4,56,7,2)//first parameter is for starting the splicing effect second parameter is for deleting the amount of numbers after it and the rest others define all the elemnts to be added after .this modifys the source array and return deleted values
console.log(numbers)

let numero=[1,2,3,4,5,6,7,8,9]
numero.slice(3)
console.log("Using slicing",numero) //dosnt modify original array
