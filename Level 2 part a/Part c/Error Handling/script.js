setTimeout(() => {
    console.log("Hi Anakin")
    try {
      console.log(anakin)
    } catch (error) {
      console.log("Anakin is no longer in there")
    }
  
    //so if you put synchronous code in try then and then only it would work but if u put asynchronus code(like setTimeout)in try then it would not work.
  }, 1000)
  
  setTimeout(() => {
    console.log("May the Force be with you.")
  }, 2000)
  
  setTimeout(() => {
    console.log("Never tell me the odds!")
  }, 3000)