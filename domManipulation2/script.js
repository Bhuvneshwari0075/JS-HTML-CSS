

//III)Modifying the element of HTML

const body = document.body;
const div = document.createElement("div");


div.textContent = "<strong>Hello World</strong>";
div.innerText = "<strong>Hello World</strong>";

//the output of both textContent as well as innerText will be same :-><strong>Hello World</strong>

div.innerHTML = "<strong>Hello World</strong>";
//the out put will be "Hello World" only but "bold"
body.append(div);

//It is used to change HTML of any element from the Javascript.This is a problem also as 
//anyone can pass an HTML as a String to change it(security problems). 
//They can write some malicious code too.

// Another method:-> you can break the Javacript code by hand

const strong = document.createElement("strong");
strong.innerText = " Hello Friends"; //it can be provided by the customer
div.append(strong);
body.append(div);

//IV) Removing the element

const div1 = document.querySelector("#div1");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

//To remove an element use remove() method

spanBye.remove();
//to add this element again use follows
//this element will be added at last.
div1.append(spanBye);

//another method... you can remove the element from its parent
//use removeChild() method and pass the child as the argument
div1.removeChild(spanHi);




