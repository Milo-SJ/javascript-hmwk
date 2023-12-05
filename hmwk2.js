// // 1. Write out a fast arrow function that adds two numbers
const add = (a, b) => {
  return a + b;
};
// 2.  Add default parameters to the above function
const addDefaultParam = (a, b) => {
  a = 0;
  b = 0;
  return a + b;
};
// 3.  Create an object that has a child object, that itself has a child object (3 levels).
const myObj = {
  name: "Milo",
  lastName: "Shanley",
  age: 28,
  gender: "male",
  city: "Bradford",
  previousCity: {
    lastPlaceLived: "Leeds",
    placeOfBirth: { birthCity: "Sheffield" },
  },
};
// 4. Use object destructuring to pull out the parts are level 4.
const { birthday: DOB = "Not known" } = myObj;
console.log(`his birth day is ${DOB}`);
// unsure what level 4 is as i thought it only had 3 levels so added part that is not in there
// 5. Add a default value to the above destructuring

// 6.  Destructure an array
const myArr = ["car", "bike", "bus", "train"];
const [vehicle1, vehicle2, vehicle3, vehicle4] = myArr;
console.log(vehicle1);

// 7.  Create two objects. Add more than two keys/values to both objects.
const objOne = {
  drink: "coke",
  dinner: "steak",
  dessert: "brownies",
};
function objOneFunc(drink, dinner, dessert) {
  return { drink, dinner, dessert };
}
console.log(objOneFunc(objOne));
const objTwo = {
  condiments: "garlic butter",
  side: "chips",
  starter: "calamari",
};
// 8. Copy all the items from the first object into the second object, use the spread operator.
const objThree = { ...objOne, ...objTwo };
console.log(objThree);

// 9.  Send 5 arguments to a function and use the rest operator to group them
const sum = (...args) => args.reduce((a, b) => a + b, 0);
sum(1, 2, 3, 4, 5);
console.log(sum(1, 2, 3, 4, 5));

// 10.  Add a function to one of the objects, use the object method shorthand.
function objOneMethodShort(drink, dinner, dessert) {
  return { drink, dinner, dessert };
}
// I have added this to objOne above

// 11. Scope:
// Create a function, inside the function add a second function, and again add a third function into the second function.
// Create 3 variables.
// Define 3 the variables in the correct place so that:
// The first variable is accessible inside every function.
// The second variable is accessible inside the second and third function only.
// The third variable is accessible inside the third function only.
// Define a 4th variable inside the 3rd function. This variable should be accessible by every function (think bad!)
// Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.
function age() {
  var myAge = 28;
  console.log(myAge);

  function ageNextYear() {
    let nextAge = myAge + 1;

    console.log(nextAge);

    function surName() {
      const familyName = "Shanley";
      otherSurname = "Jackson";
      console.log(familyName);
    }
  }
}
age();
