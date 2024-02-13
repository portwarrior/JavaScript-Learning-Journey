let a =1
let b=2
let c=3

console.log("Average of a and b",(a+b)/2)
console.log("Average of b and c",(b+c)/2)   

//since this is recurring lets make this a function

function anyfunctionname(x,y){
    return (x+y)/2 
}

const differentwayofwritingfunction=(p,q)=>{
    return p+q
}

console.log(differentwayofwritingfunction(9,7))

console.log("This is a function running test",anyfunctionname(a,b) )