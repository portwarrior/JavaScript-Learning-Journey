// syncronous programming
// let a = prompt("What is your name");
// let b = prompt("Enter your age");
// let c = prompt("What is your favourite color");

// console.log(a + " is " + b + "'years old and their favourite color is" + c);

// asynchronous programming
console.log("Start");
setTimeout(function() {
  console.log("Hey I am good");
}, 3000);
console.log("End");

//callback functions
//a function passed into another function as an argument which is then invoked inside the outer function to complete an action

function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback(null, src)
  }
  script.onerror = function() {
    console.log("Error loading the SRC " + src)//tells the error in the console
    callback(new Error("Trouble loading src"))//sends error in the alert fucntion
  }
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error)//sends error in the console and stops the error from showing in the alert function. if removed then the alert function shwos undefined as the callback function get a null value when working.
    return
  }
  alert("Hello world " + src)
}

function morning(src) {
  alert("Good Morning" + src)
}

// correct link --> https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.amin.js", hello
)