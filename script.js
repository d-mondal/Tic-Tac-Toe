console.log("Welcome to TicTacToe!")

let turn = "X";
let gameover = false;
let singlePlayer = false;

document.querySelector(".x").style.boxShadow = "7px 7px 14px rgba(0, 0, 0, 0.25), -7px -7px 14px rgba(255, 255, 255, 0.75), inset 3px 3px 7px rgba(0, 0, 0, 0.15), inset -3px -3px 7px rgba(255, 255, 255, 0.6)";
document.querySelector(".x").style.background = "linear-gradient(145deg, #6b6969, #b8b0b0)";
document.querySelector(".x").style.color = "white"

const saveScores = () => {
    localStorage.setItem('xscore', document.getElementById('xscore').value);
    localStorage.setItem('oscore', document.getElementById('oscore').value);
}

const loadScores = () => {
    const xscore = localStorage.getItem('xscore') || '0';
    const oscore = localStorage.getItem('oscore') || '0';
    document.getElementById('xscore').value = xscore;
    document.getElementById('oscore').value = oscore;
}

const savePlayerNames = () => {
    localStorage.setItem('player1name', document.getElementById('player1name').value);
    localStorage.setItem('player2name', document.getElementById('player2name').value);
};

const loadPlayerNames = () => {
    const player1name = localStorage.getItem('player1name') || 'Player 1';
    const player2name = localStorage.getItem('player2name') || 'Player 2';
    document.getElementById('player1name').value = player1name;
    document.getElementById('player2name').value = player2name;
};

// const saveMode = () => {
//     localStorage.setItem('mode', document.getElementById('solo').checked);
// }

// const loadMode = () => {
//     const mode = localStorage.getItem('soloCheckbox') === 'true';
//     const soloMode = document.getElementById('solo');
//     soloMode.checked = mode;
//     singlePlayer = mode;
//     document.getElementById('player2name').disabled = mode;
//     document.getElementById('player2name').value = mode ? "Computer" : "Player 2";
// };

const changeTurn = () => {
    document.querySelector(".x").style.boxShadow = "none";
    document.querySelector(".x").style.background = "linear-gradient(145deg, #d4d4d4, #f0f0f0)";
    document.querySelector(".x").style.color = "black";
    document.querySelector(".o").style.boxShadow = "none";
    document.querySelector(".o").style.background = "linear-gradient(145deg, #d4d4d4, #f0f0f0)";
    document.querySelector(".o").style.color = "black";
    currTurn = turn === "X" ? "O" : "X";
    if (currTurn === "X") {
        document.querySelector(".x").style.boxShadow = "7px 7px 14px rgba(0, 0, 0, 0.25), -7px -7px 14px rgba(255, 255, 255, 0.75), inset 3px 3px 7px rgba(0, 0, 0, 0.15), inset -3px -3px 7px rgba(255, 255, 255, 0.6)";
        document.querySelector(".x").style.background = "linear-gradient(145deg, #6b6969, #b8b0b0)";
        document.querySelector(".x").style.color = "white";
    }
    else if (currTurn === "O") {
        document.querySelector(".o").style.boxShadow = "7px 7px 14px rgba(0, 0, 0, 0.25), -7px -7px 14px rgba(255, 255, 255, 0.75), inset 3px 3px 7px rgba(0, 0, 0, 0.15), inset -3px -3px 7px rgba(255, 255, 255, 0.6)";
        document.querySelector(".o").style.background = "linear-gradient(145deg, #6b6969, #b8b0b0)";
        document.querySelector(".o").style.color = "white";
    }
    return currTurn;
}

