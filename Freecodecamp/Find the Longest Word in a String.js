//Find the Longest Word in a String
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
      if (typeof str !== "string") {
          return 0;
      }
      const arrOfWords = str.split(" ");
      let maxStrLength = 0;
     for(let i=0; i<arrOfWords.length; i++){
         if(maxStrLength < arrOfWords[i].length){
             maxStrLength = arrOfWords[i].length;
         }
     }
    return maxStrLength;
}



