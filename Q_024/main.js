/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/
var idcard = "1234567-2";
var studentName = "Muhammad Hayyan";
var age = 9;
var classRoom = 3;
var suspended = false;
var studentArray = ["Affan", "Hayyan", "Musab", "Sara", "Maham"];
//• Tests for equality and inequality with strings
console.log("studentName=='Muhammad Hayyan' && idcard!=='2345678-1'. My prediction is True");
console.log(studentName == "Muhammad Hayyan" && idcard !== "2345678-1");
//• Tests using the lower case function
console.log("studentName.toLowerCase=='muhammad hayyan' . My prediction is True");
console.log(studentName.toLowerCase() == "muhammad hayyan");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Age is 9 and not 12 = ", age == 9 || age !== 12); // check equality and inequality of numeric
console.log("Age is less than 12, greater than and equal to 9 = ", age < 12 && age >= 9);
console.log("Class Room is less than and equals to 3 = ", classRoom <= 3);
//• Tests using "and" and "or" operators
console.log(studentName.toLowerCase() == "muhammad hayyan" &&
    studentName == "Muhammad Hayyan"); //Tests using "and"  operators
console.log(!suspended || idcard == "1234567-2"); // Test using "or" operator
//• Test whether an item is in an array "Testing an item is include in an array: ", 
console.log("Testing an item is include in an array: ", studentArray.includes("Affan"));
// Test whether an item is not in a array
console.log("Testing an item which is not in an array: ", studentArray.includes("Hayyan"));
