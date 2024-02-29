//for all built in errors the error objet has 2 main properties : name & message but stack as a property also exists




try {
    let a = prompt("Enter your age")
    a = Number.parseInt(a)
    if (a <= 0) {
      throw new Error("This age is invalid")
    }
  
  
  } catch (error) {
    // console.log(error)
    // console.log(error.name)
    console.log(error.message)
    // console.log(error.stack)
  }
  
  console.log("Whats done is done")