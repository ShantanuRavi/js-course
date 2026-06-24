//----REDUCE METHOD IN JS----//

// const nums = [1,2,3,4,5]
// const total = nums.reduce(function(acc,curr){
//   console.log(`acc: ${acc} , curr: ${curr}`)  
//   return acc + curr
// },10)
//  console.log(`Total: ${total}`)


//----REDUCE WITH ARROW FUNCTION----//

// const nums = [1,2,3,4,5]

// const total = nums.reduce((acc,curr) => {
//   return acc + curr
// },0);

// console.log(total)


//----REDUCE WITH ARRAY OF OBJECTS----//

const shoppingcart = [
  {
    itemname: "js course",
    price: 2999
  },
  {
    itemname: "py course",
    price: 999
  },
  {
    itemname: "mobile dev course",
    price: 5999
  },
  {
    itemname: "data science course",
    price: 12999
  }
]

const pricetopay = shoppingcart.reduce((acc,item)=> 
  acc + item.price ,0);

console.log(pricetopay)