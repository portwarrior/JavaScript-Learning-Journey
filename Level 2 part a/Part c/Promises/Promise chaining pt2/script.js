const loadScript = (src) => {
    return new Promise((resolve,reject)=> {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onLoad = () => {
            resolve(1)
        }
        script.onerror = () => { reject(0) }
    }  )
}
  
let p2 = loadScript("http://localhost:3000/index.js")
  p1.then((value) => {
    console.log(value)
  }).catch((error)=>{
    console.log("We are sorry we are having problems loading the script")
  })
