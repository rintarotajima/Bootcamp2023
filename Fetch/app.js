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



const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
console.log(fetchPromise);

// fetch()APIを呼び出し、その返り値をfetchPromiseへ代入している →fetch()を呼び出すとPromiseが返ってくる
// fetchPromiseをログに出力する、Promsieオブジェクトがあり、Promise　{:pending}であり、読み取り処理が進行中であることを示す

// fetchPromise.then((response) => {
//     console.log(`レスポンスを受信:${response.status}`);
// })

//then()メソッドにハンドラ関数を渡し、読み込みに成功するとプロミスはハンドラーが呼び出されて、サーバーのレスポンスが格納された
//Responseオブジェクトが渡される


console.log('リクエスト開始...');

/* 出力例 
    Promise {<pending>}
    リクエスト開始...
    レスポンス受信:200
*/

fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
        console.log(data[0].name);
    })
})

/* 
プロミスの連鎖
fetch()APIでは、Responseオブジェクトを取得したら、別の関数を呼び出してレスポンスデータを取得する必要がある
レスポンスデータをJSONで取得したいので、Responseオブジェクトのjson()メソッドを呼び出す
ここで、json()も非同期関数であることから、2つの非同期関数を連続で呼び出すことになる
*/

/* 
41行目と63~68行目のまとめ 
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



