/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement,such as You really like bananas!


*/
var favoriteFruits = ["bananas", "apples", "oranges"]; //Favorite Fruit: Make a array of your favorite fruits
//write a series of independent if statements that check for certain fruits in your array.
if (favoriteFruits.includes("bananas")) {
    console.log("banana is in this array");
}
if (favoriteFruits.includes("apples")) {
    console.log("apples is in this array");
}
if (favoriteFruits.includes("oranges")) {
    console.log("oranges is in this array");
}
//• Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ["graps", "pineapples", "watermelons"];
for (var i = 0; i < favorite_fruits.length; i++) {
    console.log("your favorite fruit is ", favorite_fruits[i]);
}
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,such as You really like bananas!
favorite_fruits.push("apples"); // in array we had only 3 items so adding one more to perform the next task
favorite_fruits.push("bananas"); // in array we had 4 items and now adding one more.
if (favorite_fruits.includes("graps")) {
    console.log("You really like graps!");
}
if (favorite_fruits.includes("pineapples")) {
    console.log("You really like pineapples!");
}
if (favorite_fruits.includes("watermelons")) {
    console.log("You really like watermelons!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
