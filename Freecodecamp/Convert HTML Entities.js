//Convert HTML Entities

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    const entities = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&apos;",
    };

    const strnew = str.slice(0, str.length);   
    const arrFromNewStr = strnew.split(" ");
    return arrFromNewStr.reduce((acc, el) => {
        const arrFromEl = el.split("");
        if (arrFromEl.length === 1 && Object.keys(entities).includes(el)) {
            acc += " " + entities[el];
        }
        if (arrFromEl.length > 1) {
            const checkedWord = arrFromEl.reduce((accInner, elLetter) => {
                // debugger
                if (Object.keys(entities).includes(elLetter)) {
                    accInner += entities[elLetter];
                } else {
                    accInner += elLetter;
                }
                return accInner;
            }, "");
            if(arrFromNewStr.length > 1){
               acc += " " + checkedWord;
            }else if(arrFromNewStr.length === 1){
              acc += checkedWord;
            }
           
        }
        

        return acc;
    }, "");
}

convertHTML("Dolce & Gabbana");

console.log(convertHTML("Dolce & Gabbana")); //should return the string Dolce &amp; Gabbana.

//convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

//convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

//convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

console.log(convertHTML("Schindler's List")); //should return the string Schindler&apos;s List.

////convertHTML("<>") should return the string &lt;&gt;.

console.log(convertHTML("abc")) // should return the string abc.
