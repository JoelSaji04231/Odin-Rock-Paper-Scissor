function computerSelection(){
    const choices=["rock","paper","scissor"]
    const randomChoice=choices[Math.floor(Math.random()*choices.length)]
    return randomChoice;
}
function playRound(userSelection){
    const computerChoice=computerSelection();

    let result='';
    if (userSelection === computerChoice) {
        result= "Tie";
    }else if (userSelection==="rock" && (computerSelection==="scissor" || computerSelection==="paper")) {
        result= "User wins";
    }else if (userSelection==="paper" && (computerSelection==="rock" || computerSelection==="scissor")) {
        result= "User wins";
    }else if (userSelection==="scissor" && (computerSelection==="rock" || computerSelection==="paper")) {
        result= "User wins";
    }else {
        result= "Computer wins";
    }
    document.getElementById('result-text').textContent=`You choose ${userSelection}, computer chooses ${computerChoice}. ${result}`;
}