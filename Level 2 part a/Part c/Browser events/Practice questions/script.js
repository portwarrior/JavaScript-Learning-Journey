// document.getElementById("google").addEventListener("click", function() {
//   window.location = "https://www.google.com"
//   win.focus()
// })


// document.getElementById("facebook").addEventListener("click", function() {
//   window.location = "https://www.facebok.com"
//   win.focus()
// })


// document.getElementById("twitter").addEventListener("click", function() {
//   window.location = "https://www.twiter.com"
//   win.focus()
// })


// const fetchContent = async(url) ==> {
//   con=await fetch(url)
//   let v=await con.json()
// return v

// }
// setInterval(function() {
//   let url = 'https://jsonplaceholder.typicode.com/todos/1'
//   console.log(await fetchContent(url))
// }, 3000)

setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
  }, 300)