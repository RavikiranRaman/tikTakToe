const editOne = document.getElementById("editplaye-one");
const editTwo = document.getElementById("editplaye-two");
const backdrop = document.getElementById("backdrop");
const modl = document.getElementById("user-info-input-area");
const confirmbut = document.getElementById("model-confirm");
const cancel = document.getElementById("model-cancel");
const playerOneName = document.getElementById("player-0ne");
const playerTwoName = document.getElementById("player-Two");
const userName = document.getElementById("input-name");
const stateGameActive = document.querySelector('.gamer-area');
const playerTurn = document.querySelector('#player-turn');
const startGame = document.getElementById("start-game");
const playArea = document.querySelectorAll(".gamer-area > ul > li")

let nameToUpdate = userName;
let updatePlayerOne = '';
let activePalyer = '';
let count = 0;



startGame.addEventListener('click', (e) => {
    stateGameActive.style.display = "block"
    editOne.disabled = true;
    editTwo.disabled = true;
    playerTurn.textContent = playerOneName.textContent;
    activePalyer = 1
});

editOne.addEventListener('click', (e) => {
    e.preventDefault();
    editModul(e)
});
editTwo.addEventListener('click', (e) => {
    e.preventDefault();
    editModul(e);
});

confirmbut.addEventListener('click', (e) => {
    e.preventDefault();
    if (updatePlayerOne === 1) {
        playerOneName.textContent = nameToUpdate;
    } else {
        playerTwoName.textContent = nameToUpdate;
    }
    backdrop.style.display = "none"
    modl.style.display = "none"
    userName.value = "";
})

cancel.addEventListener('click', (e) => {
    e.preventDefault();
    backdrop.style.display = "none"
    modl.style.display = "none"
})

userName.addEventListener('input', (e) => {
    e.preventDefault();
    nameToUpdate = userName.value;
});

playArea.forEach((e) => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
        let winner = 0;
        if (activePalyer === 1 && !e.target.textContent) {
            playArea[e.target.id - 1].textContent = 'X';
            playerTurn.textContent = playerTwoName.textContent;
            activePalyer = 2;
            winner =  findwinner();
            count = count + 1;
        } else if (!e.target.textContent) {
            playArea[e.target.id - 1].textContent = 'O';
            playerTurn.textContent = playerOneName.textContent;
            activePalyer = 1;
            winner = findwinner();
            count = count + 1;
        }
        console.log(winner);
        if(winner) {
            if(winner === 'X'){
                document.getElementById('result').style.display = 'block';
                document.querySelector('#result h3').textContent =`YoU wOn!!!${playerOneName.textContent}`
            } else if(winner === 'O'){
                document.getElementById('result').style.display = 'block';
                document.querySelector('#result h3').textContent =`YoU wOn!!!${playerTwoName.textContent}`
            } 
        } else if(count === 9) {
            document.getElementById('result').style.display = 'block';                
            document.querySelector('#result h3').textContent ='Draw!!!'
        }
        
    })
});

const editModul = (e) => {
    e.preventDefault();
    backdrop.style.display = "block"
    modl.style.display = "block"
    if (e.target.id === "editplaye-one") {
        updatePlayerOne = 1;
    } else {
        updatePlayerOne = 2;
    }
};

const findwinner = () => {
    let levelTwo = false;
    let levelOne = playArea[0].textContent  && playArea[1].textContent ? 
        (playArea[0].textContent === playArea[1].textContent) : false;
        if (levelOne) {
            levelTwo = playArea[1].textContent  && playArea[2].textContent ? 
            playArea[1].textContent === playArea[2].textContent : false;
            if(levelTwo){
                return playArea[1].textContent;
            }
        }
        levelOne = playArea[0].textContent  && playArea[3].textContent ? 
        playArea[0].textContent === playArea[3].textContent : false;
        if (levelOne) {
            levelTwo = playArea[3].textContent && playArea[6].textContent ?
            playArea[3].textContent === playArea[6].textContent : false;
            if(levelTwo){
                return playArea[3].textContent;
            }
        }
        levelOne = playArea[0].textContent && playArea[4].textContent ?
        playArea[0].textContent === playArea[4].textContent : false;
        if (levelOne) {
            levelTwo = playArea[0].textContent && playArea[4].textContent ?
            playArea[4].textContent === playArea[8].textContent : false;
            if(levelTwo){
                return playArea[4].textContent;
            }
        }
        levelOne = playArea[1].textContent && playArea[4].textContent ?
        playArea[1].textContent === playArea[4].textContent : false;
        if (levelOne) {
            levelTwo = playArea[1].textContent && playArea[4].textContent ?
            playArea[4].textContent === playArea[7].textContent : false;
            if(levelTwo){
                return playArea[4].textContent;
            }
        }
        levelOne = playArea[2].textContent && playArea[4].textContent ?
        playArea[2].textContent === playArea[4].textContent : false;
        if (levelOne) {
            levelTwo = playArea[4].textContent && playArea[6].textContent ?
            playArea[4].textContent === playArea[6].textContent : false;
            if(levelTwo){
                return playArea[4].textContent;
            }
        }
        levelOne = playArea[2].textContent && playArea[5].textContent ? 
        playArea[2].textContent === playArea[5].textContent : false;
        if (levelOne) {
            levelTwo = playArea[5].textContent && playArea[8].textContent ?
            playArea[5].textContent === playArea[8].textContent : false;
            if(levelTwo){
                return playArea[4].textContent;
            }
        }
        return false;
}