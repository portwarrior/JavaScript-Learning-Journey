alert("Welcome to the page fam. Its an honour to have you here")


//we are trying to access the first child of te body
console.log(document.body.firstChild)//first child
console.log(document.body.lastChild)//last child
console.log(document.body.childNodes)//all child notes


//Element.childNodes[0]===Element.firstChild
//Element.childNodes[Element.childNodes.length-1]===Element.lastChild
//Element.hasChildNodes() cheks whether there are are any child nodes