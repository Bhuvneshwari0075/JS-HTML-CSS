
function display(){
let x=document.getElementById("myPara");//this will get our paragraph whose id is "myPara" from the current HTML document
let arr=[11,22,33,44,55];
let i;
let text="";
for(i=0;i<arr.length;i++){
    text+=arr[i]+"<br>";
}

x.innerHTML=text;//content of the paragraph "myPara" will be updated
}

