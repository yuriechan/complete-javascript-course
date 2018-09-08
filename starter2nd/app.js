/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//setter
document.querySelector('#current-' + activePlayer).textContent = dice;
//getter

document.querySelector('.btn-roll').addEventListener('click', function () {
    //when event('click')happens, function will be called back
    //1. random number will be set to dice, and change dice img accordingly.
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    //2. the number of dice will be displayed on current score, and will add up until next player
    //3. if number of dice is 1, change to next player
    if (dice !== 1) {
        roundScore = roundScore + dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        //notify that user got 1
        document.getElementById('current-' + activePlayer).textContent = 0;
        //skip to next player;

    }
})
