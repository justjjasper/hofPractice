// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      count++;
    }
  });

  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) { return fruit[0] === letter; } );
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  _.filter(desserts, function (cookie) {
    return cookie.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(total, product) {
    return total + Number(product.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var obj = {};

  _.reduce(desserts, function (total, currentDessert) {
    currentDessert = currentDessert.type;
    if (obj[currentDessert] === undefined) {
      obj[currentDessert] = 1;
    } else {
      obj[currentDessert]++;
    }
  }, 0);

  return obj;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(total, currentMovie) {
    if (currentMovie.releaseYear >= 1990 && currentMovie.releaseYear <= 2000) {
      total.push(currentMovie.title);
    }
    return total;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var noMovies = false;

  _.reduce(movies, function(prevVal, currentVal) {
    if (currentVal.runtime < timeLimit) {
      return noMovies = true;
    }
  }, noMovies);

  return noMovies;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function (currentVal) {
    return currentVal.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  _.map(desserts, function(currentObject) {
    if (_.some(currentObject.ingredients, function(word) {
      word === 'flour';
    })) {
      currentObject.glutenFree = false;
    } else {
      currentObject.glutenFree = true;
    }
  });

  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  _.map(groceries, function(currentProduct) {
    price = Number(currentProduct.price.slice(1));

    salePrice = (price - (price * coupon)).toFixed(2);

    currentProduct['salePrice'] = '$' + salePrice;
  });

  return groceries;
};
