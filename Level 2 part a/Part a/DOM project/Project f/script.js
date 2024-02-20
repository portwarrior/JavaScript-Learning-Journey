//innerHTML,outerHTML,events 

//all the given codes were run in the browser console 


//console.log(document.getElementsByTagName("span")[0]) when we run this in console then we get the element with tag name span and it would say Hey I am span.

//console.dir shoes the element as an object with its properties. eg -> console.dir(document.getElementsByTagName('span')[0])

//tagName only exists for elemnt nodes
//nodeName defined for any node(text,comment,etc)

//running document.body.firstElementChild.nodeName gives -> "SPAN"

//running document.body.firstChild.nodeName gives -> "#text"

//gave the span tag an id
//running first.innerHTML gives Hey i am a span"

//running first.innerHTML ="This is a new tag" sets a new tag like "This is a new tag" 

//to summarize the innerHTML property allows to get the HTML inside the element as a string.

//the outerHTML property contains the full HTML. innerHTML + the element itself.

//innerHTMl is valid for element nodes only. for other node types we can use nodeValue or data.

//running first.outerHTML gives <span id="first">This is a new tag</span>'. This is the get html

//running first.outerHTML = "<div>This is a new div</div>" sets a new div tag

//text content provides access to elements inside the text:only text

