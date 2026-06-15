//----1--FUNCTIONS BASICS----//


// function myName(){
//     console.log("R")
//     console.log("a")
//     console.log("v")
//     console.log("i")
// }
// myName()


// function addTwoNumber(num1,num2){
//     return num1+num2
// }
// console.log(addTwoNumber(1,3))
// console.log(addTwoNumber(2,"3"))
// console.log(addTwoNumber(2,"f"))
// console.log(addTwoNumber(2,null))


//----2--ANOTHER METHOD TO DEFINE THE FUNCTIONS----//

// const anotherfun = function(num1,num2)
// {
//     console.log(`${num1} and ${num2} are given numbers`)

// }
// anotherfun(1,3)


// function loginUserMessage(username){
//     if(username === undefined)
//     {
//         return `Please enter the username!`
//     }
//     return `${username} ,is loogged in`
// }
// console.log(loginUserMessage("ani123"))



//----3--FUNCTIONS WITH ARRAY AND OBJECTS----//


// function calculateCartPrice(...num1) //  ...num1 returns array
// {
//     return num1
// }
// console.log(calculateCartPrice(12,23,34))

// function calculateCartPrice(val1,val2,...num1)
// {
//     return num1
// }
// console.log(calculateCartPrice(12,23,34,45,67))


const user = {
    username:"abc123",
    price:999
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}
handleObj(user)