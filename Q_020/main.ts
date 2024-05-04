/*20. Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. 
Write a program that creates a list containing these items.
*/
let langauges:string[]=["Urdu", "Balochi","Sindhi","Punjabi","Pashto","Brahvai","Sarahiki","Hindko","Kashmiri"] 
console.log(`Main Languages of the Pakistan are as follows: /n`)
// Print languages one by one

langauges.forEach(function (value) {
    console.log(value);
});
