/*
Returns a string.

Each time there is an @ symbol, it will remove the previous 
character, like a backspace action. If there is two following 
@ symbols, it will remove the 2 previous characters, and so on...
*/

const backspace = (str) => {
    let res = "";

    for (let i = 0; i < str.length; i++) {

        if (str[i] === "@") {
            res = res.slice(0, -1);
        } else {
            res += str[i];
        }
    }

    return res;
};


console.log(backspace("Rer@ayu@@ctt@eupm@@r")); // Must returns "Reacteur"

console.log(backspace("HellFest@@@@oWorld")); // Must returns "HelloWorld"

console.log(backspace("YOO@")); // Must returns "YO"

console.log(backspace("@@@")); // Must returns ""

console.log(backspace("")); // Must returns ""