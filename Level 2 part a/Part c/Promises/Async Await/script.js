async function example() {
    let delweather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("27 Degs")
      }, 1000)
    })
  
    let sydweather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("37 Degs")
      }, 3000)
    })
  
    // delweather.then(alert)
    // sydweather.then(alert)
  
    console.log("Message before delhi weather")
    let delW = await delweather
    console.log("delhi weather= " + delW)
    console.log("Message before sydney weather")
    let sydW = await sydweather
    console.log("sydney weather= " + sydW)
    return [delW, sydW]
  
  }
  
  const cherry = async () => {
    console.log("Hey I am cherry and I am waiting for the revious function to execute")
  }
  
  const main = async () => {
    console.log("Lets start")
    let a = await example()
    let b = await cherry()
  }
  main()
  //when we run cherry without the async function then it runs parallely with the example function. So in order for them to run one after the other we used async to convert both functions to promises and then called the function in a different function called main with the await keyword before their calling so now they wait for the previous function to execute and only then they run
  
  
  
  
  // async function example() {
  //   console.log(5)
  // }
  //async keyword is added behind the function. If it were not present then the .then function would return an error as .then is only run on promises. so async convert functions to promises.
  // example().then((a) => {
  //   console.log(a)
  // })