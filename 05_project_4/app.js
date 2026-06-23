const randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");

const userinput = document.querySelector("#guessfield");

const guesslot = document.querySelector(".guesses")

const remaining = document.querySelector(".lastresult")

const lowhigh = document.querySelector(".lowhigh")

const startover = document.querySelector(".resultpara")

const p = document.createElement("p")

let prevguess =[]
let no_of_guess = 1
let playgame = true

if(playgame){
  submit.addEventListener("click",function(e){
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  })

}

function validateguess(guess){
  if(isNaN(guess)){
    alert("Please enter the valid number!");
  }
  else if(guess < 1)
  {
    alert("Please enter the number more than 1!");
  }
  else if(guess > 100)
  {
    alert("Please enter the number less than 100!");
  }
  else {
    prevguess.push(guess);
  }
}
function checkguess(guess){

}
function display(guess){

}
function displaymsg(message){

}
function newgame(){

}
function endgame(){

}