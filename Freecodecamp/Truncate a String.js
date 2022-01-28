//Truncate a String

//Truncate a string (first argument) if it is longer than the given maximum string length 
//(second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {

    if (typeof str !== "string") {
        return "";
    }
    if(str.length <= num){
       return str; 
    }    
    return str.substring(0, num) + "...";    
}


