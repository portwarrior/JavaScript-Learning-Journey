let p1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    alert("Hey I am not resolved.")
    resolve(1)
  }, 2000)
)

p1.then(() => {
  console.log("This promise is resolved.")
})

p1.then(() => {
  console.log("Horray!")
})


// This is usage of handlers.
// The difference in promise chaining and attaching multiple handlers is that in promise chaining we can see the value of previous promise. we can make use of the values to do something else in the .then.