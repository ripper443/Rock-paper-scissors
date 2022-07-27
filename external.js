
//PLAN YOUR SOLUTION


//function declaration

//RANDOMLY return rock,paper or scissors
    
//Math.floor(Math.random() * 3) ;  // returns 0 , 1, 2

//if result is 0, return rock
//if result is 1,  return paper
//if result is 2, return scissors

//use console




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
             result = "Scissors";
            break;
        default :
        console.log("ERROR");
    }
    return result;
}


//SECOND PART

// create a function that takes 2 parameters, computerSelection
// , playerSelection

//playerSelection must be able to input case insensitive
function playerSelection() {
    let input = prompt("Enter rock, paper or scissors");
    let ans;
    const pattern= /paper/i  ;
    const pattern2 = /rock/i;
    const pattern3 = /scissors/i;
    
    
     if (pattern.test(input) == true){
        ans = "Paper";
     } else if (pattern2.test(input) == true) {
        ans = "Rock";
     } else if (pattern3.test(input) == true){
        ans = "Scissors";
     } else {
        ans = "Please use only rock, paper or scissors";
     }
        return ans;
    }
    
//conditions
// scissors beats paper, paper beats rock, rock beats scissors
//returns a string that declares winner

//ideas : 
// use numbers to decide who will win ; 0>1== true, return player
// need to convert playerChoice to numbers to use it

// what if we create an array of inputs and call it from there?

let comp = getComputerChoice();



function rps(com,func) {
    let result;

    if (com == func) {
         result = "draw"; }
    else if (com == "Scissors" && func == "Paper"){
        result = "Player Wins";
    } else if (com == "Paper" && func == "Scissors"){
        result = "Computer Wins";
    } else if (com == "Paper" && func == "Rock"){
        result = "Computer Wins";
    } else if (com == "Rock" && func == "Paper"){
        result = "Player Wins";
    } else if (com == "Rock" && func == "Scissors"){
        result = "Computer Wins";
    } else if (com == "Scissors" && func == "Rock"){
        result = "Player Wins";
    }else {
        result = "Please use only rock, paper or scissors";
    }

    return result;
}


