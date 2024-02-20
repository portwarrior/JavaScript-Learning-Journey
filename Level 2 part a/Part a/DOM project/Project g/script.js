let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
//has attribute checks for existence of an attribute

//first.setAttribute("hidden", "true")

//first.setAttribute("class", "true sachin")

//first.removeAttribute("class")

// console.log(first.attributes)

//we can create customs attributes by using data-*  

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)