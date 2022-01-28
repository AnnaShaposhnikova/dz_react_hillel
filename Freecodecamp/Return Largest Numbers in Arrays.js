//Return Largest Numbers in Arrays

//Return an array consisting of the largest number from each provided sub-array.
//For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop,
//and access each member with array syntax arr[i].

function largestOfFour(arr) {
    const lagestNumArr = [];
    for (let i = 0; i < arr.length; i++) {
        let lagestNumOfIArr = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (lagestNumOfIArr < arr[i][j]) {
                lagestNumOfIArr = arr[i][j];
            }
        }
        lagestNumArr.push(lagestNumOfIArr);
    }
    return lagestNumArr;
}

function largestOfFour2(arr) {
    const lagestNumArr = [];
    arr.forEach((element) => {
        element = element.sort((a, b) => a - b);
        lagestNumArr.push(element[element.length - 1]);
    });
    return lagestNumArr;
}

function largestOfFour3(arr) {
    return arr.reduce((acc, element) => {
        element = element.sort((a, b) => b - a);
        acc.push(element[0]);
        return acc;
    }, []);
}

