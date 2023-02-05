

//Modifying elements attributes

//HTML data-attributes
//"data-"

function showDetails(animal){
    let animalType = animal.getAttribute("data-animal-type");
    alert("The "+animal.innerHTML+" is a:"+animalType);
}
//let animal=document.getElementById("owl");
//modifying elements data attributes

const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye =document.querySelector("#bye");

console.log(spanHi.dataset);
//DOMStringMap {test: 'This is a test', value1: 'this is hello'}
// test : "This is a test"
// value1:"this is hello"
//dataset contains all of the custom data attributes attached to the element


//to get a particular data attribute / property
console.log(spanHi.dataset.test);

//To set a new data attribute or property

spanBye.dataset.newName = "See ya";
console.log(spanBye.dataset);
//newName:"See ya"


//HTML element.dataset.....(Data-*)......(DOMStringMap) 
//modifying style attribute of an element

spanBye.style.color="red"; 
spanBye.style.backgroundColor = "pink";
//backgroundColor which is written in camelCase gets converted into hifernated version
//background-color
body.style.backgroundColor = "Green";




