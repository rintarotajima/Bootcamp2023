# JavaScriptのStringなどなど

## Stringとは？
JSのプリミティブ型の１つで、文字列を表す。

## 基本構文
``` JavaScript
const user = "John Doe"; // ダブルクオーテーション
const user = 'John Doe'; // シングルクオーテーション
// クウォーテーションの種類を統一する。先頭がダブルクオーテーションなら、その後もダブルクオーテーションを使う。
```

## インデックスとlength
文字列の各文字には、0から始まるインデックスがある。
``` JavaScript
const userName = "Steve Jobs";
console.log(userName[0]); // S
console.log(userName[1]); // t
console.log(userName[2]); // e
console.log(userName[3]); // v
console.log(userName[4]); // e
console.log(userName[5]); // " "
console.log(userName[6]); // J
console.log(userName[7]); // o
console.log(userName[8]); // b
console.log(userName[9]); // s
```

lengthプロパティを使うと、文字列の長さを取得できる。
``` JavaScript
const userName = "Steve Jobs";
console.log(userName.length); // 10
console.log(userName[userName.length - 1]); // s インデックスは0から始まるので、最後の文字を取得するには、length - 1 する。
```








