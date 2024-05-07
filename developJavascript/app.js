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





/* 
Promiseとは
*/

// console.log('一番目');

// setTimeout( () => {
    //     console.log('二番目 (一秒後に実行)');
    // },1000)
    
    // console.log('三番目');
    
    // JavaScriptは非同期言語であるため、１つ前の処理に実行に時間が掛かる場合は、実行完了を待たずに次の処理をする
    
    // console.log('一番目');
    
    // // お約束を取り付けたい処理
    // new Promise((resolve) => {
        //     // 一秒後に実行する処理
        //     setTimeout(() => {
            //         console.log('二番目');
            //         // 無事処理が終わったことを伝える
            //         resolve();
            //     },1000)
            // }).then(() => {
                //     // 処理が無事終わったことを受け取って実行される処理
                //     console.log('三番目');
                // })
                
                // // Promiseインスタンスの作成
                // const promise = new Promise((resolve, reject) => {
                    //     reject();
// }).catch(() => {
//     console.log('resolveしたよ');
// })


/* 復習 (背景色を変える)*/
// document.body.style.backgroundColor = 'red'; // 背景：レッド
// document.body.style.backgroundColor = 'orange'; // 背景：オレンジ
// 上記のコードの結果、オレンジのみ表示される

// 動的に背景色を変更
// setTimeout(() => {
    //     document.body.style.backgroundColor = 'red';
    // }, 1000)
    
    // setTimeout(() => {
        //     document.body.style.backgroundColor = 'orange';
        // }, 2000)
        
        // setTimeout(() => {
            //     document.body.style.backgroundColor = 'yellow';
            // }, 3000)
            
            // 上記のコードの結果、背景色がレッド→オレンジ→イエローになる
            /* 
            欠点 
            可読性が低い：複数のsetTimeout関数が並んであるため、コードの見通しが悪く、何が起こるか把握しにくい
            コードの保守性が低い：setTimeoutの中身が直接書かれているため、再利用できない, コードを変更する際に関連する部分を全て編集しないといけない
            */
           
           
           /* また、上記のコードをネストすることで再現できる */
           // setTimeout(() => {
               //     document.body.style.backgroundColor = 'red';
               //     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
    //             document.body.style.backgroundColor = 'yellow';
    //         }, 1000)
    //     }, 1000)
    // }, 1000)
    
    // しかし、ネストしたコードは可読性・保守性が低い.
    
    /* 3→関数を作って、背景色を変更 */
    const delayColorChange = (newColor, delay, doNext) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            doNext && doNext();
        }, delay)
    }
    
    // delayColorChange('red', 1000);
    // delayColorChange('orange', 2000);
    // delayColorChange('yellow', 3000);
    
    // 上記のコードは 1 & 2 のコードより可読性・保守性が向上し、再利用性が高いなどのメリットが生まれた

    delayColorChange('red', 1000, () => {
        delayColorChange('orange', 1000, () => {
            delayColorChange('yellow', 1000);
        })
    })

    // 上記のコードは、3 のコードに、delayColorChange関数を高階関数にしたものである
    /* 高階関数とは、関数を引数に取ったり、関数を返す関数のことを指す */
    
    
    /* 生じた疑問 
    const delayColorChangeは定数でなく関数になる理由
    constでは、delayColorChangeオブジェクト自体を定数として宣言しているが、そのオブジェクトの値は関数である
    よって、delayColorChangeは関数オブジェクトである。
    
    JavaScriptでは、関数もオブジェクトの一種として扱われる
    よって、関数を定数に代入したり、引数として渡したり、返り値として返したりできる
    関数を変数に代入する利点
    ・関数に名前をつけられる
    ・関数を簡単に渡したり返したりできる
    ・無名関数を使わずに済む
    
    */
   
   // コールバックを使ったダミーリクエスト
   // コールバック関数とは引数として他の関数に渡され、外側の関数の中で呼び出されて、何らかのルーチンやアクションを完了させる関数
   const fakeRequest = (url, success, failure) => {
       const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('コネクションアウト');
        } else {
            success(`ダミーデータ：${url}`)
        }
    }, delay);
}


fakeRequest('book.com/page1', function (res) {
    console.log('成功');
    console.log(res);
    fakeRequest('book.com/page2', function (res) {
        console.log('成功');
        console.log(res);
        fakeRequest('book.com/page3', function (res) {
            console.log('成功');
            console.log(res);
        }, function (err) {
            console.log('エラー3');
            console.log(err);
        })
    }, function (err) {
        console.log('エラー2');
        console.log(err);
    })
}, function (err) {
    console.log('エラー1');
    console.log(err);
})


/*
コールバック地獄とは、複数の非同期処理が絡むことで、コードの可読性が落ちることを指す.
そこで、ES6 からPromiseやAsync・awaitが導入され、非同期処理をより簡潔に扱えるようにした
*/



