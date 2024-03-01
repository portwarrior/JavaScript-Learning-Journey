document.addEventListener("DOMContentLoaded", function() {
    const options=["rock","paper","scissors"]


    document.getElementById("Starterr").addEventListener("click",play)

    function play(){
        console.log("The button is clicked")
        const choice=RandomChoice()
        backgroundcolor(choice)
        updateimage(choice)
    }

    function RandomChoice() {
        return options[Math.floor(Math.random() * options.length)]
    }

    function backgroundcolor(choice){
        switch(choice){
            case "rock":
                document.body.style.background = '#0E1428';
                document.getElementById("main-header").style.color="white"
                break
            case "paper":
                document.body.style.backgroundColor = '#95190C';
                break
            case "scissors":
                document.body.style.backgroundColor = '#F18805';
                break
            default:
                document.body.style.backgroundColor = '#88A0A8';
                break
        }
    }

    function updateimage(choice){
        const buttontext=capital(choice)
        console.log(`Updating image to ${choice}.png`);
        document.getElementById("object-text").innerText=buttontext
        document.getElementById("object-image").src="../Images/${choice}.png"
    }

    function capital(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
});