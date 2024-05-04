/*
41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.


*/
var nameMagician = ['David Copperfield', "Dynamo", "Harry Houdini", "Derren Brown", "Juan Tamariz"];
function show_magicians(ParaMgician) {
    nameMagician.forEach(function (element) {
        console.log(element);
    });
}
;
show_magicians(nameMagician);
