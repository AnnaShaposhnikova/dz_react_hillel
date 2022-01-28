//Repeat a String Repeat a String

//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number. For the purpose of 
//this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    if (typeof str !== "string") {
        return "";
    }
    num = +num;
    if(isNaN(num) || !Number.isInteger(num)){
        return;
    }
    if(num <=0 ){
        return "";
    }

    let stringWithRepetitions = "";
    for(let i = 1; i<=num; i++){
        stringWithRepetitions = stringWithRepetitions + str;

    }
  return stringWithRepetitions;
}

