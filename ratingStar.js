/*
Returns a rating system.

HELPER :
1 star -> ★
0 star -> ☆
half star -> ✪
*/

const ratingStar = (number) => {
    let star = "★";
    let halfStar = "✪";
    let emptyStar = "☆";
    let res = "";

    if (typeof number !== 'number') {
        return "Please provide a number.";
    }

    if (number !== 0) {
        for (let i = 1; i <= number; i++) {
            res = res + star;
        }

        if (!Number.isInteger(number)) {
            res = res + halfStar;
        }
    }

    if (number < 5) {

        for (let i = 1; i <= 5 - number; i++) {
            res = res + emptyStar;
        }
    }

    return res;
};

console.log(ratingStar(5)); // Must returns "★★★★★"

console.log(ratingStar(3)); // Must returns "★★★☆☆"

console.log(ratingStar(2.5)); // Must returns "★★✪☆☆"

console.log(ratingStar(4.5)); // Must returns "★★★★✪"

console.log(ratingStar(0)); // Must returns "☆☆☆☆☆"

console.log(ratingStar()); // Must returns "Please provide a number."

console.log(ratingStar("3")); // Must returns "Please provide a number."