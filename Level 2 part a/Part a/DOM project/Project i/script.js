//insertAdjacentHTML/text
//this method is used to insert HTML. The first parameter is a code word, specifying where to insert. Must be one of the

//"beforebegin" - Insert HTML immediately before element"

//"afterbegin"- Insert HTML into element at the beginning

//"beforeend"- Insert HTML into element at the end

//"afterend"- Insert HTML immediately after element

first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>')

first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>')

first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>')

first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>')

//Node Removal

first.remove()