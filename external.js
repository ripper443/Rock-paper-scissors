
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
             result = "Scissor";
            break;
        default :
        console.log("ERROR");
    }
    return result;
}