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


/* 
気付いたこと： 何をしたいのかを頭の中で整理する時間をもう少し自分で考えてみる
              手段を調べてみる
              調べてもわからなかったことはとりあえず，AIに聞いてコードを書く
              コードを書いてから理解する
*/

/* 
関数式(function式)と関数(function)宣言の違い

showMessage(); //Hello

function showMessage() {
    console.log("hello");
}
関数宣言は，JavaScriptがスクリプトやコードブロックを実行する前に，関数オブジェクトを作る
つまり，関数が処理されてから実行が続けられる
そのため，定義された関数の前で関数を呼び出すことができる

showMessage();
// 'Uncaught ReferenceError: Cannot access 'showMessage' before initialization'

const showMessage = function() {
  console.log('Hello');
};

関数式は、その式が実行されるときに関数オブジェクトを生成するため、定義された関数の前で関数を呼び出すとエラーを起こします。
そのため、関数式の定義の後に、関数を呼び出す必要がある.
*/




