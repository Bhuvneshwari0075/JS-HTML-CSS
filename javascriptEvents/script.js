
//Javascript Events

let body = document.body;
let btn = document.querySelector("#mybtn");

btn.addEventListener('click',myfunction);

function myfunction(){
    alert("Welcome to my page");
    body.style.backgroundColor = "red";
}

//shortcut method to do the above task

btn.addEventListener('click',function(){ 
    alert("Welcome to my page");
    body.style.backgroundColor = "red";
});

