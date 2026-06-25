let randomnumber = parseInt(Math.random() * 100 + 1);

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

if(playgame)
{
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
    if(no_of_guess === 11)
    {
      displayguess(guess);
      displaymsg(`Game Over , Random Number Was ${randomnumber}`);
      endgame();
    }
    else{
      displayguess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess){
  if(guess === randomnumber)
  {
    displaymsg(`You Guessed It Right`)
    endgame()
  }
  else if(guess < randomnumber)
  {
    displaymsg(`Number Is Too Low`)
  }
  else if(guess > randomnumber)
  {
    displaymsg(`Number Is Too High`)
  }
}
function displayguess(guess){
  userinput.value = "";
  guesslot.innerHTML += `${guess}  `
  no_of_guess++;
  remaining.innerHTML = `${11 - no_of_guess}`
}
function displaymsg(message){
  lowhigh.innerHTML = `<h3>${message}</h3>`;
}
function endgame(){
  userinput.value = "";
  userinput.setAttribute("disabled","");
  p.classList.add("button");
  p.innerHTML = `<h3 id="nextgame">Start New Game</h3>`;
  console.log(p)
  startover.appendChild(p)
  playgame = false;
  newgame();
}
function newgame(){
  const newgamebutn = document.querySelector("#nextgame");
  newgamebutn.addEventListener("click",function(e){
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    no_of_guess = 1;
    guesslot.innerHTML = "";
    remaining.innerHTML = `${11 - no_of_guess}`;
    lowhigh.innerHTML = "";
    userinput.removeAttribute("disabled");
    startover.removeChild(p);
    playgame = true;
})
}