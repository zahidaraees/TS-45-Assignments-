/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */

let transportation_Mode = ["Honda Car","Chervolet Bike", "Audi Skooti", "Aeroplane of Emirates Airlines ", "Hyundai Bus", "Mitsubishi Car","Mercedes-Benz Jeep"]; //store names of mode of transportation in array 
transportation_Mode.forEach((mname) => { // Applied forEach Method to select mode of transportation one at a time.
    console.log(`“I would like to own a  ${mname} ."`); // Print / Display each mode of transportation with same message on each line.
});  