document.addEventListener("DOMContentLoaded", function() {
    const options=["rock","paper","scissors"]


    document.getElementById("Starterr").addEventListener("click",play)

    function play(){
        console.log("The button is clicked")
        const choice=RandomChoice()
        backgroundcolor(choice)
    }

    function RandomChoice() {
        return options[Math.floor(Math.random() * options.length)]
    }

    function backgroundcolor(choice){
        switch(choice){
            case "rock":
                document.body.style.backgroundColor = '#0E1428';
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

});