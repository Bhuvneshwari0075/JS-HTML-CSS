
//VII) Modifying class of HTML elements

const spanHi = document.getElementById("span1");
console.log(spanHi.classList);
//The classList property returns the CSS classnames of an element.


//The classList property is read-only, but you can use the methods
// listed below, to add, toggle or remove CSS classes from the list:
 
spanHi.classList.add("h3");
//add() method of the classList object of any element helps us to 
//add a new class to the element
console.log(spanHi.classList);

//to remove a class from the classList
spanHi.classList.remove("h3");
console.log(spanHi.classList);

//toggle() method removes the particular class if it exits or adds the class if it does not exits

spanHi.classList.toggle("h4");
console.log(spanHi.classList);

//you can pass true/false in toggle method

spanHi.classList.toggle("h4",false);
console.log(spanHi.classList);
//automatically removes if it is false

spanHi.classList.toggle("h5",true);
console.log(spanHi.classList);
//automatically adds if it is true



