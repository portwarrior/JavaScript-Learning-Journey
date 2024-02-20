//insertion methods


let a = document.getElementsByTagName('div')[0]

//a.innerHtml = a.innerHtml + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
// a.appendChild(div) //puts it in the last of the container

// a.prepend(div) //puts it first within the container

// a.before(div) //puts it before the container

// a.after(div) //puts it outside the container

//a.replaceWith(div) //replaces the container with the div