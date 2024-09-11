# JavaScriptの基本


## プリミティブ型   
基本となるJavaScriptの構成要素
- Number(数値)
- String(文字列)
- Boolean(真偽値)
- undefined
- null

この5つのデータ型が良く使われる。
以下の2つはあまり使われない。
- Symbol
- BigInt

### Number(数値)
JSは数値の型が１つしかなく、整数と浮動小数点数を区別しない。

NaN(Not a Number)は数値ではないことを表すNumber型の値。


## 変数
変数とは、値にラベルをつけたもの。
### 変数に値を入れておくことのメリット
- あとでその値を参照できる
- 値を変更しやすい
- 何かしらの処理をするために使える

### 基本的な書き方
let 変数名 = 値;

### 変数の更新(主にNumber)
``` JavaScript
let score = 5; // undefined
score = 10; // 10
// scoreの値を10に更新したが、もっと楽に更新できる

// scoreが5ずつ増えていく
score = score + 5; // 15
score += 5; // 20 こっちの書き方が一般的。

// scoreが5ずつ減っていく
score = score - 5; // 15
score -= 5; // 10 こっちの書き方が一般的。

// scoreが1ずつ増えていく
score += 1;
score++; // これは値が1増える前にscoreを参照する。
++score; // これは値が1増えた後にscoreを参照する。

// scoreが1ずつ減っていく
score -= 1;
score--; // こっちの書き方が一般的。
--score; // これは値が1減った後にscoreを参照する。
    
// scoreが2倍になっていく
score *= 2;

// scoreが2分の1になっていく
score /= 2;     
```










