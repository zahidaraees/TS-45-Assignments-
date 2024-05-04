*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */

let carbrand_names = ["BMW","Chervolet","Honda", "Audi", "Tesla", "Hyundai", "Mitsubishi","Mercedes-Benz"]; //store names of Car Brands in array 
carbrand_names.forEach((bname) => { // Applied forEach Method to select Brand one at a time
    console.log(`“I would like to own a  ${bname} Car. "`); // Print / Display each brandName with same message on each line.
});  