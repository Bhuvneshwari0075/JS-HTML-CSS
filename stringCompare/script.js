

function myFunction(){
    //document.getElementById("four1").innerText="Nelesh is a boy from africa";
    let para=document.getElementById("four1");
    para.innerHTML="Nelesh is a boy from africa";

    let name1=document.getElementById("name1").value; 
    console.log(name1);
     
   let arrOriginal="Nelesh is a boy in africa";
   let arr1=arrOriginal.split(" ");
   let arr=name1.split(" ");
    console.log(arr,arr1);
    //nelesh is a boy who is a good human being
    //nelesh is a student who ia a alien
    
console.log(arr1.length);

let counter=0;
let wordMatched=0;

while(counter<arr1.length){
    if(arr[counter] == arr1[counter])
    {
      wordMatched++;
      counter++;
      
    }
    else{
        counter++; 
        continue;
        
    }
    
    
}
document.getElementById("three1").innerHTML=wordMatched;
console.log(wordMatched);

document.getElementById("name1").value=" ";
}
