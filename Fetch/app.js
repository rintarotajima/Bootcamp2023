// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log('RESOLVE!!!', res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log('JSONデータ', data);
//         return fetch('https://swapi.dev/api/people/2')
//     })
//     .then((res) => {
//         console.log('RESOLVE2!!!', res);
//         return res.json()
//     })
//     .then((data2) => {
//         console.log('JSONデータ2', data2);
//     })
//     .catch((err) => {
//         console.log('エラー!!!', err);
//     })


// const loadStarWarsPeople = async () => {
//     try {
//     const res1 = await fetch('https://swapi.dev/api/people/1');
//     const data1 = await res1.json();
//     console.log(data1);

//     const res2 = await fetch('https://swapi.dev/api/people/2');
//     const data2 = await res2.json();
//     console.log(data2);
//     }
//     catch (e) {
//         console.log('エラー!!!', e);
//     }
// }

// loadStarWarsPeople();

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// console.log(fetchPromise);

// fetch()APIを呼び出し、その返り値をfetchPromiseへ代入している →fetch()を呼び出すとPromiseが返ってくる
// fetchPromiseをログに出力する、Promsieオブジェクトがあり、Promise　{:pending}であり、読み取り処理が進行中であることを示す

// fetchPromise.then((response) => {
//     console.log(`レスポンスを受信:${response.status}`);
// })

//then()メソッドにハンドラ関数を渡し、読み込みに成功するとプロミスはハンドラーが呼び出されて、サーバーのレスポンスが格納された
//Responseオブジェクトが渡される

// console.log('リクエスト開始...');


/* 出力例 
Promise {<pending>}
リクエスト開始...
レスポンス受信:200
*/

// fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data[0].name);
//     })
// })

/* 
プロミスの連鎖
fetch()APIでは、Responseオブジェクトを取得したら、別の関数を呼び出してレスポンスデータを取得する必要がある
レスポンスデータをJSONで取得したいので、Responseオブジェクトのjson()メソッドを呼び出す
ここで、json()も非同期関数であることから、2つの非同期関数を連続で呼び出すことになる
*/

/* 
39行目と61~66行目のまとめ 
fetch()APIを呼び出して、Promiseオブジェクトが返ってくるため、それを定数に代入
Promise.then()とすることで、Promise(非同期処理)が成功した後の処理を実行する→
ここでは、サーバーからのレスポンスを受け取るためにResponseパラメータを引数として渡している
Responseオブジェクトを受け取った後、さらに、Responseオブジェクトからレスポンスデータをjsonで受け取るためにresponse.json()を呼び出して定数に代入
response.json()より返ってきたjsonデータの中身を取得するためにthen()を実行する
*/

/*
ここでコールバック関数は、fetch()が完了した後に呼び出される(response) => {}と、response.json()が完了した後に呼び出される(data) => {}である
コールバック関数とは、ある処理が完了した後に呼び出される関数のことである
よって、コールバック関数の中にコールバック関数があるということである
なぜ、このような関数をコールバックというのか？
1.非同期処理の'後'に実行するから
2. 指定した関数を呼び出す(コール)するから
ようするに後にコールするからコールバックと言われている
*/

/* 
Promiseチェーンを使うことによって、コールバック関数をネストしないで記述できる(98行~)
*/

// fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json") 
//     .then((response) => response.json()) 
//     .then((data) => console.log(data[0].name))
//     .catch((error) => {
//         console.error('Error',error);
//     })

// 98行目から103行目までの意味
// 98　fetch()関数を用いて、指定されたURLから非同期にJSONデータを取得するためで、Promiseを返す
// 99 返されたPromiseが解決された場合、thenに渡されたコールバック関数が呼び出される
//    コールバック関数は,responseを引数として受け取り、response.json()を実行する 
//    response.json()は、レスポンスの本文をJSON形式で読み取るPromiseを返す
// 100 response.json()から返されたPromiseが解決した場合に、.thenに渡されたコールバック関数が呼び出される
//    コールバック関数は、dataを引数として受け取り、dataの最初の要素のnameを出力する
// 101 catch()は、Promiseチェーンの中で発生したエラーを処理するためのもの



/* 非同期処理とは並行処理のことである
並行処理とは、ある処理とある処理を同時に実行すること
なぜ、非同期処理が必要なのか　→　効率がいいから
例 ) 家事のタスク：自分（掃除）兄（料理) 
それぞれのタスクが10分の時間を要するとき、掃除が終わってから料理をすると20分かかって効率が悪い
しかし、掃除と料理を同時に並行してやると、10分時間が効率が良い
こういうふうに、Webの世界で置き換えても同様である。
例）Webページが表示されるまで、「API経由でデータを取得する処理」と「データをデータベースから取得する処理」の2つが必要であると仮定したとき、
それぞれ10秒ずつ時間が掛かる場合、それぞれの処理を並行処理すると、10秒効率が良くなる
→ユーザにとって、Webページが10秒速く表示されることは、重要であることから非同期処理は需要が高まっている
*/


// setTimeout(() => {
//     console.log('掃除が完了しました')
// }, 5000)

// setTimeout(() => {
//     console.log('料理が完了しました')
// }, 5000)

// 5秒後に同時に結果が出力されていることから、並行処理が行われていたということである

// 次に、家事のタスクとして、妹にも以下のタスクが発生したとき、どうなるか
// 家事：掃除（10秒）、料理：[妹]:肉を切る（4秒）→　[兄]：肉を炒める（3秒）→　[妹]：肉に塩を振る（1秒) → [兄]：肉をお皿に盛る（2秒)
// ここで、並行処理を実行する場合でも、その処理が同期的な処理を含んでいるとき、次にようにする

setTimeout(() => {
    console.log('自分；掃除が完了しました'); 
}, 10000)


setTimeout(() => {
    console.log('妹：肉を切りました');
    setTimeout(() => {
        console.log('兄；肉を炒めました');
        setTimeout(() => {
            console.log('妹：肉に塩を振りました');
            setTimeout(() => {
                console.log('兄：肉をお皿に盛りました');
            }, 2000);
        }, 1000)
    }, 3000)
    
}, 4000)

// これで、家事の掃除、料理タスクが並行処理されて、料理タスクの処理は、順番に処理される 
// 出力順：妹：肉を切りました　→　兄：肉を炒めました　→　妹：肉に塩を振りました　→　自分；掃除が完了しました　→　兄：肉をお皿に盛りました