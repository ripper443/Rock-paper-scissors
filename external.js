
//PLAN YOUR SOLUTION


//function declaration

//RANDOMLY return rock,paper or scissor
    
//Math.floor(Math.random() * 3) ;  // returns 0 , 1, 2

//if result is 0, return rock
//if result is 1,  return paper
//if result is 2, return scissor

//use console

let input = prompt("Enter rock, paper or scissor");


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


//SECOND PART

// create a function that takes 2 parameters, computerSelection
// , playerSelection

let comp = getComputerChoice();


//playerSelection must be able to input case insensitive
function playerSelection() {
    let ans;
    const pattern= /paper/i  ;
    const pattern2 = /rock/i;
    const pattern3 = /scissor/i;
    
    
     if (pattern.test(input) == true){
        ans = "Paper";
     } else if (pattern2.test(input) == true) {
        ans = "Rock";
     } else if (pattern3.test(input) == true){
        ans = "Scissor";
     } else {
        ans = "Please use only rock, paper or scissor";
     }
        return ans;
    }
    
//conditions
// scissors beats paper, paper beats rock, rock beats scissor
//returns a string that declares winner

//ideas : 
// use numbers to decide who will win ; 0>1== true, return player
// need to convert playerChoice to numbers to use it

// what if we create an array of inputs and call it from there?




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

    

    //console.log("Computer:" + com + " Player:" + func);
    //console.log("Winner: " + winner);

    return final;
}

/// `You ${winOrLose}! ${comp} beats ${playerSelection()}`

/// if winner=player = 
/// if winner = comp=

//GAME FUNCTION
/** keep count of rounds */
/* inital value is 5, decrement until 1*/

const Win = /win/i;
const Lose = /lose/i;
       
function truth(){
let both = playRound(getComputerChoice(),playerSelection());
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

    for (let i = 1; i < 6; i++){
   temp = playRound(getComputerChoice(),playerSelection())
   if (Win.test(temp) == true){
    player+=1;
   } else if (Lose.test(temp) == true){
    computer+=1;
   }


    console.log(temp);
    console.log(player);
    console.log(computer);
}
    if (player > computer) {
        end = `Player Wins! ${player} vs ${computer}`
    }else if ( computer > player){
        end = `Computer Wins! ${computer} vs ${player}`
    }
return end;
}



/*when it reaches 5 rounds, declare winner*/
/*calls playRound function*/