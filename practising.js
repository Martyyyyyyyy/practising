function checkGmail() {
    let emailvalidation = document.getElementById('email').value;
    if (emailvalidation.length < 12) {
      document.getElementById('site-heading').style.color = "red";
    } else if (emailvalidation.indexOf('@gmail.com') == -1) {
      document.getElementById('site-heading').style.color = "red";
    } else if (emailvalidation.indexOf('.') < emailvalidation.length - 4) {
  
      document.getElementById('site-heading').style.color = "red";
    } else {
      document.getElementById('site-heading').style.color = "green";
    }
  }

function errorHandler(err) {
    if (typeof err === 'error') {
    throw err;
    }
    else {
        console.error('Unexpectedly, no error was passed to error handler. But here is the message:',err);
    }
}
  
var myError = new Error('foo');
myError instanceof Error // true
var myString = "Whatever";
myString instanceof Error // false

let isError = (e) => {
    return e && e.stack && e.message && typeof e.stack === 'string' 
           && typeof e.message === 'string';
}

function isError(obj){
    return Object.prototype.toString.call(obj) === "[object Error]";
}

function isError(obj){
    return Object.prototype.toString.call(obj) === "[object Error]";
}
console.log("Error:", isError(new Error));
console.log("RangeError:", isError(new RangeError));
console.log("SyntaxError:", isError(new SyntaxError));
console.log("Object:", isError({}));
console.log("Array:", isError([]));

try {
    myRoutine();
  } catch (e) {
    if (e instanceof RangeError) {
      // statements to handle this very common expected error
    } else {
      throw e;  // re-throw the error unchanged
    }
  }

var error = new Error("ValidationError");
console.log(error.constructor.name);

function _err(type = false) {
    if(type) {
        throw new TypeError('Oh crap!')
    }
    throw new Error('Oh crap!')
}

try {
    _err(true)
} catch (error) {
    console.log(typeof error.name, error.name, error.name === 'TypeError')
}

try {
    _err()
} catch (error) {
    console.log(typeof error.name, error.name, error.name === 'Error')
}

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

//nested for loops
const bobsFollowers = ['Martin', 'Max', 'John', 'Cambell'];
const tinasFollowers = ['Martin', 'Max', 'Judith'];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
// do while loop
let cupsOfSugarNeeded = 23;
let cupsAdded = 0;
do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);
// break keyword
for (let i = 0; i < rapperArray.length; i++){
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.'){
      break;
    }
  }
  
  console.log("And if you don't know, now you know.");
//higher-order functions 
const addTwo = num => {
  return num + 2;
}
  
const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  if (checkA === checkB) {
    return checkB;
  } else {
    console.log('inconsistent results');
  }
}
  
console.log(checkConsistentOutput(addTwo, 5));
//Iterators
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(index => {
  return index[0] === 's';
});

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
  return word.length < 6;
}));
//more iterators
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
