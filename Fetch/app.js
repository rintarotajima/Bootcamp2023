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

fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json") 
    .then((response) => response.json()) 
    .then((data) => console.log(data[0].name))
    .catch((error) => {
        console.error('Error',error);
    })

// 98行目から103行目までの意味
// 98　fetch()関数を用いて、指定されたURLから非同期にJSONデータを取得するためで、Promiseを返す
// 99 返されたPromiseが解決された場合、thenに渡されたコールバック関数が呼び出される
//    コールバック関数は,responseを引数として受け取り、response.json()を実行する 
//    response.json()は、レスポンスの本文をJSON形式で読み取るPromiseを返す
// 100 response.json()から返されたPromiseが解決した場合に、.thenに渡されたコールバック関数が呼び出される
//    コールバック関数は、dataを引数として受け取り、dataの最初の要素のnameを出力する
// 101 catch()は、Promiseチェーンの中で発生したエラーを処理するためのもの




