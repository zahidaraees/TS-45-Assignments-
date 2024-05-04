/*18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*• Store the locations in a array. Make sure the array is not in alphabetical order. */
var favorite_places = ["Makkah", "Madina", "Tehran", "Turky", "Germany", "Italy", "Netherlands", "China", "US"];
/*• Print your array in its original order.*/
console.log("Orignal List", favorite_places);
/*• Print your array in alphabetical order without modifying the actual list.*/
console.log("Alphabatical Order:  ", __spreadArray([], favorite_places, true).sort());
/*• Show that your array is still in its original order by printing it.*/
console.log("Still Orignal ".concat(favorite_places));
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order:  ", __spreadArray([], favorite_places, true).reverse());
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Array ".concat(favorite_places.reverse()));
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to Orignal ".concat(favorite_places));
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Order has been changed in alphabatical order  ".concat(favorite_places.sort()));
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabatical order ".concat(favorite_places.reverse()));
