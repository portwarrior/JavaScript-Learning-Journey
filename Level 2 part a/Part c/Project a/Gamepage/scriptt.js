document.addEventListener("DOMContentLoaded", function() {
    const options=["rock","paper","scissors"]

    const counter = {
        rock:1,
        paper:1,
        scissors:1
    }

    let prevchoice=null

    document.getElementById("Starterr").addEventListener("click",play)

    function play(){
        console.log("The button is clicked")
        const choice=RandomChoice()
        backgroundcolor(choice)
        updateimage(choice)

        if(choice!==prevchoice){
            reset()
            prevchoice=choice
        }
        counter[choice]++
        prevchoice=choice

    }

    function RandomChoice() {
        return options[Math.floor(Math.random() * options.length)]
    }

    function backgroundcolor(choice){
        switch(choice){
            case "rock":
                document.body.style.backgroundColor = '#0E1428';
                document.getElementById("main-header").style.color="white"
                break
            case "paper":
                document.body.style.backgroundColor = '#95190C';
                document.getElementById("main-header").style.color="white"
                break
            case "scissors":
                document.body.style.backgroundColor = '#F18805';
                document.getElementById("main-header").style.color="white"
                break
            default:
                document.body.style.backgroundColor = '#88A0A8';
                break
        }
    }

    function reset(){
        for(const choice in counter )
        counter[choice]=1
    }

    function updateimage(choice){
        const buttontext=capital(choice)
        // console.log(`Updating image to ${choice}.png`);
        document.getElementById("object-text").innerText=buttontext
        // document.getElementById("object-image").src="../Images/${choice}.png"
    }

    function capital(string){
        let x=counter[string]
        return string.charAt(0).toUpperCase() + string.slice(1) + "     X " +x
    }
});