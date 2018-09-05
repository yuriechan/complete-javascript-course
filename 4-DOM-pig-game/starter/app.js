/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;


//use anonymous function bc it will only be used in here 
document.querySelector('.btn-roll').addEventListener('click', function(){
    //1.Roll the dice
    //set the dice from one to six
    var dice = Math.floor(Math.random() * 6) + 1;
    //2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    //3.Update the round score IF the rolled number was NOT a 1
    if (dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    // Add current score to global score
    score[activePlayer] += roundScore;
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
    //Check if player won the game
    if (score[activePlayer] >= 20){
        document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
    }else{
        nextPlayer();
    }
})

//define function to not repeat out code
function nextPlayer (){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}

//why not pass but just call??
document.querySelector('.btn-new').addEventListener('click',init);
//set scores zero for 2 players
   function init(){
     score = [0,0];
     roundScore = 0;
     activePlayer = 0; 
     //set everything 0 by default
       document.querySelector('.dice').style.display = 'none';
       document.getElementById('score-0').textContent = 0;
       document.getElementById('score-1').textContent = 0;
       document.getElementById('current-0').textContent = 0;
       document.getElementById('current-1').textContent = 0;
       document.getElementById('name-0').textContent = 'Player 1';
       document.getElementById('name-1').textContent = 'Player 2';
       document.querySelector('.player-0-panel').classList.remove('winner');
       document.querySelector('.player-1-panel').classList.remove('winner');
       document.querySelector('.player-0-panel').classList.remove('active');
       document.querySelector('.player-1-panel').classList.remove('active');
       document.querySelector('.player-0-panel').classList.add('active');
}



//var x = document.querySelector('#score-0').textContent;
//activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//        if (activePlayer === 0){
//            activePlayer = 1;
//        } else {
//            activePlayer = 0;
//        }

