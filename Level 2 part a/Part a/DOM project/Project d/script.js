//Searching the DOM
// Dom navigation propertis are helpful when te elements are close to each other. if they are not close to each other we have some more methods to search the DOM

// document.getElementById-->this method is used to get the element with a given "ID" attribute 

// let span=document.getElementById('span')
// span.style.color="red"


// document.querySelectorAll --> Returns all elements inside an element matching the given CSS s elector 

// document.querySelector -->return the first element for the given css selector. a efficient version of element.querySelectorAll[0]

//document.getElementsByTagName--> returns elements with the given tag name

//document.getElementsByClassName --> returns elements that have the given css class

//document.getElementsByName -->searches elements by the name attribute

// let ctitle=document.getElementsByClassName("card-title")[0]
let ctitle=document.getElementById("#firstelement")
ctitle.style.color="red"