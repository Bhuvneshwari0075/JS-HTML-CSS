
const body = document.body;
const p = document.getElementById("myPara");

console.log(p.style.color);
p.style.color = "blue";

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

console.log(spanHi.getAttribute("title"));
//it prints the value of the title.

console.log(spanHi.id);

//setting attribute

spanBye.setAttribute("id","gm");
console.log(spanBye.id);
//spanBye.setAttribute("title","Bye for now");
console.log(spanBye.title);

spanBye.id = "Look";
spanBye.title = "Play";
console.log(spanBye.id);
//spanBye.setAttribute("title","Bye for now");
console.log(spanBye.title);

body.style.backgroundColor = "pink";

//removing attribute
spanBye.removeAttribute("title");
