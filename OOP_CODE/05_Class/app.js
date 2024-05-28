class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    toHex() {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

}


const red = new Color(255,0,0);
console.log(red.toString());
console.log(red.toHex());

const green = new Color(0,255,0);
console.log(green.toString());
console.log(green.toHex());

const blue = new Color(0,0,255);
console.log(blue.toString());
console.log(blue.toHex());

/*
<コードの流れ>
1. クラス定義
`class`キーワードを用いて`Color`クラスを定義する。
2. constructorメソッド
クラスのインスタンスが作成されるときに、呼び出される特殊なメソッド
`constructor`メソッド内で`this.r`,`this.g`,`this.b`の各プロパティに、引数として渡された値を代入
3. メソッドの定義
`toHex`メソッド：RGBの値を16進数表記（HEX)に変換するメソッド
`tosString`メソッド：RGB表記の文字列を返すメソッド
4. オブジェクトの生成
`new`キーワードを使って`Color`クラスの新しいインスタンスを作成する。
生成されたインスタンスは、クラス内で定義されたプロパティとメソッドを持つ。

<クラスの特徴>
1. 構造化；オブジェクトの構造を明確に定義でき、コードの可読性が向上する
2. 継承：クラスを継承することで、新しいクラスを簡単に作成できる
3. カプセル化：クラス内で、データとメソッドをカプセル化し、外部からの直接アクセスを制御する
*/

class NamedColor extends Color {
    constructor(r,g,b,name) {
        super(r,g,b);
        this.name = name;
    }
    
    toString() {
        return `${this.name} (${super.toString()})`
    }
}

const tomato = new NamedColor(255, 70, 91, "Tomato")
console.log(tomato.toString());
console.log(tomato.toHex());

/* 
クラスの継承:クラスを継承して新しいクラスを作成することができる。
`Color`クラスを継承して`NamedColor`クラスを作成している。

1. extendsキーワード
・`Color`クラスを継承する新しい`NamedColor`クラスを定義する
2. superキーワード
・constructorメソッド内で、親クラスの`constructor`を呼び出し、親クラスのプロパティを初期化する
・super.toString()を使って、親クラスの`toString`メソッドを呼び出す
3. 追加プロパティ
`NamedColr`クラスに、新しいプロパティ`name`を追加
*/