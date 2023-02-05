
function myFunction(){
const body=document.body;
const list1=document.getElementById("myList");
body.append( " hello World","there ");
//body.appendChild("dfdf");   

//create an "Li" node

const node=document.createElement("li");

//create a text node
const textnode=document.createTextNode("Water");

//append the test node to the li node
node.appendChild(textnode);

//append "li" to the list

list1.appendChild(node);
//creating an elemnt and appending it to the document
const div=document.createElement("div");
div.innerHTML="hello Friends";
body.append(div);

//textContent vs innertext

const div1=document.getElementById("mydiv");
console.log(div1.textContent);
console.log(div1.innerText);


}