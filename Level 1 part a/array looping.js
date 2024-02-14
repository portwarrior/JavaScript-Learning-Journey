let num=[0,1,1,2,3,4,5,6,7,8,9]

for(let i=0;i<num.length;i++){
    console.log(num[i])
}

//for each we use this when we have to perform operations on an array
num.forEach((element)=>{
    console.log(element*element)
})

//to convert an object into array run a "from" command on it

let nam="Harry"
let arr=Array.from(nam)
console.log(nam)

//for of and for in

for(let i of num){
    console.log(i)
}

for(let i in num){
    console.log(i)
}//this gives the value sof the keys starting from 0 so if we wanna print keys then we write num[i]
