let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*9);
};
function compareGuesses(humanGuess,computerGuess,secretTarget){
  var distOne= Math.abs(secretTarget - humanGuess);
  var distTwo= Math.abs(secretTarget - computerGuess);
return distOne <= distTwo;
};
function updateScore(winner){
  if(winner==="human"){
  humanScore++;
  }else if(winner==="computer"){
  computerScore++;
  };
};
function advanceRound(){
  currentRandomNumber++;
};