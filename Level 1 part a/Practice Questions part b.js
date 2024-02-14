//wap to prit the mark of a studnet in an object using for loop

let marks={
    "Arpit":12,
    "Sandeep":18,
    "Aslam":20,
    "Anzar":16
}

for(let i in marks){
    console.log(i+"'s marks are " +marks[i])
}

// different way to this is 

for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " +Object.keys(marks)[i]+" are " + marks[Object.keys(marks)[i]])
}

//wap to print "Try again" until the user enters the correct number
// let cn=45
// let i
// while(i!=cn){
//     i=prompt("Enter a number")
//     alert("Try Again")
// }
// console.log("You have entered a correct number")

//waf to find the mean of 5 numbers

function mean(a,b,c,d,e){
    let meany= (a+b+c+d+e)/5
    console.log("The mean of the numbers is",meany)
}

mean(1,2,3,4,5)