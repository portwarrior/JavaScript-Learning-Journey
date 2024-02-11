//Lets do conditionals

let abb = prompt("Tell your name:");
abb=Number.parseInt(abb);
if(abb>0){
    alert("Find me");
}

else if(abb<9){
    prompt("This is validated")
}
else{
    alert("this is an invald age");
}


console.log("You can",(abb<1? "not drive":"drive"))
