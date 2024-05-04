/*

45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly.


*/

function cars_info(
  manufacturer: string,
  modelName: string,
  ...freeOption: { [key: string]: any }[]
): Object {
  const carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...freeOption),
  };
  return carInfo;
}
let c = cars_info(
  "Toyota",
  "GR Yaris",
  { color: "Gray" },
  { features: ["Navigation", "Power Windo"] }
);
console.log(c);
