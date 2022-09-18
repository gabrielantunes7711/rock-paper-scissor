const playerPaper = document.querySelector(".player").querySelector(".paper")
const playerRock = document.querySelector(".player").querySelector(".rock")
const playerScissor = document.querySelector(".player").querySelector(".scissor")

const computerPaper = document.querySelector(".computer").querySelector(".paper")
const computerRock = document.querySelector(".computer").querySelector(".rock")
const computerScissor = document.querySelector(".computer").querySelector(".scissor")

const computerChooses = [computerPaper, computerRock, computerScissor]

const random = (min, max) => Math.floor(Math.random()* (max - min))

const newGame = document.querySelector('.new-game')

let statusGame = document.querySelector('.result')

let youScore = document.querySelector('.you-score').querySelector('span')
let computerScore = document.querySelector('.computer-score').querySelector('span')
let audio = document.querySelector('audio')

console.log(audio)

function play(el) {

    audio.play()
    
    const computerSelected = computerChooses[random(0, computerChooses.length)]

    hideOptions(el)

    computerSelected.style.display = 'block'
   
    if (el.className == 'rock' && computerSelected.className == 'scissor'){
        statusGame.innerHTML = 'You Win'
    } else if(el.className == 'paper' && computerSelected.className == 'rock'){
        statusGame.innerHTML = 'You Win'
    } else if(el.className == 'scissor' && computerSelected.className == 'paper'){
        statusGame.innerHTML = 'You Win'
    } else if(el.className == computerSelected.className){
        statusGame.innerHTML = 'Draw'
    } else{
        statusGame.innerHTML = 'You Lose'
    }
    
    score()

    newGame.style.display = 'block'

}

function score(){
    if(statusGame.innerHTML == 'You Win'){
        youScore.innerHTML = parseInt(youScore.innerHTML) + 1
    } else if(statusGame.innerHTML == 'You Lose'){
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
    }
}

function hideOptions (el){
    playerPaper.style.display = 'none';
    playerRock.style.display = 'none';
    playerScissor.style.display = 'none';
    el.style.display = 'block';
    computerPaper.style.display = 'none';
    computerRock.style.display = 'none';
    computerScissor.style.display = 'none';
}

function reset(){
    newGame.style.display = 'none'
    playerPaper.style.display = 'block';
    playerRock.style.display = 'block';
    playerScissor.style.display = 'block';
    computerPaper.style.display = 'block';
    computerRock.style.display = 'block';
    computerScissor.style.display = 'block';
    statusGame.innerHTML = ""
}

function resetScore(){
    youScore.innerHTML = 0
    computerScore.innerHTML = 0
    reset()
}
