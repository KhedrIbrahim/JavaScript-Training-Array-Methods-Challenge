let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
//Task One
my = (my.slice(zero , ++counter).reverse());  // (my.length - --counter) = (++counter) = 4
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
//Task Two
console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

//Task Three
my = `${my[zero][--zero]}${my[++zero][zero]}${my[++zero][zero]}${my[zero][++zero]}${my[--zero][++counter]}${my[zero][++counter]}`;
console.log(my); // "Elzero"

//Task Four
console.log(`${my[--counter]}${my[++counter].toUpperCase()}`); // "rO"