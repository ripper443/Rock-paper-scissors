
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) ;
    let result;
    switch(randomNumber){
        case 0 :
            result = "Rock";
            break;
        case 1 : 
             result = "Paper"
            break;
        case 2 : 
             result = "Scissor";
            break;
        default :
        console.log("ERROR");
    }
    return result;
}


let com = getComputerChoice();
let playerChoice;

/** 
function playerSelection(player) {
    let ans;
    const pattern= /paper/i  ;
    const pattern2 = /rock/i;
    const pattern3 = /scissor/i;
    
    
     if ( pattern.test(player) == true){
        ans = "Paper";
     } else if (pattern2.test(player) == true) {
        ans = "Rock";
     } else if (pattern3.test(player) == true){
        ans = "Scissor";
     } else {
        ans = "Please use only rock, paper or scissor";
     }
        return ans;
    }
    
**/



function playRound(com,func) {
    let winner;
    let final = "Not quite";


    if (com == func) {
        winner = "Draw"; }
    else if (com == "Scissor" && func == "Paper"){
        winner = "Computer";
    } else if (com == "Paper" && func == "Scissor"){
        winner = "Player";
    } else if (com == "Paper" && func == "Rock"){
        winner = "Computer";
    } else if (com == "Rock" && func == "Paper"){
        winner= "Player";
    } else if (com == "Rock" && func == "Scissor"){
        winner = "Computer";
    } else if (com == "Scissor" && func == "Rock"){
        winner= "Player";
    }else {
        winner = "Not quite";
       
    }
    
    if (winner == "Player") {
        final = `You Win! ${func} beats ${com}`
    } else if (winner == "Computer"){
        final  = `You Lose! ${com} beats ${func}`
    } else if (winner == "Draw"){
        final = `It's a draw!`
    }

    

 
    return final;
}


const Win = /win/i;
const Lose = /lose/i;
       
function truth(){
let both = playRound(getComputerChoice(),playerChoice);
console.log(both);

let ans = "";
if (Win.test(both) == true){
    ans = "Win";
} else if (Lose.test(both) == true) {
    ans = "Lose";
}else {
    ans = "Draw";
}
   return ans;
}


function game(){
    let count = +"";
    let temp = "";

    let player = 0;
    let computer = 0;

    let end;

   
   temp = playRound(getComputerChoice(),playerChoice)
   if (Win.test(temp) == true){
    player+=1;
   } else if (Lose.test(temp) == true){
    computer+=1;
   


    console.log(temp);
    console.log(player);
    console.log(computer);
}
    if (player > computer) {
        end = `Player:${player} Computer: ${computer}`
    }else if ( computer > player){
        end = `Player:${player} Computer: ${computer}`
    } else {
        end = `Player:${player} Computer: ${computer}`
    }
return end;
} 

let playerScore = +"";
let computerScore = +"";
let click = +"";
let result = "";


const rocky = document.getElementsByTagName('button')[0];
const papery = document.getElementsByTagName('button')[1];
const scissory = document.getElementsByTagName('button')[2];

rocky.addEventListener('click' , rock); 
papery.addEventListener('click' , paper); 
scissory.addEventListener('click' , sci); 

function rock () {
    playerChoice = "Rock";
    let newDiv = document.createElement('div');
    newDiv.innerText = game();
    document.body.appendChild(newDiv);
    com = getComputerChoice();
    click += 1;
    if (click == 6) {
        if (computerScore > playerScore) {
            result = "Computer Wins!"
            } else {
            result = "Player Wins!"
            }
            newDiv.innerText = result;
        let newDiv2 = document.createElement('div');
        newDiv2.innerText = `Player Score : ${playerScore} Computer Score : ${computerScore}`;
        document.body.appendChild(newDiv2);
        rocky.removeEventListener('click' , rock);
        papery.removeEventListener('click' , paper);
        scissory.removeEventListener('click' , sci);
    }
    
    if (newDiv.innerText.includes("Player:1") ){
        playerScore += 1;
    } else if (newDiv.innerText.includes("Computer: 1")) {
        computerScore += 1;
    }
    console.log('player score: ' +playerScore);
    console.log('computer score: ' + computerScore);
    console.log(click);
}

function paper () {
    playerChoice = "Paper";
    let newDiv = document.createElement('div');
    newDiv.innerText = game();
    document.body.appendChild(newDiv);
    com = getComputerChoice();
    click += 1;
    if (click == 6) {
        if (computerScore > playerScore) {
            result = "Computer Wins!"
            } else {
            result = "Player Wins!"
            }
            newDiv.innerText = result;
            let newDiv2 = document.createElement('div');
        newDiv2.innerText = `Player Score : ${playerScore} Computer Score : ${computerScore}`;
        document.body.appendChild(newDiv2);
            
        
        rocky.removeEventListener('click' , rock);
        papery.removeEventListener('click' , paper);
        scissory.removeEventListener('click' , sci);
    }
    
    if (newDiv.innerText.includes("Player:1") ){
        playerScore += 1;
    } else if (newDiv.innerText.includes("Computer: 1")) {
        computerScore += 1;
    }
    console.log('player score: ' +playerScore);
    console.log('computer score: ' + computerScore);
    console.log(click);
}

function sci () {
    playerChoice = "Scissor";
    let newDiv = document.createElement('div');
    newDiv.innerText = game();
    document.body.appendChild(newDiv);
    com = getComputerChoice();
    click += 1;
    if (click == 6) {
        if (computerScore > playerScore) {
            result = "Computer Wins!"
            } else {
            result = "Player Wins!"
            }
            newDiv.innerText = result;
            let newDiv2 = document.createElement('div');
        newDiv2.innerText = `Player Score : ${playerScore} Computer Score : ${computerScore}`;
        document.body.appendChild(newDiv2);
        
        rocky.removeEventListener('click' , rock);
        papery.removeEventListener('click' , paper);
        scissory.removeEventListener('click' , sci);
    }
    
    if (newDiv.innerText.includes("Player:1") ){
        playerScore += 1;
    } else if (newDiv.innerText.includes("Computer: 1")) {
        computerScore += 1;
    }
    console.log('player score: ' +playerScore);
    console.log('computer score: ' + computerScore);
    console.log(click);
}

















