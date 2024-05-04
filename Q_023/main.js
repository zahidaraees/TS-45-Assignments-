/*23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


*/
var student = 'Salma';
var classname = 'BS 1st Year';
var semester = 1;
var subject = 'Balochi';
var ismajor = false;
var isminor = true;
// Test true 
console.log("Is student name == 'Salma', I predict True.");
console.log(student == 'Salma');
console.log("Is her class name == 'BS 1st Year', I predict True.");
console.log(classname == 'BS 1st Year');
console.log("Is her Semester < 2, I predict True.");
console.log(semester < 2);
console.log("Is her Subject name == 'Balochi', I predict True.");
console.log(subject == 'Balochi');
console.log("In KU, Balochi is not a Major Subject?  I predict True.");
console.log(!ismajor);
console.log("In KU, Balochi is a Minor Subject?  I predict True.");
console.log(!ismajor);
// Test False
console.log("Is student name !== 'Salma', I predict False.");
console.log(student !== 'Salma');
console.log("Is her class name == 'BS 2nd Year', I predict False.");
console.log(classname == 'BS 2nd Year');
console.log("Is her Semester > 1, I predict False.");
console.log(semester > 1);
console.log("Is her Subject name == 'Urdu' and 'Balochi' , I predict False.");
console.log(subject == 'Urdu' && 'Balochi');
console.log("In KU, Balochi is a Major Subject?  I predict False.");
console.log(ismajor);
console.log("In KU, Balochi  is not a Manior Subject?  I predict False.");
console.log(!isminor);
