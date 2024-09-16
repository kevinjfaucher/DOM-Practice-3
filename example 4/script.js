function selectByClass() {
    const element = document.getElementsByClassName('paragraph1')[0];
    console.log('Selected by getElementsByClassName:', element.textContent);
}

function selectByQuerySelector() {
    const element = document.querySelector('.paragraph2');
    console.log('Selected by querySelector:', element.textContent);
}


/*
1. getElementById

    What it does: This method selects an element by its unique id attribute.
    When to use: Use this when you know that the element has a unique id 
    and you only want to select one specific element.

    Why it matters: It’s fast and simple, but it only works with id, so it's not flexible.

*/

/*
getElementsByClassName

    What it does: This method selects all elements that share the same class.
     It returns a collection of elements (not just one).

    When to use: Use this if you need to select multiple elements by their class
     and plan to work with all of them.

    Why it matters: It’s useful when you need to work with groups of elements, but you get a collection, 
    so you need to loop through the elements to manipulate them individually


*/

/*
3. querySelector

    What it does: This method selects the first element that matches a CSS selector (like id, class, or even more complex selectors).

    When to use: Use this when you want to select any element by using a CSS selector.
     It's flexible because you can select by id, class, tag, or even attribute.

    Why it matters: It's very versatile but slightly slower than getElementById for selecting by id. 
    
    It’s great for selecting elements in more complex structures.

    querySelector allows you to use any valid CSS selector. This includes not only id and class, 
    but also tags, attributes, pseudo-classes, and more 
    complex relationships like parent-child or sibling selectors.

*/

/*
Use getElementById when you have a unique element with a known id. It’s fast and efficient because IDs are unique, and the browser can find them quickly.

Use getElementsByClassName when you need to select multiple elements with the same class. 
It’s great for applying changes to many elements at once, but you have to
loop over the collection since it returns multiple elements.

Use querySelector when you need more flexibility in selecting elements. 

It can select by id, class, or even more complex CSS selectors like [data-attribute="value"]. 
It’s a powerful tool but slightly slower for simple ID selections than getElementById.

*/



/*
// Select all elements that are either <div>, have the class .example, or have the ID #unique
const elements = document.querySelectorAll('div, .example, #unique');


Yes, your approach is spot on! Use the getElement methods when they fit your needs
(for performance and simplicity), and use querySelector/querySelectorAll 
when you need more flexibility or complex selection logic.

This gives you a balance between performance and convenience.
*/

/*
Both NodeList and HTMLCollection hold DOM elements.
HTMLCollection is live, meaning it updates automatically when the DOM changes.
NodeList from querySelectorAll is static, meaning it does not update when the DOM changes.


*/