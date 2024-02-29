//finally clause

//the try catch clause has one more code called finally

// try {
//   let a = 0;
//   console.log(program)
//   console.log("This ran succesfully")
// }
// catch (error) {
//   console.log("This is an error")
//   console.log(p)
// }

// finally {
//   console.log("This runs either way")
// close the File
// exit the loop
// used for cleanups
// }

//if we printed console.log() only without the finally clause it would not run as there is an error present before it. so finally clause is used to run the code irrespective of the error.

const abc = () => {
    try {
      let a = 0;
      // console.log(program)
      console.log("This ran succesfully")
      return
    }
    catch (error) {
      console.log("This is an error")
      console.log(p)
    }
  
    finally {
      console.log("This runs either way")
    }
  }
  
  
  abc()
  console.log("Ending") //finally runs before the return statement