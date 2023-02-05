
let namasteBtn=document.querySelector('button');
//let namasteBtn=document.getElementById('myBtn');
namasteBtn.addEventListener('click',inputMsg);


function inputMsg(){
    
    let name1=prompt("Enter name of the student");
    namasteBtn.textContent="Roll no. 1 is:"+name1;
    
}
