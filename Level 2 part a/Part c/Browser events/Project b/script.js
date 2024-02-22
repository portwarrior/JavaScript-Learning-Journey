//addEventListner and removeEventListner

//addeventlistner is used to assign multiple handlers to an event

//element.addEventListner(event,handler)

//element.removeEventListner(event,handler)


let x=function(event) {
    console.log(event.target)
    console.log(event.type,event.clientX,event.clientY)  
  }
  
  let y=function(e){
      alert("hello world2")
  }
  
  btn.addEventListener('click',x)
  btn.addEventListener('click',y)
  
  let a=prompt("enter your favourite number")
  
  
  if (a=="2") {
    btn.removeEventListner("click",x)
  }
  
  //when an event happens the browser creates an event object,put details into it and passes it as an argument to the handler
  
  //element.onclick=function(e){}
  