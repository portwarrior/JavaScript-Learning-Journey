let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Resolved after 2 seconds")
      resolve(56)
    }, 2000)
  })
  
  p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("This prints after 5 seconds")
        resolve("Promise 2")
      }, 3000)
      resolve("Promise 2")
  
    })
    return p2
  }).then((value) => {
    console.log("We are done")
    return 2
  }).then((value) => {
    console.log("We are really done")
  })
  
  
