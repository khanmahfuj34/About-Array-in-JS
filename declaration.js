// Simple array examples showing common operations
const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Mango", "Banana"];

// Inspect arrays
console.log('Numbers:', numbers);
console.log('Fruits:', fruits);

// Common operations
numbers.push(6); // add to end
numbers.pop(); // remove last

// Iteration
numbers.forEach((n) => console.log('num', n));

// Transform/filter
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
console.log('Doubled:', doubled);
console.log('Evens:', evens);

// Finding and length
const found = fruits.find(f => f === 'Mango');
console.log('Found fruit:', found);
console.log('Numbers length:', numbers.length);

// Run with Node.js: `node declaration.js`