const checkWin = () => {
    gameover = false
    let winner = ""
    let symbol = document.getElementsByClassName("text");
    let x = parseInt(document.querySelector("#xscore").value)
    let o = parseInt(document.querySelector("#oscore").value)

    let wins = [];

    if (document.getElementById("cnt3").style.visibility === "visible") {
        wins = [
            [0, 1, 2, 4.5, 6.5, 0],
            [3, 4, 5, 4.5, 16.5, 0],
            [6, 7, 8, 4.5, 26.5, 0],
            [0, 3, 6, -5.5, 16.8, 90],
            [1, 4, 7, 4.5, 16.8, 90],
            [2, 5, 8, 14.5, 16.8, 90],
            [0, 4, 8, 4.5, 16.8, 45],
            [2, 4, 6, 4.5, 16.8, -45]
        ];
        let squares = document.querySelectorAll('.t3');
        if (!Array.from(squares).some(square => square.innerText === "")) {
            gameover = true;
            return "tie";
        }
    }
    else if (document.getElementById("cnt4").style.visibility === "visible") {
        wins = [
            [9, 10, 11, 12, 5, 5.5, 0],
            [13, 14, 15, 16, 5, 13.2, 0],
            [17, 18, 19, 20, 5, 20.6, 0],
            [21, 22, 23, 24, 5, 28.3, 0],
            [9, 13, 17, 21, -6.8, 17, 90],
            [10, 14, 18, 22, 1, 17, 90],
            [11, 15, 19, 23, 8.5, 17, 90],
            [12, 16, 20, 24, 16, 17, 90],
            [9, 14, 19, 24, 5, 17, 45],
            [12, 15, 18, 21, 5, 17, -45]
        ];
        let squares = document.querySelectorAll('.t4');
        if (!Array.from(squares).some(square => square.innerText === "")) {
            gameover = true;
            return "tie";
        }
    }
    else if (document.getElementById("cnt5").style.visibility === "visible") {
        wins = [
            [25, 26, 27, 28, 29, 4.5, 5, 0],
            [30, 31, 32, 33, 34, 4.5, 11, 0],
            [35, 36, 37, 38, 39, 4.5, 17, 0],
            [40, 41, 42, 43, 44, 4.5, 23, 0],
            [45, 46, 47, 48, 49, 4.5, 29, 0],
            [25, 30, 35, 40, 45, -7.5, 17, 90],
            [26, 31, 36, 41, 46, -1.4, 17, 90],
            [27, 32, 37, 42, 47, 4.6, 17, 90],
            [28, 33, 38, 43, 48, 10.6, 17, 90],
            [29, 34, 39, 44, 49, 16.8, 17, 90],
            [25, 31, 37, 43, 49, 4.5, 17, 45],
            [29, 33, 37, 41, 45, 4.5, 17, -45]
        ];
        let squares = document.querySelectorAll('.t5');
        if (!Array.from(squares).some(square => square.innerText === "")) {
            gameover = true;
            return "tie";
        }
    }

    wins.forEach(e => {
        let win = true;
        for (let i = 0; i < e.length - 3; i++) {
            if (symbol[e[i]].innerText !== symbol[e[0]].innerText || symbol[e[i]].innerText === "") {
                win = false;
                break;
            }
        }
        if (win) {
            winner = symbol[e[0]].innerText;
            gameover = true;
            document.querySelector(".line").style.width = "25vw";
            document.querySelector(".line").style.transition = "width 0.5s ease-in-out";
            document.querySelector(".line").style.transform = `translate(${e[e.length - 3]}vw,${e[e.length - 2]}vw) rotate(${e[e.length - 1]}deg)`;
        }
    });

    if (winner === "X") {
        x += 1;
        document.querySelector("#xscore").value = x;
    }
    else if (winner === "O") {
        o += 1;
        document.querySelector("#oscore").value = o;
    }

    saveScores();
    savePlayerNames();
    return winner;
}

const selectSize = () => {
    document.getElementById('brdszs').style.display = 'block';
    document.getElementById('3x3').addEventListener('click', () => {
        document.getElementById('brdszs').style.display = 'none';
        document.getElementById('cnt3').style.visibility = 'visible';
        document.getElementById('cnt4').style.visibility = 'hidden';
        document.getElementById('cnt5').style.visibility = 'hidden';
    })

    document.getElementById('4x4').addEventListener('click', () => {
        document.getElementById('brdszs').style.display = 'none';
        document.getElementById('cnt3').style.visibility = 'hidden';
        document.getElementById('cnt4').style.visibility = 'visible';
        document.getElementById('cnt5').style.visibility = 'hidden';
    })

    document.getElementById('5x5').addEventListener('click', () => {
        document.getElementById('brdszs').style.display = 'none';
        document.getElementById('cnt3').style.visibility = 'hidden';
        document.getElementById('cnt4').style.visibility = 'hidden';
        document.getElementById('cnt5').style.visibility = 'visible';
    })
}

