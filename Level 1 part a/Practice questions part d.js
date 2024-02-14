//create an array of numbers and take input from the user to add numbers to this array
let arr = [1,2,3,4,5,6,7,8,9]
let a=prompt("Enter a number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

//keep adding numbers to the array in question 1 until 0 is added to the array
let arra = [1,2,3,4,5,6,7,8,9]
let aa;
do{
    aa=prompt("Enter a number")
    aa=Number.parseInt(aa)
    arra.push(aa)
    
}while(aa!=0){
    console.log(arra)
};


//wap to filter for numbers divisible by 10 from a given array
let Array2=[45,10,2000,203,40,58,6,2,8,55,68,12,385,45,87,95,11]

let b=Array2.filter((value)=>{
    return value%10===0
})

console.log("The filterd array is ",b)

//create an array of square of given numbers
let Array3=[45,10,2000,203,40,58,6,2,8,55,68,12,385,45,87,95,11]

let c=Array3.map((value)=>{
    return value*value
})

console.log("The square of the numbers of the array is  ",c)


//wap to calculate the factorial of n using reduced function
let Array4=[1,2,3]

let d=Array4.reduce((x1,x2)=>{
    return x1*x2
})

console.log("The factorial is array is ",d)