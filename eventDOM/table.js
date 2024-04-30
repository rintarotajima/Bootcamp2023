const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1Score')
}

const p2 = {
    score: 0,
    button:  document.querySelector('#p2button'),
    display: document.querySelector('#p2Score')
}

const winScoreSelect = document.querySelector('#winScore');
const resetButton = document.querySelector('#resetbutton');

let p1Score = 0;
let winScore = 3;
let p2Score = 0;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score +=1;
        player.display.textContent = player.score;

        // 2点差が付くまでは、スコアを更新する処理
        let maxScore = winScore + 2;
        while (Math.abs(player.score - opponent.score) < 2 && player.score < maxScore && opponent.score < maxScore) {
            player.score +=1;
            player.display.textContent = player.score;
        }

        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }

}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

resetButton.addEventListener('click', reset)

winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
})


function reset() {
    isGameOver = false;
   for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
   }
}




