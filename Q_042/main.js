"use strict";
/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.

*/
let nameMagician = ['David Copperfield', "Dynamo", "Harry Houdini", "Derren Brown", "Juan Tamariz"];
function make_great(ParaMgician) {
    for (let index = 0; index < ParaMgician.length; index++) {
        nameMagician[index] = 'the Great ' + ParaMgician[index];
    }
}
;
make_great(nameMagician);
function show_magicians(ParaMgician) {
    nameMagician.forEach(element => {
        console.log(element);
    });
}
;
show_magicians(nameMagician);
