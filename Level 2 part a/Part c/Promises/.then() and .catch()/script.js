let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
      console.log("I am a promise and i am fulfilled")
      resolve(true)
    }, 5000)
  
  })
  
  let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
      console.log("I am a promise and i am unfulfilled")
      //resolve(true) 
      reject(new Error("I am an error"))
    }, 5000)
  
  })
  
  
  p1.then((value) => {
    console.log(value)
    //right after fulfilling the promise, we can use .then to make the program do something else
  })
  
  // p2.catch((error) => {
  //   console.log("Some error occured in p2")
  // }//catches the error and displays the customized message in the console
  // )
  
  //alternative error catching
  p2.then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error)
  })
  console.log(p1)
  console.log(p2)
  