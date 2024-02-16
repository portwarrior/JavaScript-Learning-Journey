alert("Hello world")//used to invoke a mini windw
let a=prompt("Enter a number:")//this takes in the value from the user and stores it in the form of a string. if we give it a second value then the promt uses it as placeholder

//write shows a message to the user and waits for the user to press ok or cancel.return true for ok and false for cancel. Here the exact location and look is determined by the browser which is a limitation
let write= confirm("Do you wish to write this value to the page")
if(write=="yes"){
    document.write(a)
}
else{
    document.write("Please click ok")
}