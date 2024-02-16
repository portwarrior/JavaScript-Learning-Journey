//wap using prompt function to take input of age as a value from the user and use alert to tell him if he can drive
function driverscheck(x){
    if(x>=18){
        alert("You can drive")
        location.href="https://www.service.nsw.gov.au/guide/getting-a-nsw-driver-licence"
    }
    else if(x<0){
        alert("Please enter a valid age")
    }
    else(
        alert("You cant drive")
    )
}
let a=parseInt(prompt("Whats your age?"))
driverscheck(a)

//in q1 use confirm to ask the user if wants to see the prompt 1 again

let b =true

while(b){
    let a=parseInt(prompt("Whats your age?"))
    driverscheck(a)
    b=confirm("Do you wish to see the prompt again?")
}

//based on user prompt change the color of the background 

let color = prompt("Enter the background color you wish to apply to the background")
document.body.style.background(color)