//Spinal Tap Case

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    if (typeof str !== "string" || !str.length) {
        throw "Enter a string";
    }

    for (let i = 1; i < str.length - 1; i++) {
        if (str[i].match(/[A-Z]/)) {
            str = str.slice(0, i) + " " + str.slice(i);
            i++;
        }
    }
    return str.replace(/[_\-\s]+/g, "-").toLowerCase();
}
