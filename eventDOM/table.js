const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

p1button.addEventListener('click', updateP1score);

function updateP1score() {
    p1Score += 1;
}