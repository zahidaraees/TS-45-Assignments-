/*22. Intentional Error: If you haven’t received an array index error in one of your programs 
yet, try to make one happen. 
Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.
*/
let devices:string []=["Desktop", "Laptop", "Tablets","Androids","Printers"];//created array with its items
let newInd:number = devices.length; // checked length of array because I will have to push new itm in array
console.log("Intentional Error: ",devices[newInd]); // generated Intentional Error because before pushing itm I am going to print it on total lenght location while array's addres starts from zero
devices.push("Plotters"); // here I have pushed a new item at the end of array 
console.log("Error is corrected before closing and new ITEM is:\n",devices[newInd]); // Push has added one itm at the bottom of array so now printing on console will run without showing any error. 