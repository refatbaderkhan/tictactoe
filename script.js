
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

//assigning variables to Grid Gaps
let gap1 = document.getElementById('gap1')
let gap2 = document.getElementById('gap2')
let gap3 = document.getElementById('gap3')
let gap4 = document.getElementById('gap4')
let gap5 = document.getElementById('gap5')
let gap6 = document.getElementById('gap6')
let gap7 = document.getElementById('gap7')
let gap8 = document.getElementById('gap8')
let gap9 = document.getElementById('gap9')

//adding functionality to X1 and O1 Buttons
x1.addEventListener('click', function() {
    if (!gap1.innerText) {
    gap1.innerText = "X";
    }
})

o1.addEventListener('click', function() {
    if (!gap1.innerText) {
    gap1.innerText = "O";
    }
})

//adding functionality to X2 and O2 Buttons
x2.addEventListener('click', function() {
    if (!gap2.innerText) {
    gap2.innerText = "X";
    }
})

o2.addEventListener('click', function() {
    if (!gap2.innerText) {
    gap2.innerText = "O";
    }
})

//adding functionality to X3 and O3 Buttons
x3.addEventListener('click', function() {
    if (!gap3.innerText) {
    gap3.innerText = "X";
    }
})

o3.addEventListener('click', function() {
    if (!gap3.innerText) {
    gap3.innerText = "O";
    }
})

//adding functionality to X4 and O4 Buttons
x4.addEventListener('click', function() {
    if (!gap4.innerText) {
    gap4.innerText = "X";
    }
})

o4.addEventListener('click', function() {
    if (!gap4.innerText) {
    gap4.innerText = "O";
    }
})

//adding functionality to X5 and O5 Buttons
x5.addEventListener('click', function() {
    if (!gap5.innerText) {
    gap5.innerText = "X";
    }
})

o5.addEventListener('click', function() {
    if (!gap5.innerText) {
    gap5.innerText = "O";
    }
})

//adding functionality to X6 and O6 Buttons
x6.addEventListener('click', function() {
    if (!gap6.innerText) {
    gap6.innerText = "X";
    }
})

o5.addEventListener('click', function() {
    if (!gap6.innerText) {
    gap6.innerText = "O";
    }
})

//adding functionality to X7 and O7 Buttons
x7.addEventListener('click', function() {
    if (!gap7.innerText) {
    gap7.innerText = "X";
    }
})

o7.addEventListener('click', function() {
    if (!gap7.innerText) {
    gap7.innerText = "O";
    }
})

//adding functionality to X8 and O8 Buttons
x8.addEventListener('click', function() {
    if (!gap8.innerText) {
    gap8.innerText = "X";
    }
})

o8.addEventListener('click', function() {
    if (!gap8.innerText) {
    gap8.innerText = "O";
    }
})

//adding functionality to X9 and O9 Buttons
x9.addEventListener('click', function() {
    if (!gap9.innerText) {
    gap9.innerText = "X";
    }
})

o9.addEventListener('click', function() {
    if (!gap9.innerText) {
    gap9.innerText = "O";
    }
})
