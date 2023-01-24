let homeScoreBoard = document.getElementById("home-score")
let guestScoreBoard = document.getElementById("guest-score")
let homeBoard = document.querySelector(".home-board")
let message = document.getElementById("msg")
let guestBoard = document.querySelector(".guest-board")
let homescore = homeScoreBoard.textContent = 0;
let guestscore = guestScoreBoard.textContent = 0;
let quit = false;


function addOne(el){
    if( el == 1){
    homescore += 1
   return homeScoreBoard.textContent = homescore
         }
         else {
      guestscore += 1
   return guestScoreBoard.textContent = guestscore
         }
    }
function addTwo(el){
    if( el == 2){
    homescore += 2
   return homeScoreBoard.textContent = homescore
         }
         else {
      guestscore += 2
   return guestScoreBoard.textContent = guestscore
         }
    }
function addThree(el){
    if( el == 3){
    homescore += 3
   return homeScoreBoard.textContent = homescore
         }
         else {
      guestscore += 3
   return guestScoreBoard.textContent = guestscore
         }
    }
    
   
    let count=24;
    let counter=setInterval(timer, 1000);

function clearInterval(){
      document.getElementById("timer").innerHTML = 24 +  " :00";
      count = 24;
      running = false;
  }

function timer()
{
  count -= 1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }
    document.getElementById("timer").innerHTML=count + " :00";
}

function endgame(){
       if (homescore > guestscore && quit == false){
        homeBoard.style.backgroundColor = "green"
        homeBoard.style.color = "white"
        msg.textContent = "HOME WINS"
    } else if(guestscore > homescore  && quit == false){ 
        guestBoard.style.backgroundColor = "green"
        guestBoard.style.color = "white"
        msg.textContent = "GUEST WINS"
    } else if(guestscore == home  && quit == false) {
        msg.textContent ="DRAW"
    }
    clearInterval()
    quit = true;  
}



function reset(){
    quit = false;
    homescore =   homeScoreBoard.textContent = 0;
    guestscore = guestScoreBoard.textContent = 0;  
        guestBoard.style.color = "#F94F6D"
        guestBoard.style.backgroundColor = "#352f44"
        homeBoard.style.color = "#F94F6D"
        homeBoard.style.backgroundColor = "#352f44"
        msg.textContent = ""
    clearInterval()  
       }