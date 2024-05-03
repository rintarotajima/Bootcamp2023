// const multiply = (x, y) => x * y;

// const square = x => multiply(x, x);

// const isRightTriangle = (a, b, c) => {
//     square(a) + square(b) === square(c);
// }

// isRightTriangle(3, 4, 5);


/* 
コールスタック
JavaScriptの関数呼び出しの内部の仕組みてきなもの
*/

// console.log('スタート');

// setTimeout(() => {
//     console.log('setTimeout内部');
// },1000);

// Promise.resolve()
//     .then(() => console.log('Promise次のtick'))
//     .then(() => console.log('Promise次の次のtick'))


// console.log('終了');


/*
この例では、JavaScriptのイベントループの動作を示しています。
console.log('スタート');が実行され、'スタート'が出力されます。
setTimeout関数が呼び出されますが、タイマーはイベントキューに入れられるだけで、即座には実行されません。
Promise.resolve()は新しいPromiseオブジェクトを作成し、それは即座に解決(resolve)状態になります。.thenハンドラはマイクロタスクキューに入れられます。
console.log('終了');が実行され、'終了'が出力されます。
コールスタックが空になると、イベントループはマイクロタスクキューからタスクを取り出し実行します。そのため、'Promise次のtick'と'Promise次の次のtick'が出力されます。
マイクロタスクキューが空になると、イベントループはタスクキュー(この場合はsetTimeoutのタイマー)を確認し、'setTimeout内部'を出力します。 
*/

/* 
    コールスタックとは？
    ・現在実行中の関数呼び出しを記録するstack構造のデータ構造
    ・関数が呼び出されると、コールスタックにプッシュされ、関数が終了するとポップされる
    ・コールスタックがあるため、再帰呼び出しが可能

    イベントキューとは？
    ・非同期処理(setTimeoutやHTTPリクエストなど)のコールバック関数が入るキュー
    ・非同期処理が完了すると、そのコールバック関数がイベントキューに入る
    ・コールスタックが空になった時、イベントキューからコールバック関数がコールスタックにプッシュされる

    マイクロタスクキューとは？
    ・Promiseのthenやcatchコールバックなどが入るキュー
    ・マイクロタスクキューはイベントキューより優先度が高い
    ・コールスタックが空になると、マイクロタスクキューが実行され、マイクロタスクキューが空になったら、イベントキューが実行される

    関数呼び出し状態とは？
    JavaScriptのコートが実行される際の状態を指す
    コードの実行は以下の3つの状態を行き来しながら進む
    1. コードスタック（実行コンテキスト）にプッシュされる
        ・このとき、関数呼び出しの状態にある
    2. コードが実行される
        ・プッシュされた実行コンテキストに基づいて、関数内のコードが実行される
        ・この際、さらに別の関数が呼び出されたとき、その関数の実行コンテキストがコールスタックに積まれる
    3. コールスタックからポップされる
        ・関数の処理が終了すると、その関数は実行コンテキストからポップされる
        ・呼び出し元の関数に制御が戻る

    関数を呼び出すとは？
    関数を呼び出すとは、単に関数を実行するためにその関数の名前とかっこを書いて呼び出すことを指す
    

*/



// function foo() {
//     console.log('foo関数の処理')
// }

// function bar() {
//     console.log('bar関数の開始')
//     foo(); // foo関数を呼び出す
//     console.log('bar関数の終了')
// }

// bar();

/* 
実行の流れ 
bar()→callstack
console.log('boo関数の開始')→callstack→実行コンテキストに基づいて実行→コールスタックからポップ
foo()→callstack
console.log('foo関数の処理')→callstack→実行コンテキストに基づいて実行→コールスタックからポップ
foo();がコールスタックからポップ
console.log('bar関数の終了')→callstack→実行コンテキストに基づいて実行→コールスタックからポップ
boo();がコールスタックからポップ
*/


/*
非同期処理とは？　
ある処理が完了するのを待たずに、次の処理を実行できることを指す
同期処理とは？
ある処理が完了するまで、次の処理が実行されないことを指す
*/


// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000)
//     }, 1000)
// }, 1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('olive', 1000, () => {
                delayedColorChange('teal', 1000)
            })
        })
    })
})

/* 
コールバック地獄とは、複数の非同期処理が絡むことで、コードの可読性が落ちることを指す.
そこで、ES6 からPromiseやAsync・awaitが導入され、非同期処理をより簡潔に扱えるようにした

*/