// const score = 100
// let y = 113.37839
// let x = new Number(123)
// let money = 10000000

//----JAVASCRIPT NUMBER METHODS----

// console.log(typeof(x.toString()))
// console.log(x.toFixed(2))
// console.log(y.toPrecision(2))
// console.log(money.toLocaleString('en-IN'))


//----JAVASCRIPT MATH METHODS----
//WE AN USE MATH METHODS BY Math.func()

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  // The maximum is inclusive and the minimum is inclusive
}
console.log(getRandomInt(1,6))
