//Seek and Destroy

//You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of
// the same value as these arguments.

//Note: You have to use the arguments object.

function destroyer(arr) {
    if (!Array.isArray(arr)) {
        throw "Еnter an array";
    }
    const arrOfArguments = [...arguments].filter(
        (el) => el !== [...arguments][0]
    );

    return arr.reduce((acc, el) => {
        if (!arrOfArguments.includes(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
}

function destroyer2() {
    const [arr, ...arrOfArguments] = [...arguments];
    if (!Array.isArray(arr)) {
        throw "Еnter an array";
    }
    if (!arrOfArguments.length) {
        throw "Enter arguments";
    }

    return arr.filter((el) => {
        return !arrOfArguments.includes(el);
    });
}
