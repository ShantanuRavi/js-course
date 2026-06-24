//----MAP METHOD IN JS----//

// const nums = [1,2,3,4,5,6,7,8,9,10]
// const newnum = nums.map((num)=> num + 10)
// console.log(newnum)


//----CHAINING----//

const nums = [1,2,3,4,5,6,7,8,9,10]

const newnum = nums
               .map((num) => num*10)
               .map((num) => num+1)
               .filter((num) => num % 3 === 0);

console.log(newnum)