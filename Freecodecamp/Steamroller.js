/*Steamroller

Flatten a nested array. You must account for varying levels of nesting.*/

 
function steamrollArray(arr) {
 const streamrollArr = [];
 function strArr(arr1){
    arr1.forEach(element => {
    if(typeof element === "object" && Array.isArray(element)){
      strArr(element)
    }else{
     streamrollArr.push(element)
    }    
  })
  
 }
 ;
strArr(arr);
  return streamrollArr;
}

steamrollArray([1, [2], [3, [[4]]]]);


 console.log(steamrollArray([1, [], [3, [[4]]]])); //should return ["a", "b"].

/*steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

*/
