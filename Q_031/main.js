/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.

*/
var list_of_users = ["Zahida", "Shahida", "Siraj", "Minhaj", "Junaid"];
list_of_users = [];
if (list_of_users.length === 0) {
    console.log("We need to find some users!");
}
