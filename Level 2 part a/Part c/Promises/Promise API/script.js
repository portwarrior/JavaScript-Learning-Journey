let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 1");
      // reject(new Error("Some error"))
    }, 1000)
  })
  
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 2");
    }, 1000)
  })
  
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 3");
    }, 1000)
  })
  
  p1.catch((value) => {
    console.log("There is an error")
  })
  
  // p1.then((value)=>{
  //   console.log(value)
  // })
  
  // p2.then((value)=>{
  //   console.log(value)
  // })
  
  // p3.then((value)=>{
  //   console.log(value)
  // })
  
  // let promise_all = Promise.all([p1, p2, p3])
  
  // let promise_all = Promise.allSettled([p1, p2, p3]) // when run this gives the status of the promise and the value of the promise
  
  // let promise_all = Promise.race([p1, p2, p3]) //returns the first value which is executed
  
  //let promise_all = Promise.any([p1, p2, p3]) //waist for the promise to be fulfilled and then runs the next promise
  
  // let promise_all = Promise.resolve(6)
  
  let promise_all = Promise.reject(new Error("This is a new error thrown by promise.reject"))
  promise_all.then((value) => {
    console.log(value)
  })