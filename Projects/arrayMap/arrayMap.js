const nums = [1, 2, 3, 4, 5];
// this is not how you do it
// Array.map(nums, (x) -> x* x)

// this is how you do it
const squared = nums.map(function (x) {
  return x * x;
});

console.log(squared);

// Challenge 2
const names = ["alice", "bob", "charlie", "daniel"];

const captialized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(captialized);

// Challenge 3: add <p> tags around a word
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

const pTagPokemon = pokemon.map((starter) => {
  return `<p>${starter}</p>`;
});
console.log(pTagPokemon);
