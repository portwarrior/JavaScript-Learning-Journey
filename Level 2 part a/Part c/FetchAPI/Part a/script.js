//fetch api--used to get data through network


let a = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")

a.then((response1) => {
  console.log(response1.status)
  console.log(response1.ok)//boolean value
  console.log(response1.headers)
  return response1.json()

}).then((response2) => {
  return console.log(response2)
})

//dont run response.text and response.json at the same time as they would give an error 
//request headers take the request