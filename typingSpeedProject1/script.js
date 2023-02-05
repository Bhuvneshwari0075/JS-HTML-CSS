const setOfWords = ["My name is Khan and I am not a terrorist.",
"Hope you are having fun this is a simple game you can make.",
"If you want the source code then link is given in the description so you can create your own version of this challenge" ];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime,endTime;

btn.addEventListener('click',function(){
    console.log(this);
    if(this.innerText == "Start"){
    typeWords.disabled = false;
    playGame();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
    });


const playGame =() =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}  
const endPlay =() =>{
    let date=new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/ 1000);
    console.log(totalTime);
    let totalStr = typeWords.value;
    let wordCtr = wordCounter(totalStr);
    let speed = Math.round((wordCtr/totalTime)*60);
    console.log(speed);
    // user entered 4 words in 5 seconds
    //how many words will he enter in 60 seconds
    //5 seconds =4 words
    //in 1 second= (4/5)  words
    //60 seconds= (4/5)*60

    let finalMsg = "Your speed is:" +speed+" Words per minute.Also:";
   
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;


}

const compareWords = (str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function(item,index) {
        if(item == words2[index]){
            cnt++;
        }
        
    });
    let errorWords = (words1.length-cnt);
    return (cnt+" Are correct out of"+words1.length+" And the total number of errors are:"+errorWords);
}
const wordCounter = (str) =>{
    let response = str.split(" ").length;
    //console.log(response);
    return response;
}

///My name is Nelesh
//My name is Pulkit Verma