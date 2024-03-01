//post request
const todo = async (ttodo) => {
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(ttodo),
    }
  
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
  
  }
  
//   const gettodo = aync(id)=> {
//     let response = fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
//     let r = await response.json()
//     return r
//   }
  
  const mainfunc = async () => {
    let ttodo = {
      title: 'foo',
      body: 'bar',
      userId: 1,
  
    }
    let ttodoe = await todo(ttodo)
    console.log(ttodoe)
  }
  
  
  mainfunc()
  console.log(gettodo(567))
  