const resetFunc = () => {
    document.getElementById('winner').style.display = 'none';
    let squares = document.querySelectorAll('.text');
    Array.from(squares).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    gameover = false;
    document.querySelector(".line").style.width = "0";
    document.querySelector(".line").style.transition = "none";
    document.querySelector(".x").style.boxShadow = "7px 7px 14px rgba(0, 0, 0, 0.25), -7px -7px 14px rgba(255, 255, 255, 0.75), inset 3px 3px 7px rgba(0, 0, 0, 0.15), inset -3px -3px 7px rgba(255, 255, 255, 0.6)";
    document.querySelector(".x").style.background = "linear-gradient(145deg, #6b6969, #b8b0b0)";
    document.querySelector(".x").style.color = "white"
    document.querySelector(".o").style.boxShadow = "none";
    document.querySelector(".o").style.background = "linear-gradient(145deg, #d4d4d4, #f0f0f0)";
    document.querySelector(".o").style.color = "black"
}

const newgameFunc = () => {
    resetFunc();
    document.querySelector("#xscore").value = "0";
    document.querySelector("#oscore").value = "0";
    document.getElementById('player1name').value = "Player 1";
    document.getElementById('player2name').value = "Player 2";
    document.getElementById('solo').checked = false; 
    singlePlayer = false;
    saveScores();
    savePlayerNames();
    selectSize();
}

const computerMove = () => {
    let squares;
    if (document.getElementById("cnt3").style.visibility === "visible") {
        squares = document.querySelectorAll('.t3');
    }
    else if (document.getElementById("cnt4").style.visibility === "visible") {
        squares = document.querySelectorAll('.t4');
    }
    else if (document.getElementById("cnt5").style.visibility === "visible") {
        squares = document.querySelectorAll('.t5');
    }
    let emptySquares = Array.from(squares).filter(square => square.innerText === '');
    console.log('Empty Squares:', emptySquares);

    if (emptySquares.length > 0) {
        let randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        console.log('Selected Square:', randomSquare);

        randomSquare.innerText = turn;

        let result = checkWin();
        if (gameover === true && result !== "tie") {
            document.querySelector('#winmsg h3').innerText = `Congratulations! ${turn} Wins!`;
            document.getElementById('winner').style.display = 'block';
            setTimeout(resetFunc, 5000);
        } else if (gameover === true && result === "tie") {
            document.querySelector('#winmsg h3').innerText = `It's a Tie, Play Again!`;
            document.getElementById('winner').style.display = 'block';
            setTimeout(resetFunc, 5000);
        } else {
            turn = changeTurn();
        }
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    loadScores();
    loadPlayerNames();
    // loadMode();
    selectSize();

    let squares = document.getElementsByClassName("block");
    Array.from(squares).forEach(element => {
        let symbol = element.querySelector('.text');
        element.addEventListener('click', () => {
            if (symbol.innerText === '') {
                symbol.innerText = turn;
                let result = checkWin();
                if (gameover === true && result !== "tie") {
                    document.querySelector('#winmsg h3').innerText = `Congratulations! ${symbol.innerText} Wins!`;
                    document.getElementById('winner').style.display = 'block';
                    setTimeout(resetFunc, 5000);
                }
                else if (gameover === true && result === "tie") {
                    document.querySelector('#winmsg h3').innerText = `It's a Tie, Play Again!`;
                    document.getElementById('winner').style.display = 'block';
                    setTimeout(resetFunc, 5000);
                }
                else {
                    turn = changeTurn();
                    if (singlePlayer && turn === "O") {
                        setTimeout(computerMove, 500);
                    }
                }
            }
        })
    })

    document.getElementById('solo').addEventListener('change', (event) => {
        singlePlayer = event.target.checked;
        document.getElementById('player2name').disabled = singlePlayer;
        document.getElementById('player2name').value = singlePlayer ? "Computer" : "Player 2";
        // saveMode();
    });

    document.getElementById('openModal').addEventListener('click', () => {
        document.getElementById('warning').style.display = 'block';
    });

    document.getElementById('cancel').addEventListener('click', () => {
        document.getElementById('warning').style.display = 'none';
    });

    document.getElementById('reset').addEventListener('click', () => {
        resetFunc();
        document.getElementById('warning').style.display = 'none';
    });

    document.getElementById('close').addEventListener('click', () => {
        document.getElementById('winner').style.display = 'none';
    });

    newgame.addEventListener('click', newgameFunc);
})