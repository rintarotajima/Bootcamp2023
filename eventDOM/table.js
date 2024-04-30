const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const winScoreSelect = document.querySelector('#winScore');
const resetButton = document.querySelector('#resetbutton');

let p1Score = 0;
let winScore = 3;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver === true) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver === true) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === winScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

resetButton.addEventListener('click', reset)

winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
})


function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}




