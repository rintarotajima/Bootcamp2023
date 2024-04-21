// console.log("Javascriptの世界へようこそ");
// console.log("Javascriptの冒険へ行くぞ");

// const age = 25;

// if (age < 5) {
//     console.log("無料で映画をご覧になれます");
// } else if (age < 12) {
//     console.log("500円で映画をご覧になれます");
// } else if (age < 15) {
//     console.log("700円で映画をご覧になれます");
// } else {
//     console.log("あなたは年齢制限によって映画をご覧になれません");
// }

// const dayOfWeek = prompt("曜日を英語で入力してください").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("今日はプロ野球の試合がない");
// } else {
//     console.log("今日はプロ野球の試合がある");
// }

// const num = 102;

// if (num <= 100) {
//     if (num >= 50) {
//         console.log("ほげ");
//     }
// } else {
//     if (num < 103) {
//         if (num % 2 === 0) {
//             console.log("正解!");
//         }
//     }
// }

// const playerScore = 120;
// const playTime = 60;
// const levelCleared = true;

// if (playerScore >= 100 && playTime >= 60 && levelCleared) {
//     console.log("特別なアイテムを獲得しました");
// } else {
//     console.log("条件を満たしていません");
// }

// const playedScore = 80;
// const playingTime = 30;
// const levelClear = false;

// if (playedScore >= 100 || playingTime <= 60 || levelClear) {
//     console.log("特別なアイテムを獲得しました");
// } else {
//     console.log("条件を満たしていません");
// }

// // ユーザの年齢と住所
// const userAge = 17;
// const userCountry = "Japan";

// if (!(userAge >= 18 && userCountry === "Japan")) {
//     console.log("特定のメッセージを表示します");
// } else {
//     console.log("条件を満たしていません");
// }


//　ユーザからの入力を取得
// let userInput = prompt("1から4の数字を入力してください");

// switch(userInput) {
//     case "1":
//         alert("あなたは1を選択しました");
//         break;
//     case "2":
//         alert("あなたは2を選択しました");
//         break;
//     case "3":
//         alert("あなたは3を選択しました");
//         break;
//     case "4":
//         alert("あなたは4を選択しました");
//         break;
//     default:
//         alert("無効な数字です，1から4の数字を入力してください");
// }

// for (i = 1; i <= 10; i = i + 1) {
//     console.log(i);
// }

// for (i = 2; i <= 20; i = i + 2) {
//     console.log(i);
// }

// let count = 0;
// while ( count < 10) {
//     count++;
//     console.log(count);
// }

// const SECRET = 'superchat';

// let guess = '';
// while ( guess !== SECRET ) {
//     guess = prompt("秘密のコードを入力してください");
// }
// console.log("正解,おめでとう!");

// let maximum = parseInt(prompt("何か数字を入力してください:"));
// while (!maximum) {
//     maximum = parseInt(prompt("エラーが起きました.有効な数字を入力してください:"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = (prompt("数字を入力してください:"))
// let count = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') {
//         break;
//     }
//     count++;
//     if (guess > targetNum) {
//         guess = (prompt("入力値は期待値より大きいです"));
//     } else {
//         guess = (prompt("入力値は期待値より小さいです"));
//     }
// }
// if (guess === 'q') {
//     console.log("お疲れさまでした");
// } else {
//     console.log(`${count}回目で正解できた`);
// // }

// const numbers = [1,2,3,4,5,6,7,8,9];

// for (const number of numbers) {
//     console.log(number);
// }

// const testScores = {
//     ken: 80,
//     yuki: 67,
//     taro: 89,
//     ryota: 90,
//     yuma: 72,
//     chiaki: 83,
//     kota: 97,
//     saeko: 81,
// }

// for (const student of Object.keys(testScores)) {
//     console.log(`${student}は${testScores[student]}点です`);
// }
// let userInput = prompt("コマンドを入力してください(new, list, delete, quit)");
// let todos = [];


// while (userInput !== "quit") {

//     if (userInput === "new") {
//         let newTodo = prompt("新しいTodoを入力してください");
//         todos.push(newTodo);
//         console.log(`「${newTodo}」を追加しました`);
//     }
//     else if (userInput === "list") {
//         console.log("***********");
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log("***********");
//     }
//     else if (userInput === "delete") {
//         let deleteTodo = parseInt(prompt("削除するインデックスを入力してください"));
//         if (!Number.isNaN(deleteTodo)) {
//            let removed = todos.splice(deleteTodo, 1);
//             console.log(`${removed}を削除しました`);
//         } else {
//             console.log("有効な数字を入力してください");
//         }
//     }
//     userInput = prompt("コマンドを入力してください(new, list, delete, quit)"); // ここでuserInputの値を更新
// }

