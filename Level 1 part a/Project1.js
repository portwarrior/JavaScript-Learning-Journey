//wap to gnerate a random number and store it in a variable. The program then takes an input from the user to tell them whether the the number they guessed was correct or not. It also tells the user if the number they gave was greater or lesser than the original number. The number of guesses given to the user is 100 and a score kept track. The program should terminate once the number is guessed. The number should be between 1-100

let min=1
let max=101

let a=Math.floor(Math.random()*(max - min + 1) + min)

for(let i=99;i>=0;i--){
    let j=i
    let guess= parseInt(prompt("We have stored a number in the backend. Your job is to guess the number and you are given only 100 guesses. Enter a number: "))
    if(guess===a){
        alert("You have successfully guessed the number!")
        break
    }
    else if(i===0){
        break
    }
    else{
        if(guess>a){
            alert("Incorrect. Try again. The number you have entered is greater than the correct number. No. of guesses remaining: "+j)
        }
        if(guess<a){
            alert("Incorrect. Try again. The number you have entered is less than the correct number. No. of guesses remaining: "+j)
        }
    }
}
