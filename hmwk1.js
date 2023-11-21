var aString = "Hello";

var aNum = 2;

var aBoo = true;

var addNums = 2 + 2;

var string1 = "Hello ";
var string2 = "World!";
var concat = string1.concat(string2);
console.log(concat);

var personalDetails = {
  name: "Milo",
  age: 28,
  height: 178,
};

var over18 = personalDetails.age > 18;
// console.log(over18);

var filmsArr = ["V for Vendetta", "Star Wars", "The Lord of The Rings"];

var randomNum = Math.random();
// console.log(randomNum);

var roundRandomNum = Math.round(randomNum);
// console.log(roundRandomNum);

function reverseFilms(films) {
  return films.reverse();
}
reverseFilms(filmsArr);
// console.log(filmsArr);

var myArr = [
  "England",
  "Scotland",
  "Northern Ireland",
  "Wales",
  "France",
  "Italy",
  "Canada",
  "Bosnia",
  "Germany",
  "Brazil",
];
myArr[1] = "Spain";
// console.log(myArr);

myArr.length = 5;
// console.log(myArr);

myArr.pop();
// console.log(myArr);

myArr.push("Finland");
// console.log(myArr);

myArr.shift();
// console.log(myArr);

myArr.unshift("Denmark");
// console.log(myArr);

myArr.splice(1, 1);
// console.log(myArr);

var newArr = myArr.slice(0, 3);
// console.log(newArr);

var allArr = myArr.concat(newArr);
// console.log(allArr);

myArr.reverse();
// console.log(myArr);

// console.log(myArr.join("-"));

myArr.forEach(function (countries, index, array) {
  // console.log(countries, index, array);
});

// console.log(myArr.includes("France"));

var indexOf = myArr.indexOf("Wales");
// console.log(indexOf);

function check(item) {
  return (item) => typeof value === "string";
}
// console.log(myArr.every(check));

function checkLen(item) {
  return (item.length = 4);
}
// console.log(myArr.some(checkLen));

function filterMeth(item) {
  return item.length === 7;
}
var filteredArr = myArr.filter(filterMeth);
// console.log(filteredArr);

function find(item) {
  return item.length === 7;
}
var findArr = myArr.find(find);
// console.log(findArr);

function fIndex(item) {
  return item.includes("Fin");
}
// console.log(myArr.findIndex(fIndex));

function sortLen(firstItem, secondItem) {
  if (firstItem.length > secondItem.length) {
    return 1;
  }

  if (firstItem.length < secondItem.length) {
    return -1;
  }
  return 0;
}
// console.log(myArr.sort(sortLen));

var html = myArr.map(function (item) {
  return "<div><p>" + item + "</p>" + "</div>";
});
// console.log(html);

var countriesVisited = 2;
if (countriesVisited > 10) {
  console.log("That's alot of place's youre very lucky!");
} else if (countriesVisited < 10 && countriesVisited > 1) {
  console.log("Thats still alot of place's");
} else {
  console.log("There's still many places to see at home!");
}

switch (countriesVisited) {
  case 10:
    console.log("That's alot of place's youre very lucky!");
    break;

  case 5:
    console.log("Thats still alot of place's");
    break;

  case 2:
    console.log("That's still really cool!");
    break;

  case 0:
    console.log("There's still many places to see at home!");
    break;

  default:
    break;
}

var colors = [
  "red",
  "blue",
  "green",
  "pink",
  "orange",
  "black",
  "purple",
  "white",
  "grey",
  "yellow",
];
for (var i = 0; i < 10; i++) {
  console.log(i, colors[i], "this is a colour");
}
