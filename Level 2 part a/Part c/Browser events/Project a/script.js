//browser events

//an event is a signal that something has happened. 

//events can include : user input, mouse, keyboard, form input, document ready, and more.

// let a = document.getElementsByClassName("container")[0]

a.onclick = () => {
    document.getElementsByClassName("container")[0]
    let b=document.getElementsByName("container")[0]
        b.innerHTML = "Hello World!"
    }