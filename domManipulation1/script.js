

//DOM Manipulation

//I)Adding elements:

//select the element you wish to add
//here it is the body
//we can append elements to it means we can add 
//elements to the body

const body = document.body;

body.append("Hello World");
//append() method is used to add strings

body.append(" Hi"," Bye");
//we can use append() and 
//appendChild() methods in different cases.

//body.appendChild("Good morning");
//the above code will not add the string
//it will show error in the Inspect element
//appendChild() requires a node not a string
//here we can append <div>,<a>,<span>,etc. elements
//we cannot append many elements at the same time,
//we can only pass one element at a time

//using appendChild() to add a child element to its parent
function myfunction(){
    
    //create a <li> node ..list item
    const node=document.createElement("li");

    //create a text node
    const textnode=document.createTextNode("Water");

    //append the textnode to the "li" node
    node.appendChild(textnode);

    //append the "li" node to its parent which is the list "ul"
    //document.getElementById("myList").appendChild(node);

    //you can do this as follows

    const myList=document.getElementById("myList");
    myList.appendChild(node);


    //if we want to append an element instead of a string using append()

    const div1=document.createElement("div");
    //div1.innerText="This element is created by using append() method";
    //There is one more way to add text inside an element using textContent

    div1.textContent="this text is being added using textContent property";
    body.append(div1);
    //body.append("This element is created by using append() method");
    

    //II)Creating elements using JS

   //use createElement() method
    const para=document.createElement("p");
    //the above code will only create the element not add it to the document
    //so it will not be visible in the page even 
    //if you check in inspect Element also.
 
   //create text to be inserted inside the para
   //you can have multiple text child nodes created to be added to the para
   //so that previous existing text is not overwritten(which happens in 
   //case, if we use textContent,innerHTML,innerText)

   //add some text before appending
    const paraText1=document.createTextNode("This is first content of para");
    const paraText2=document.createTextNode("This is second content of para");
    
    //add these children one by one
    para.appendChild(paraText1);
    para.appendChild(paraText2);

    //add this element to the body
    body.append(para);


    //Difference between innertext,textContent,innerHTML

    const div2=document.getElementById("div2");
    //"innerText" asks the CSS for the styling if the element is
    // visible or not
    console.log(div2.innerText);//Good Morning

    //"textContent":prints the entire content with the 
    //indentation and spacing from the HTML
    console.log(div2.textContent);//Good Morning
                                  //Good Night
    
    //"innerHTML":prints the whole HTML of the element from the DOM                           
    console.log(div2.innerHTML);
    //<span>Good Morning</span>
    //<span style="display:none">Good Night</span>
    
    //If you remove the styling from the <span> .."display:none"..see in console

    //outputs:

    //"innerText"....->Good Morning Good Night
    //"textContent".....->Good Morning
    //                    Good Night
    //"innerHTML"....-><span>Good Morning</span>
    //                   <span>Good Night</span>
}
