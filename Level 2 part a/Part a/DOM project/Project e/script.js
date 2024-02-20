// <!-- matches,closest and contains methods -->

// <!-- three important methods to search the DOM 

// element.matches(css) ->to check if the element matches to the given css selector

// element.closest(css)->to look for the nearest ancestor tat matches the given css selector. The lement itself is also checked

// elementA.contains(elements)->returns true if elementB is inside elementA(a descendant of alementA) or when elementA==elementB -->


console.log(id1)
console.log(sp1.closest(".Box1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))

