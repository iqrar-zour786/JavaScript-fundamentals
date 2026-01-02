"use strict";

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];
const ac_heros = ["Iqrar", "Ali", "Zour"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros);
// console.log(marvel_heros);
// console.table(marvel_heros);

// console.log(marvel_heros.at(1)); // at IS THE METHOD TO ACCESS THE ELEMENT OF AN ARRAY BY INDEXING OF POSITIVE AND NEGATIVE.
// console.log(marvel_heros.includes("thor"));

// const combined = marvel_heros.concat(dc_heros);
// console.log(combined);

// const all_new = [...marvel_heros, ...ac_heros];
// console.log(all_new);

// const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real = another.flat(Infinity);
// console.log(real);

// console.log(Array.isArray("cyber"));
// console.log(Array.from("cyber"));
// console.log(Array.from({ name: "cyber" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
