/*36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.
*/
function make_shirt(size, text_of_message) {
    console.log("This is the ".concat(size, " size of the shirt, enjoy best brand of ").concat(text_of_message, " "));
}
make_shirt('Large', 'Gul Ahmad');
make_shirt('Medium', 'Al Karam');
make_shirt('Small', 'Liberty');
