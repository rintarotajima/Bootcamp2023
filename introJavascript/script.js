console.log("Javascriptの世界へようこそ");
console.log("Javascriptの冒険へ行くぞ");

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

const playerScore = 120;
const playTime = 60;
const levelCleared = true;

if (playerScore >= 100 && playTime >= 60 && levelCleared) {
    console.log("特別なアイテムを獲得しました");
} else {
    console.log("条件を満たしていません");
}

const playedScore = 80;
const playingTime = 30;
const levelClear = false;

if (playedScore >= 100 || playingTime <= 60 || levelClear) {
    console.log("特別なアイテムを獲得しました");
} else {
    console.log("条件を満たしていません");
}

// ユーザの年齢と住所
const userAge = 17;
const userCountry = "Japan";

if (!(userAge >= 18 && userCountry === "Japan")) {
    console.log("特定のメッセージを表示します");
} else {
    console.log("条件を満たしていません");
}


//　ユーザからの入力を取得
let userInput = prompt("1から4の数字を入力してください");

switch(userInput) {
    case "1":
        alert("あなたは1を選択しました");
        break;
    case "2":
        alert("あなたは2を選択しました");
        break;
    case "3":
        alert("あなたは3を選択しました");
        break;
    case "4":
        alert("あなたは4を選択しました");
        break;
    default:
        alert("無効な数字です，1から4の数字を入力してください");
}
