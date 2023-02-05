
let sen1="I am a programmar good doctor";
let sen2="I am a designer";
let sen3="I am a programmar good nurse";
let bool=true;
let count=0;
let sen11=sen1.split(" ");
let sen22=sen2.split(" ");
let sen33=sen3.split(" ");
for(let i=0;i<sen11.length;i++){
    if(sen11[i]==sen33[i])
    {  bool=true;
        count++;
    }
    else{
        bool=false;
        continue;
    }
    
}
if(bool){
    console.log("The sentences are same. The number of matches are:"+count);
}
else{
    console.log("The sentences are different.The number of matches are:"+count);
}
