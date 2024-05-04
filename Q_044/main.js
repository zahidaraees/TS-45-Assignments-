"use strict";
/*
44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.


*/
function makeSandwiches(items) {
    return `I want a sandwish of : ${items}`;
}
;
let sandwishOrder01 = makeSandwiches(['Egg', 'Chicken', 'Ham']);
console.log(sandwishOrder01);
let sandwishOrder02 = makeSandwiches(['Grilled Cheese.', 'Chicken']);
console.log(sandwishOrder02);
let sandwishOrder03 = makeSandwiches(['Grilled Chicken']);
console.log(sandwishOrder03);
let sandwishOrder04 = makeSandwiches([]);
console.log(sandwishOrder04);
