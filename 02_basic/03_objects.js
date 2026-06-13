//----1--OBJECTS SINGLETON----//

//const obj = new Object()
// const obj1 = {}

// obj1.userId = "abc123"
// obj1.name = "Rajesh"
// obj1.age = 23
// obj1.isLoggedIn = false
// console.log(obj)


//----2--NESTED OBJECTS----//

// const obj2 =
// {
//     userid:"abc123",
//     name:{
//             firstname:"Shan",
//             lastname:"Ravi"
//         },
//     age:23
// }

// console.log(obj2.name.lastname)  //accessing elements in nested objects



//----3--COMBINING TWO OR MORE OBJECTS----//

// const obj2 =
// {
//     userid:"abc123",
//     name:{
//             firstname:"Shan",
//             lastname:"Ravi"
//         },
//     age:25
// }
// const mySym = Symbol("h")
// const obj1 = {
//     name:"Ravi",
//     age:23,
//     email:"ravi@gmail.com",
//     location:"Ranchi",
//     isLoggedIn:false,
//     loggedInDays:["mon","tue"],
//     [mySym]:"hello"
// }
// const obj3 = {...obj1,...obj2}       //this and 
// const obj4 =Object.assign({},obj1,obj2)   // this do the same thing
// console.log(obj4)


//----4--ARRAY OF OBJECTS----//

// let arrObj = [
//     obj1 = {
//         name:"Raj",
//         age:23
//     },
//     obj2 = {
//         income : 23000,
//         investing : "no"
//     },
//     obj3 ={
//         state:"JH",
//         city:"Ranchi",
//         area:"Chutia",
//         landmark:"Ram Mandir"
//     }
// ]
// console.log(arrObj)


//----5--METHODS OF OBJECTS----//

const mySym = Symbol("h")
const obj1 = {
    name:"Ravi",
    age:23,
    email:"ravi@gmail.com",
    location:"Ranchi",
    isLoggedIn:false,
    loggedInDays:["mon","tue"],
    [mySym]:"hello"
}

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))
console.log(obj1.hasOwnProperty("email"))
