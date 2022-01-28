//Reverse a String

//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

function reverseString1(str) {
    if (typeof str !== "string") {     
        return "";
    }
   
    const arrFromStr = str.split("");
    const reversedArray = arrFromStr.reverse();
    str = reversedArray.join("");
    return str;
}

function reverseString2(str) {  
    if (typeof str !== "string") {        
        return "";
    } 

    let reversedStr = "";
    for (let i = str.length-1; i >= 0; i--) {       
         reversedStr += str[i];
    }   
    return reversedStr;
}


