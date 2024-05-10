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

