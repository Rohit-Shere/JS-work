const marval_heros= ['thor','Ironman','spiderman']
const dc_heros= ['superman', 'batman', 'flash']

// marval_heros.push(dc_heros)

// console.log(marval_heros);

//  const all_heros=marval_heros.concat(dc_heros)
// console.log(all_heros);


// const all_new_heros= [...marval_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array= [1,2,3,[4,5,6],7,[8,9,10]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name:"Rohit"
}))

let score1= 100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3))

