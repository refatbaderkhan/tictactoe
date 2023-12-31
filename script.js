//Assiging variables to the winner, players names, and scores
let playerxname = document.getElementById('playerxname')
let playeroname = document.getElementById('playeroname')
let playerxscore = document.getElementById('playerxscore')
let playeroscore = document.getElementById('playeroscore')
let winner = document.getElementById('winner')

//assiging counters for players scores
let counterX = 0
playerxscore.innerText = counterX
let counterO = 0
playeroscore.innerText = counterO

//players name and symbol input
let player1nameinput = document.getElementById('player1nameinput')
let player2nameinput = document.getElementById('player2nameinput')
let player1symbolselect = document.getElementById('player1symbolselect')
let player2symbolselect = document.getElementById('player2symbolselect')

//submitting players input
let submitdata1 = document.getElementById('submitdata1')
let submitdata2 = document.getElementById('submitdata2')

submitdata1.addEventListener('click', function() {
let player1symbolselection = player1symbolselect.value;
if (player1symbolselection === 'X') {
    playerxname.innerText = player1nameinput.value;
}
if (player1symbolselection === 'O') {
    playeroname.innerText = player1nameinput.value;
}
})

submitdata2.addEventListener('click', function() {
    let player2symbolselection = player2symbolselect.value;
    if (player2symbolselection === 'X') {
    playerxname.innerText = player2nameinput.value;
    }
    if (player2symbolselection === 'O') {
    playeroname.innerText = player2nameinput.value;
    }
})

//assigning variables to X buttons
let x1 = document.getElementById('x1')
let x2 = document.getElementById('x2')
let x3 = document.getElementById('x3')
let x4 = document.getElementById('x4')
let x5 = document.getElementById('x5')
let x6 = document.getElementById('x6')
let x7 = document.getElementById('x7')
let x8 = document.getElementById('x8')
let x9 = document.getElementById('x9')

//assigning variables to O buttons
let o1 = document.getElementById('o1')
let o2 = document.getElementById('o2')
let o3 = document.getElementById('o3')
let o4 = document.getElementById('o4')
let o5 = document.getElementById('o5')
let o6 = document.getElementById('o6')
let o7 = document.getElementById('o7')
let o8 = document.getElementById('o8')
let o9 = document.getElementById('o9')

//assigning variables to grid gaps and creating gaps array
let gap1 = document.getElementById('gap1')
let gap2 = document.getElementById('gap2')
let gap3 = document.getElementById('gap3')
let gap4 = document.getElementById('gap4')
let gap5 = document.getElementById('gap5')
let gap6 = document.getElementById('gap6')
let gap7 = document.getElementById('gap7')
let gap8 = document.getElementById('gap8')
let gap9 = document.getElementById('gap9')

let gaps = [gap1,gap2,gap3,gap4,gap5,gap6,gap7,gap8,gap9]

//adding functionality to X1 and O1 Buttons
x1.addEventListener('click', function() {
    if (!gap1.innerText) {
        gap1.innerText = "X";
        checkLine();
    }
})
o1.addEventListener('click', function() {
    if (!gap1.innerText) {
        gap1.innerText = "O";
        checkLine();
    }
})

//adding functionality to X2 and O2 Buttons
x2.addEventListener('click', function() {
    if (!gap2.innerText) {
        gap2.innerText = "X";
        checkLine();
    }
})
o2.addEventListener('click', function() {
    if (!gap2.innerText) {
        gap2.innerText = "O";
        checkLine();
    }
})

//adding functionality to X3 and O3 Buttons
x3.addEventListener('click', function() {
    if (!gap3.innerText) {
        gap3.innerText = "X";
        checkLine();
    }
})
o3.addEventListener('click', function() {
    if (!gap3.innerText) {
        gap3.innerText = "O";
        checkLine();
    }
})

//adding functionality to X4 and O4 Buttons
x4.addEventListener('click', function() {
    if (!gap4.innerText) {
        gap4.innerText = "X";
        checkLine();
    }
})
o4.addEventListener('click', function() {
    if (!gap4.innerText) {
        gap4.innerText = "O";
        checkLine();
    }
})