// console.log("アプリを終了しました");

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// for (let prop in obj) {
//     console.log(prop + ":" + obj[prop]);
// }

// let arr = [1, 2, 3];

// for (let value of arr) {
//     console.log(value);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// // 関数の作り方
// function printHeart() {
//     console.log('<3');
// }

// printHeart();

// function shout(message) {
//     console.log(`${message}`.toUpperCase());
//     console.log(`${message}`.toUpperCase());
//     console.log(`${message}`.toUpperCase());
// }

// shout("hello world");

// function isSameNumbers(num1, num2) {
//     if (num1 === num2) {
//         console.log("ゾロ目");
//     }
//     else {
//         console.log("ゾロ目じゃない");
//     }
// }

// isSameNumbers(1, 1);
// isSameNumbers(2, 2);
// isSameNumbers(3, 4);


// function multiply(num1, num2) {
//     return num1 + num2;
// }

// console.log(multiply(1, 4));
// console.log(multiply(2, 10));

// function isShortsWeather(temperature) {
//     if (temperature > 25) {
//         return true;
//     }
//     return false;
// }

// console.log(isShortsWeather(15));

// function lastElement(array) {
//     if (array !== 0) {
//         return array[array.length - 1]
//     }
//     return null;
// }

// console.log(lastElement(["a", "b"]));

// function capitalize(s) {
//     return s[0].toUpperCase() + s.slice(1);
// }

// console.log(capitalize("egg"));

// function sumArray(num) {
//     let sum = 0;
//     for (i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3]));

// function returnDay(num) {
//     const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     if (num >= 0 && num <= 7) {
//         return daysOfWeek[num - 1];
//     } else {
//         return null;
//     }
// }

// console.log(returnDay(1));
// console.log(returnDay(3));
// console.log(returnDay(5));


// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg: function () {
//         this.eggCount += 1;
//         return "EGG"
//     }
// }

// var a = 100;
// function func() {
//     var b = 100;
//     c = 100;
//     console.log(a,b,c);
// }

// function func(){
// 	var a = 100;
// 	if(true){
// 		var a = 200;
// 		console.log( a ); //200
// 	}
// 	console.log( a ); //200
// }
// func();

// function funcScope() {
//     let myFuncVar1 = 'myFuncVar1'; // これが関数スコープの変数です
//     console.log(myFuncVar1);
//   }

//   funcScope();
//   console.log(myFuncVar1);

// 関数式
// function isCanable(text) {
//   return text.length <= 140;
// }

// console.log(isCanable('foo'));

// const isTweetable = function (text) {
//   return text.length <= 140;
// }

// console.log(isTweetable('foo'));


// 高階関数
// コールバックとして実行される関数
// function hello() {
//   console.log("hello");
// }
// // コールバックを実行する関数
// function execute(callback) {
//   // コールバックを実行する
//   callback();
// }

// execute(hello);

// コードの流れ
/*355行目で「execute」関数を実行
  その際の引数として，hello関数を渡す
  350行目の「execute」関数が呼び出されて，引数のcallback変数にhello関数が渡る
  352行目でcallback()を付けて関数を実行する
  346行目のhello関数が呼ばれる
  helloという文字列が出力される
 */

// function execute() {
//   function hello() {
//     console.log("hello");
//   }
//   hello();
// }

// execute();

// forEachメソッド 与えられた関数を，配列の各要素に対して一度ずつ実行する
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// print(numbers[0]);

// numbers.forEach(
//   function (element) {
//     console.log(element);
//   });


// const movies = [
//   {
//     title: 'Amadeus',
//     score: 99
//   },
//   {
//     title: 'Stand By Me',
//     score: 86
//   },
//   {
//     title: 'Parasite',
//     score: 95
//   },
//   {
//     title: 'Alien',
//     score: 75
//   }
// ];

// movies.forEach(
//   function (movie) {
//     console.log(`${movie.title}-${movie.score}/100`)
//   }
// );

