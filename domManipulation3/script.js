
function showDetails(animal){
    let animalType = animal.getAttribute("data-animal-type");
    alert("The "+animal.innerHTML+"is a: "+ animalType);
    const p=document.getElementById("mypara");
    console.log(p.style.color);
    p.style.color="LightSalmon";
}


