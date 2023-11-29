function sayHello() {
  return "Hello!";
}

console.log(sayHello());


function greet(name) {
  console.log("hello , " + name + "!");
}

greet("Dylan");



function addOne(n) {
  return n + 1;
}


function addTwoNumbers(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return NaN;
  }
}


/*--- okay solution ---*/
function sumNumbers(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

/*--- better solution (use forEach unless you have to exit loop early) ---*/
// function sumNumbers(nums) {
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }

/*--- best solution (don't worry, this will make sense soon enough) ---*/
// function sumNumbers(nums) {
//   return nums.reduce((sum, num) => sum += num, 0);
// }



/*--- BEST SOLUTION:  Use rest paramater syntax (ES2015) then reduce ---*/
// function addList(...nums) {
//   // nums will be an array containing all arguments 
//   return nums.reduce((sum, num) => sum + num, 0);
// }


/*--- using the arguments keyword (array-like object) and a for loop ---*/
function addList() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

/*--- make arguments a true array then forEach ---*/
// function addList() {
//   let nums = Array.from(arguments);
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }





/*--- Not using the modulus operator ---*/
function computeRemainder(dividend, divisor) {
  if (divisor === 0) return Infinity;
  return dividend - (Math.floor(dividend / divisor) * divisor);
}

/*--- Using the modulus operator ---*/
// function computeRemainder(dividend, divisor) {
//   if (divisor === 0) return Infinity;
//   return dividend % divisor;
// }




function range(start, finish) {
  if (start > finish) return 'First argument must be less than second';
  
  let range = [];
  for (let n = start; n < finish; n++) {
    range.push(n);
  }
  
  return range;
}



// MOST ELEGANT SOLUTION...
// function reverseUpcaseString(str) {
//   // above version using an arrow function
//   return str.split('').reverse().map(c => c.toUpperCase()).join('');
// }

function reverseUpcaseString(str) {
  let results = '';
  for (let i = 0; i < str.length; i++) {
    // can use square brackets to access chars in a string
    // but using the charAt() method is preferred
    results = str.charAt(i).toUpperCase() + results;
  }
  return results;
}

// function reverseUpcaseString(str) {
//   // convert string to array, reverse, map and finally join it
//   return str.split('').reverse().map(function(char) {
//     return char.toUpperCase();
//   }).join('');
// }




/*--- Using substr String method ---*/
// function removeEnds(str) {
//   if (str.length < 3) return '';
//   return str.substr(1, str.length - 2);
// }

/*--- Using for loop ---*/
function removeEnds(str) {
  if (str.length < 3) return '';
  let result= '';
  for (let i = 1; i < str.length - 1; i++) {
    result += str.charAt(i);
  }
  return result;
}




/*--- convert str to array and use reduce with a ternary ---*/
// function charCount(str) {
//   return str.split('').reduce(function(countObj, char) {
//     countObj[char] = countObj[char] ? ++countObj[char] : 1;
//     return countObj;
//   }, {});
// }

/*--- using a for loop ---*/
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    // already seen this char?
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}



/*--- Using the padStart String method ---*/
// function formatWithPadding(int, char, length) {
//   return int.toFixed(0).padStart(length, char);
// }

/*--- Using for while loop ---*/
function formatWithPadding(int, char, length) {
  let result = int.toFixed(0);
  while (result.length < length) {
    result = char + result;
  }
  return result;
}




/*--- Using a for loop ---*/
function isPalindrome(str) {
  str = str.toLowerCase();
  // Remove all spaces
  str = str.replaceAll(' ', '');
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
  }
  return true;
}

/*--- Using array to reverse string ---*/
// function isPalindrome(str) {
//   // regular expression to replace all spaces
//   str = str.toLowerCase().replaceAll(' ', '');
//   return str === str.split('').reverse().join('');
// }





/*--- convert one string to array and reduce ---*/
// function hammingDistance(s1, s2) {
//   if (s1.length !== s2.length) return NaN;
//   s1.split('').reduce(function(count, char, idx) {
//     return char !== s2.charAt(idx) ? count + 1 : count;
//   }, 0);
// }

function hammingDistance(s1, s2) {
  if (s1.length !== s2.length) return NaN;
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) !== s2.charAt(i)) count++;
  }
  return count;
}




function mumble(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    // the ((i || '') && '-') only adds a dash if it's not the first iteration
    result += ((i || '') && '-') + str.charAt(i).repeat(i + 1);
  }
  return result;
}

/*--- convert to array and use reduce (break that one-liner down!) ---*/
// function mumble(str) {
//   return str.split('').reduce((result, c, i) => result + ((i || '') && '-') + c.repeat(i + 1), '');
// }