// アロー関数のまとめ
// const newMovies = movies.map(function (movie) {
//   return `${movie.tile} - ${movie.score / 10}`;
// })
// const newMovies = movies.map ( (movie) => {
//   return `${movie.title} ${movie.score}/10`;
// })
// const newMovies = movies.map( movie => ( `${movie.title} ${movie.score}/10`));





// //mapメソッド 与えられた関数を配列のすべての要素に対して呼び出し，新たな配列を生成する
// const doubles = numbers.map(function (num) {
//   return num * 2;
// })


// const titles = movies.map(function (movie) {
//   return `${movie.title}`;
// })


// アロー関数式
// const greet = (String) => {
//   return `Hey ${String}!`;
// }

// greet("abc");

// アロー関数の暗黙的なreturn
/* 関数本体が単一の式である場合に，自動的にその式を値返すことができる
機能がある*/

// 通常の関数
// function multiply(a,b) {
//   return a * b;
// }

// console.log(multiplay(5,5));

// // アロー関数　-暗黙的なreturn-
// const multiply = (a,b) => a * b



// setTImeoutメソッド
// setTimeout(() => {
//   console.log("おはよう");
// },1000);


// //setInterValメソッド
// const id = setInterval(() => {
//   console.log(Math.random());
// },2000);

// // clearIntervalメソッド
// clearInterval();


// reduceメソッド 

const prices = [1220, 2440, 3660, 4880, 5000];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

prices.reduce( (total, price) => total += price )

// 配列の要素の最小値を当てるコード
const minPrices = prices.reduce( (min, price) => {
  if (min > price) {
    return price; // minに入った値がpriceに入った値より大きい場合，最小値はpriceになるから
  }
  return min; // それ以外の時はminに入った値を返すと最小値になる
})


// モダンなJavaScriptの機能
// デフォルトパラメータ（関数の引数に初期を設定でき，引数が渡されなかった場合でもデフォルト値を使って実行できる)
// 構文 funciton 関数名(引数1 = デフォルト値1, 引数2 = デフォルト値2, ...) { // 関数の処理}

function mymultiply(a,b=1) {
  return a * b;
}

console.log(mymultiply(5,3)); //15
console.log(mymultiply(5)); //5

// この例では，mymultiply関数の第2引数bにデフォルト値1を設定し，
// mymultiply(5,3)と呼び出すと，aは5,bは3となる，15が返される
// mymultiply(5)と呼び出すと，bには1がデフォルト値で設定されているので，5が返される


/* デフォルトパラメータを使うと，関数の呼び出し側で引数を渡し忘れた場合でも
エラーにならずに適切な処理ができるようになり，可読性が向上される */

// デフォルトパラメータ演習
function greet(name = 'Sam', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greet('Kate', 'Hi')); // Hi, Kate!
console.log(greet()); // Hello, Sam!
console.log(greet('Alex'))// Hello,Alex!

function calcSum(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(calcSum(1, 2, 3)); // 6
console.log(calcSum(1, 2)); // 3
console.log(calcSum(1)); // 1
console.log(calcSum()); // 0


function displayInfo(name, age = 25, city = 'Tokyo') {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

displayInfo('John', 30, 'NewYork'); // Name: John, Age: 30, City: NewYork
displayInfo('Emily'); // Name: Emily, Age: 25, City: Tokyo
displayInfo('Mike', undefined, 'Sydney'); // Name; Mike, Age: 25, City: Sydney


// 関数呼び出しにおけるスプレッド構文
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum.apply(null, numbers)); //6
console.log(sum(...numbers)); //6

// スプレッド構文を使うと，配列の要素を個別の引数として関数に渡すことができる
// 従来は，配列をそのまま関数に渡すと．1つの引数として扱われる


// 配列リテラルにおけるスプレッド構文
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
const copied = [...arr1] // [1, 2, 3]
// スプレッド構文を使うと，既存の配列から新しい配列を作成できたり，結合できたりする


// オブジェクトにおけるスプレッド構文
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3 }
const copy = { ...obj1 }; // { a: 1, b: 2 }

// スプレッド構文を使うと，既存のオブジェクトから新しいオブジェクトを作成できたり，結合できたりする


//　レスト構文：複数の要素を単一の配列にまとめる
function sum1(...numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}

sum1(1, 2, 3); //6
sum1(4, 5, 6, 7, 8); // 30

// 配列の分割にも使える
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2,3,4,5]