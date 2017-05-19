var animals = [
  {name: 'tom', type: 'dog'},
  {name: 'jerry', type: 'dog'},
  {name: 'lisa', type: 'horse'},
  {name: 'hank', type: 'cat'},
  {name: 'fred', type: 'dog'},
  {name: 'jake', type: 'turtle'},
  {name: 'kirk', type: 'cat'},
];

var orders = [
  {amount: 250},
  {amount: 221},
  {amount: 430},
  {amount: 147},
  {amount: 100},
  {amount: 325},
];

/********** HIGHER ORDER FUNCTIONS **********/

/* START FILTER */
/* Filters an array into a filtered array */

/* OK */
var types = [];
for (var i = 0; i < animals.length; i++) {
  if(animals[i].type === 'dog') {
    types.push(animals[i]);
  }
}

/* BETTER */
var types1 = animals.filter(function(x) {
  return x.type === 'dog';
});

/* BEST (ES 6) */
var types2 = animals.filter((x) => x.type === 'dog');

/***** END FILTER *****/

/* START MAP */
/* Transforms properties of an array */

/* OK */
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}

/* BETTER */
var name1 = animals.map(function(x) {
  return x.name;
});

/* BEST (ES 6) */
var names2 = animals.map((x) => x.name);

/***** END MAP *****/

/* START REDUCE */

/* OK */
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}

/* BETTER */
var totalAmount1 = orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0);

/* BEST ES 6 */
var totalAmount2 = orders.reduce((sum, order) => sum + order.amount, 0);

/***** END REDUCE *****/
