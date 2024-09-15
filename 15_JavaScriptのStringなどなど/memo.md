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
### 文字列の連結
JSでは、文字列を連結をすることができる。
``` JavaScript
const firstName = "Shohei";
const lastName = "Ohtani";
const fullName = fisrtName + "" + lastName;
console.log(fullName); // 'Shohei Ohtani'
```

## Stringのメソッド
文字列にはあらかじめ、組み込まれたメソッドがあり、特定の操作ができる。

``` JavaScript　
things.method(); // ()をつける
```

### 例題
messageという変数があり、その値を返ることなく、小文字に変換したものをwhisperという変数に入れ、両端の空白を取り除いてください。

``` JavaScript
const message = "  TASTE THE RAINBOW  "
const whisper = message.trim().toLowerCase();
// "taste the rainbow"
```

## Stringメソッドに引数を渡す
Stringのメソッドに引数を渡すことで、動作する操作も存在する。

例題
``` JavaScript
// wordの値をbeardに変更する。
const word = 'skateboard'
// Stringのslice()とreplace()を使う。
const facialHair = word.slice(5).replace("o", "e")
// beard
```
## 便利なテンプレートリテラル
テンプレートリテラルを使うと、変数や式を文字列内で使えるようになり、+などの記号を減らすことができる。
例題：抹茶アイス3個の値段は500円です。
``` JavaScript
const product = "抹茶アイス" + 3 + "個の値段は" + 500 +"円です。"
const pieces = 3;
const price = 500;
const total = `抹茶アイス${pieces}個の値段は${price}円です`
```








