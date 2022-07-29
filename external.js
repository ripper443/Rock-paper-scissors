
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




function rps(com,func) {
    let winner;
    let final = "Not quite";


    if (com == func) {
        winner = "Draw"; }
    else if (com == "Scissor" && func == "Paper"){
        winner = "Computer Wins";
    } else if (com == "Paper" && func == "Scissor"){
        winner = "Computer Wins";
    } else if (com == "Paper" && func == "Rock"){
        winner = "Player Wins";
    } else if (com == "Rock" && func == "Paper"){
        winner= "Computer Wins";
    } else if (com == "Rock" && func == "Scissor"){
        winner = "Computer Wins";
    } else if (com == "Scissor" && func == "Rock"){
        winner= "Player Wins";
    }else {
        winner = "Not quite";
       
    }
    
    if (winner == "Player Wins") {
        final = `You Win! ${func} beats ${com}`
    } else if (winner == "Computer Wins"){
        final  = `You Lose! ${com} beats ${func}`
    } else if (winner == "Draw"){
        final = `It's a draw!`
    }

    console.log("winner : " + winner);
    console.log(com);
    console.log(func);

    return final;
}


/// `You ${winOrLose}! ${comp} beats ${playerSelection()}`

/// if winner=player = 
/// if winner = comp=

