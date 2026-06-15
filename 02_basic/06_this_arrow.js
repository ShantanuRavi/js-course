//----THIS INSIDE OBJECT METHODS----//

// const user = {
//     name : "Shantanu",
//     greet: function(){
//         console.log(this.name)
//     }
// }
// user.greet()

//----THIS IN REGULAR FUNCTION----//

// function test (){
//     console.log(this)
// }
// test()


//----WHY USE THIS----//

// const user = {
//     name:"Ravi",
//     greet:function(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// user.greet()
// user.name="Shantanu"
// user.greet()

//----ARROW FUNCTION IN JS----//

// const add = (num1,num2)=>{
//     return num1+num2
// }
// console.log(add(2,3))

//----ARROW FUNCTION WITH ONE PARAMETER----//

// const sq = num => num*num;
// console.log(sq(4))


//---- ARROW FUNCTION DO NOT HAVE THEIR OWN "THIS"----//

// const user = {
//     name:"Ravi",
//     greet:()=>{
//         console.log(this.name)
//     }
// }
// user.greet()

//----ARROW FUNCTION WITHOUT RETURN----//

// const sq = num => num*num;
// console.log(sq(4))

// const add = (num1,num2) => num1+num2
// console.log(add(2,7))

// const add = (num1,num2) => (num1+num2)
// console.log(add(2,7))


//----RETURNING OBJECT FROM ARROW FUNCTION----//

// const user = () =>
// ({name:"Ravi"})

// console.log(user())