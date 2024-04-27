let playerScore = 0;
let computerScore = 0;

function computer(){
    let computerChoice = Math.floor(Math.random()*3);
    return computerChoice;
}

function play(playerChoice){
    let computerChoice = computer();
    displayChoice(playerChoice, computerChoice);
    let result = selectWinner(playerChoice, computerChoice);
    displayResult(result);
    displayScore(playerScore, computerScore, result);
    if(playerScore===5){
        alert('A játékos megnyerte a játékot!');
        playerScore=0;
        computerScore=0;
    }
    else if(computerScore===5){
        alert('A Számítógép megnyerte a játékot!');
        playerScore=0;
        computerScore=0;        
    }
}

function displayChoice(player, computer){
    let playerStr = document.getElementById('player-choice');
    let computerStr = document.getElementById('computer-choice');
    switch(player){
        case 0:
            playerStr.classList = 'rock';
            playerStr.src = 'rock.png';
            break;
        case 1:
            playerStr.classList = 'paper';
            playerStr.src = 'paper.png';
            break;
        case 2:
            playerStr.classList = 'scissors';
            playerStr.src = 'scissors.png';
            break;
    }
    switch(computer){
        case 0:
            computerStr.classList = 'rock'
            computerStr.src = 'rock.png';
            break;
        case 1:
            computerStr.classList = 'paper'
            computerStr.src = 'paper.png';
            break;
        case 2:
            computerStr.classList = 'scissors'
            computerStr.src = 'scissors.png';
            break;
    }
}

function selectWinner(player, computer){
    if((player === 0 && computer===2)||(player===1 && computer===0)||(player===2 && computer===1)){
        playerScore++;
        return 1;
    }
    else if((player===0 && computer===1)||(player===1 && computer===2)||(player===2 && computer===0)){
        computerScore++;
        return -1;
    }
    else{
        return 0;
    }
}

function displayResult(result){
    let display = document.getElementById('result');
    switch(result){
        case 0:
            display.classList = 'tie';
            display.innerHTML = "Döntetlen";
            break;
        case 1:
            display.classList = 'player';
            display.innerHTML = 'Játékos nyert';
            break;
        case -1:
            display.classList = 'computer';
            display.innerHTML = 'Számítógép nyert';
            break;
    }
}

function displayScore(){
    let playerStr = document.getElementById('player-score');
    let computerStr = document.getElementById('computer-score');
    playerStr.innerHTML = playerScore;
    computerStr.innerHTML = computerScore;
}