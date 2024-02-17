alert("Welcome to the page fam. Its an honour to have you here")


//we are trying to access the first child of te body
console.log(document.body.firstChild)//first child
console.log(document.body.lastChild)//last child
console.log(document.body.childNodes)//all child notes


//Element.childNodes[0]===Element.firstChild
//Element.childNodes[Element.childNodes.length-1]===Element.lastChild
//Element.hasChildNodes() cheks whether there are are any child nodes


//properties of dom collection
// They are read only 
// they are live Element.childNodes variable (reference) which will automatically update if of Element is changed 
// they are iterable using for of loop 

//lets look at parents and siblings
//siblings are nodes that are children of the same parent.
//for example: <head> and <body> are siblings. they have same parent which in this case is <html>

//the <body> is the next/right sibling of the <head> 

//difference between parent node and parent element
//parent node returns only when its a node.
//parent element returns only when it is an element

//lets look into how to access ELEMENTS only. 

//The main issue with firstchild,lastchild,childnodes is that if there is formatting between 2 elements/nodes in html code then they stop working properly. So if we have 
//<body>
//<div></div>
//</body>
//then the div is not the first elemnt of the body tag. to do that we have to get the opening div tag on the same line as the body,like:
//<body><div>
//</div>
//</body>