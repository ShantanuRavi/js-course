// const coding = ["js","ruby","java","python","cpp"]
// const value = coding.forEach((item)=>{
//   return item
// })
// console.log(value)


//----FILTER METHOD ----//


const nums = [1,2,3,4,5,6,7,8,9,10]

// const newans = nums.filter((item)=> item > 4) // IMPLECIT RETURN 
// console.log(newans)

const newans = nums.filter((item)=> {
  return item > 9        //EXPLICIT RETURN
})
console.log(newans)



