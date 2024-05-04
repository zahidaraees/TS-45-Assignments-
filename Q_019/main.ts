/*19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.*/


/*I have selected Excerise No 17 completly to check Number of Guests.
*/




let guest_list = ["Sameena","Shahida","Fawad","tayyab","Junaid","Ishaq","Hasan","Nayab"]; //stored names of deceased guest in array as we did in ex 15

console.log("\n Oops! our new dinner table won't arrive in time for the dinner, so We are going to invite only two people for the dinner \n")// Printed first statement of Q 17


/*• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.
*/

let total_rejected: number = guest_list.length - 2 // initializing and assigning value of total_rejecetd elements from the array

// for loop will run total rejected times 
for(let i=0; i < total_rejected; i++)
{
    let guest_reject = guest_list.pop() // pop method perform deletion of last element of the array and then deleted item will be assign to the guest_rejected variable
    console.log(`Sorry dear ${guest_reject}! you are not invited`) // printing of rejection message along with rejected guest name

}



/*• Print a message to each of the two people still on your list, letting them know they’re still invited.*/

let x = 0 // assigning zero value to the x variable 

/* while loop will run until value of x will reach to the 1 index value */

while( x < 2)
{
    console.log(`Dear ${guest_list[x]}! you are still invited.`) // print message of invited guest for two times
    x++ // value of x will be increase by one. 

}

/*• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

for(let y=0; y < 2; y++)
{
    let guest_reject = guest_list.pop() // pop method perform deletion of last element of the array and then deleted item will be assign to the guest_rejected variable
    
}
let remaining_item=guest_list // assiging guest_list value to remaining Item that how many elements left in the array. 
console.log(remaining_item) // it will print remaining item variable. 

if (guest_list=[]){ console.log("Oops! we have empty array list");""} // it will check if guest list array is empty then print the message. 
// End of Excersize 17

// Printing of guest list from the Excersie 17
console.log('Number of Guests:',guest_list.length);