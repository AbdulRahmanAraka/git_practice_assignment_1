
let str="naman";

let str_rev="";

for(let i=str.length-1;i<=str.length;i--){

    if(i==-1){
        break;
    }

    str_rev+=str[i];
}

if(str!==str_rev){
    console.log("string is a palindrome");
}else{    
    console.log("string is not a palindrome");
}