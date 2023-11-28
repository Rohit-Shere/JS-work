const name = 'rohit '
const repcount = 3

// console.log(name+repcount)

console.log(`Hello my name is ${name}and my repo count is ${repcount}`);

const gameName= new String ('rohit')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.toUpperCas())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))


const newString= gameName.substring(0,3)
console.log(newString);

const anotherString= gameName.slice(-1,2)
console.log(anotherString);


const url = "https://hitesh.com/hetesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))
