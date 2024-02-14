let arr=[1,2,9,3,4,5,6,5]
let a= arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
})
console.log(a)
//map creates a new array. here if we dont return then we get an array of the same size but the second we do retur we get the array 


//filter returns an array with values that passes a test. this also creates a new array
let Array2=[45,58,6,2,8,55,68,12,385,45,87,95,11]
let a2= Array2.filter((value)=>{
    return value>40
})
console.log("Filtered:",a2)


let Array3=[45,58,6,2,8,55,68,12,385,45,87,95,11]
let newarr3=Array3.reduce((h1,h2)=>{
    return h1+h2
})

console.log(newarr3)//reduces an array to a single value
