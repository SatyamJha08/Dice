/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currScore,curr,gamePlay,dice;
var score = [0,0];

init();
function init()
{
    score = [0,0];
    currScore = 0;
    curr = 0;
    gamePlay = true;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'Player1';
    document.querySelector('#name-1').textContent = 'Player2';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}


document.querySelector('.btn-roll').addEventListener('click',fun1);
document.querySelector('.btn-hold').addEventListener('click',fun2);
document.querySelector('.btn-new').addEventListener('click', init);
function fun1()
{
    if(gamePlay)
        {
            dice = Math.floor(Math.random()*6)+1;
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-'+dice+'.png';
            if(dice === 1)
                {
                    currScore = 0;
                    document.querySelector('#current-'+curr).textContent = currScore;
                    nextPlayer();


                }
            else
                {
                    currScore+=dice;
                    document.querySelector('#current-'+curr).textContent = currScore;
                }
        }
}

function fun2()
{
    if(gamePlay)
        {
            score[curr]+=currScore;
            document.querySelector('#score-'+curr).textContent = score[curr];
            if(score[curr]>=100)
                {
                    gamePlay = false;
                    document.querySelector('#name-'+curr).textContent = 'WINNER!';
                    document.querySelector('.dice').style.display = 'none';
                    document.querySelector('.player-' + curr + '-panel').classList.add('winner');
                    document.querySelector('.player-' + curr + '-panel').classList.remove('active');
                    
                }
            else
                {
                    nextPlayer();
                }
        }
}

function nextPlayer()
{
    document.querySelector('#current-'+curr).textContent = 0;
    currScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    if(curr === 0)
        curr = 1;
    else
        curr = 0;
    
}