/*--- using forEach ---*/
function fromPairs(arr) {
  let obj = {};
  arr.forEach(function(kvArr) {
    obj[kvArr[0]] = kvArr[1];
  });
  return obj;
}

/*--- using reduce & arrow function ---*/
// function fromPairs(arr) {
//   return arr.reduce((obj, kvArr) => {
//       obj[kvArr[0]] = kvArr[1];
//       return obj;
//   }, {});
// }




/*--- Using ES2015's rest parameter syntax ---*/
function mergeObjects(target, ...objects) {
  objects.forEach(function(obj) {
    // using ES2015's 'for in' loop
    for(let key in obj) {
      target[key] = obj[key];
    }
  });
  return target;
}

/*--- Using ES2015's Object.assign & spread operator ---*/
// function mergeObjects(target, ...objects) {
//   return Object.assign(target, ...objects);
// }




function findHighestPriced(arr) {
  let highestPrice = 0;
  let resultObj;
  arr.forEach(function(item) {
    if (item.price > highestPrice) {
      highestPrice = item.price;
      resultObj = item;
    }
  });
  return resultObj;
}

console.log(findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }]))

/*--- using the reduce Array method ---*/
// function findHighestPriced(arr) {
//   return arr.reduce((highest, item) => item.price > highest.price ? item : highest);
// }

/*--- using the sort Array method on a Copy to avoid mutating the source array ---*/

// function findHighestPriced(arr) {
//   const copy = [...arr];
//   copy.sort((a, b) => b.price - a.price);
//   return copy[0];
// }


function mapArray(arr, cb) {
  const newArr = [];
  arr.forEach(function(el, idx) {
    newArr.push( cb(el, idx) );
  });
  return newArr;
}




function reduceArray(arr, cb, initAcc) {
  let acc = initAcc;
  arr.forEach(function(el, idx) {
    acc = cb(acc, el, idx);
  });
  return acc;
}




/*--- Using recursion ---*/
function flatten(arr) {
  let flatArr = [];
  arr.forEach(function(elem) {
    // use the Array.isArray static method to test if an array
    if (Array.isArray(elem)) {
      // recursion coming up!
      flatArr = flatArr.concat(flatten(elem));
    } else {
      flatArr.push(elem);
    }
  });
  return flatArr;
}

/*--- Using the fresh Array.prototype.flat method ---*/
// function flatten(arr) {
//   // The 99 is a depth factor
//   return arr.flat(99);
// }

/*--- Using recursion and inline ternary for conciseness ---*/
// function flatten(arr) {
//   let flatArr = [];
//   arr.forEach(function(elem) {
//     flatArr = flatArr.concat(Array.isArray(elem) ? flatten(elem): elem);
//   });
//   return flatArr;
// }

/*--- Use reduce and  recursion for a one-liner ---*/
// function flatten(arr) {
//   return arr.reduce((flatArr, elem) => flatArr.concat(Array.isArray(elem) ? flatten(elem): elem), []);
// }



function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (Number.isInteger(n / i)) return false;
  }
  return true;
}


/*--- most straightforward/logical approach ---*/
function primeFactors(n) {
  let factors = [];
  if (n < 2 || !Number.isInteger(n)) return factors;
  
  // function to help find next prime to divide by...
  function isPrime(n) {
    if (n < 2 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= n / 2; i++) {
      if (Number.isInteger(n / i)) return false;
    }
    return true;
  }
  
  let prime = 2;  // start with smallest prime
  while (!isPrime(n)) {
    if (Number.isInteger(n / prime)) {
      factors.push(prime);
      n = n / prime;
    } else {
      // find next prime
      prime++;
      while (!isPrime(prime)) prime++;
    }
  }
  factors.push(n);
  return factors;
}

/*-- a more efficient algorithm that relies on the fact
     that you don't have to check if the divisor is prime 
     as shown here:
     https://people.revoledu.com/kardi/tutorial/BasicMath/Prime/Algorithm-PrimeFactor.html ---*/
// function primeFactors(n) {
//   let factors = [];
//   if (n < 2 || !Number.isInteger(n)) return factors;
//   let divisor = 2;
//   while (n >= divisor * divisor) {
//     if (Number.isInteger(n / divisor)) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   factors.push(n);
//   return factors;
// }



function intersection(a1, a2) {
  let result = [];
  // create copy of 2nd array to prevent mutating original
  let _a2 = [...a2];
  a1.forEach(val => {
    let idx = _a2.indexOf(val);
    if (idx > -1) result.push(_a2.splice(idx, 1)[0]);
  });
  return result;
}




