//Wherefore art thou

//Make a function that looks through an array of objects (first argument) and returns an array
// of all objects that have matching name and value pairs (second argument). Each name and value
// pair of the source object has to be present in the object from the collection if it is to be
//included in the returned array.

function whatIsInAName(collection, source) {
    if (!Array.isArray(collection)) {
        throw "Collection is not is array";
    }
    collection.forEach((el) => {
        if (
            typeof el !== "object" ||
            (typeof el === "object" && Array.isArray(el))
        ) {
            throw "Collection does nоt consist objects";
        }
    });

    return collection.filter((el) => {
        let arrOfCompare = [];
        for (let i in source) {
            for (let j in el) {
                if (i === j && source[i] === el[j]) {
                    arrOfCompare.push(true);
                } else {
                    arrOfCompare.push(false);
                }
            }
        }

        const numOfTrue = arrOfCompare.reduce((acc, el) => {
            if (el) {
                acc += 1;
            }
            return acc;
        }, 0);

        const numOfPropsInSource = Object.keys(source).length;
        if (numOfTrue === numOfPropsInSource) {
            return el;
        }
    });
}

function whatIsInAName2(collection, source) {
    if (!Array.isArray(collection)) {
        throw "Collection is not is array";
    }
    collection.forEach((el) => {
        if (
            typeof el !== "object" ||
            (typeof el === "object" && Array.isArray(el))
        ) {
            throw "Collection does nоt consist objects";
        }
    });

    const numOfPropsInSource = Object.keys(source).length;

    return collection.filter((el) => {
        let numOfMatch = 0;
        for (let keySrc in source) {
            if (
                Object.keys(el).includes(keySrc) &&
                el[keySrc] === source[keySrc]
            ) {
                numOfMatch += 1;
            }
        }

        if (numOfMatch === numOfPropsInSource) {
            return el;
        }
    });
}
