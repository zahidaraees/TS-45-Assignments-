/*
41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.


*/
let nameMagician:string[]=['David Copperfield', "Dynamo","Harry Houdini","Derren Brown","Juan Tamariz"]

function show_magicians(ParaMgician:string[])
{
nameMagician.forEach(element => {
    console.log(element)
});


};
show_magicians(nameMagician)