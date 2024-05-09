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


const loadStarWarsPeople = async () => {
    try {
    const res1 = await fetch('https://swapi.dev/api/people/1');
    const data1 = await res1.json();
    console.log(data1);

    const res2 = await fetch('https://swapi.dev/api/people/2');
    const data2 = await res2.json();
    console.log(data2);
    }
    catch (e) {
        console.log('エラー!!!', e);
    }
}

loadStarWarsPeople();
