"use strict";

// const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);
// console.log(typeof myArr);
// console.log(Math.max(...myArr), Math.min(...myArr));

// console.log(myArr[0]); // access an element of an array.

const heros = new Array(1, 2, 3, 4, 5);
// console.log(heros);
// console.table(heros);

// heros.push(5);
// heros.push(6);
// heros.pop();
// heros.unshift(100);
// heros.shift();
// console.log(heros.includes(1));
// console.log(heros.indexOf(2));

// console.log(heros);

// const code = heros.join();
// console.log(heros);
// console.log(typeof code);

// slice and splice

console.log("A ", heros);

const myn1 = heros.slice(1, 3);

console.log(myn1);
console.log("B ", heros);

const myn2 = heros.splice(1, 3);
console.log("C ", heros);
console.log(myn2);
