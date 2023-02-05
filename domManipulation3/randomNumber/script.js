
const randomNumber =  Math.floor(Math.random() * 100) ;
console.log(randomNumber);
// function random(){
//     let numEntered = parseInt(prompt("enter a number:"));
//     console.log(numEntered);
//     compare(numEntered);

// }

// function compare(num){
//     if(num<randomNumber)
//     {
//         alert("your number is less than ours.");
//     }
//     else if(num>randomNumber)
//     {
//         alert("your number is greater than ours.");

//     } 
//     else {
//         alert("your number is equal to ours.");
        
//     } 

// }
let flag = true;
function random()
{

    while(flag)
    {
        compare()
    }

}
function compare()
{
    let num = parseInt(prompt("enter a number:"));
    if(num<randomNumber)
    {
        flag = true;
        alert("your number is less than ours.");
        
    }
    else if(num>randomNumber)
    {
        flag = true;
        alert("your number is greater than ours.");
        
    } 
    else
    {
        flag = false;
        alert("your number is equal to ours.");
        
       
    } 

}



const body = document.body;
const div = document.querySelector("div");
const spanegg = document.querySelector("#hi");
const spantoast = document.querySelector("#bye");
const spanbf = document.querySelector("#bf");

console.log(spanegg.getAttribute("id"));
console.log(spanegg.id);
console.log(spantoast.id);

spanegg.setAttribute("title","YUK");
console.log(spanbf.setAttribute("title","Yummy"))


