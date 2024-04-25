const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// クリックすると処理が実行されるかの確認
// クリックすると背景色がランダムに変更させる機能の追加
button.addEventListener("click", () => {
    const newColor = makeColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

const makeColor = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // rgb値の合計を計算
    const total = r + g + b;
    if (total < 300) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }

    return `rgb(${r},${g},${b})`;
}