//adding functionality to X5 and O5 Buttons
x5.addEventListener('click', function() {
    if (!gap5.innerText) {
        gap5.innerText = "X";
        checkLine();
    }
})
o5.addEventListener('click', function() {
    if (!gap5.innerText) {
        gap5.innerText = "O";
        checkLine();
    }
})

//adding functionality to X6 and O6 Buttons
x6.addEventListener('click', function() {
    if (!gap6.innerText) {
        gap6.innerText = "X";
        checkLine();
    }
})
o6.addEventListener('click', function() {
    if (!gap6.innerText) {
        gap6.innerText = "O";
        checkLine();
    }
})

//adding functionality to X7 and O7 Buttons
x7.addEventListener('click', function() {
    if (!gap7.innerText) {
        gap7.innerText = "X";
        checkLine();
    }
})
o7.addEventListener('click', function() {
    if (!gap7.innerText) {
        gap7.innerText = "O";
        checkLine();
    }
})

//adding functionality to X8 and O8 Buttons
x8.addEventListener('click', function() {
    if (!gap8.innerText) {
        gap8.innerText = "X";
        checkLine();
    }
})
o8.addEventListener('click', function() {
    if (!gap8.innerText) {
        gap8.innerText = "O";
        checkLine();
    }
})

//adding functionality to X9 and O9 Buttons
x9.addEventListener('click', function() {
    if (!gap9.innerText) {
        gap9.innerText = "X";
        checkLine();
    }
})
o9.addEventListener('click', function() {
    if (!gap9.innerText) {
        gap9.innerText = "O";
        checkLine();
    }
})

//full grid function
function fullGaps() {
    for (let i = 0; i < gaps.length; i++){
        if (gaps[i].innerText === "") {
            return false;
        }
    }
    return true;
}

//clear grid function:
function clearGrid() {
    gap1.innerText = "";
    gap2.innerText = "";
    gap3.innerText = "";
    gap4.innerText = "";
    gap5.innerText = "";
    gap6.innerText = "";
    gap7.innerText = "";
    gap8.innerText = "";
    gap9.innerText = "";
}

//winning and drawing condition
function checkLine() {
 if (
   (gap1.innerText === "X" && gap2.innerText === "X" && gap3.innerText === "X") ||
   (gap1.innerText === "X" && gap5.innerText === "X" && gap9.innerText === "X") ||
   (gap1.innerText === "X" && gap4.innerText === "X" && gap7.innerText === "X") ||
   (gap2.innerText === "X" && gap5.innerText === "X" && gap8.innerText === "X") ||
   (gap3.innerText === "X" && gap6.innerText === "X" && gap9.innerText === "X") ||
   (gap3.innerText === "X" && gap5.innerText === "X" && gap7.innerText === "X") ||
   (gap4.innerText === "X" && gap5.innerText === "X" && gap6.innerText === "X") ||
   (gap7.innerText === "X" && gap8.innerText === "X" && gap9.innerText === "X")
 ) {
   counterX++;
   clearGrid();
   winner.innerText = playerxname.innerText.toUpperCase() + ' WON !' ;
 } else if (
   (gap1.innerText === "O" && gap2.innerText === "O" && gap3.innerText === "O") ||
   (gap1.innerText === "O" && gap5.innerText === "O" && gap9.innerText === "O") ||
   (gap1.innerText === "O" && gap4.innerText === "O" && gap7.innerText === "O") ||
   (gap2.innerText === "O" && gap5.innerText === "O" && gap8.innerText === "O") ||
   (gap3.innerText === "O" && gap6.innerText === "O" && gap9.innerText === "O") ||
   (gap3.innerText === "O" && gap5.innerText === "O" && gap7.innerText === "O") ||
   (gap4.innerText === "O" && gap5.innerText === "O" && gap6.innerText === "O") ||
   (gap7.innerText === "O" && gap8.innerText === "O" && gap9.innerText === "O")
 ) {
   counterO++;
   clearGrid();
   winner.innerText = playeroname.innerText.toUpperCase() + ' WON !' ;
 } else if (fullGaps()) {
    clearGrid();
 }
 playerxscore.innerText = counterX;
 playeroscore.innerText = counterO;
}

if (!fullGaps()) {
    winner.in
}



