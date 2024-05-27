/*
コンストラクタ関数は、オブジェクトを作成するための特別な関数
`new`キーワードを使って呼び出すと、新しいオブジェクトが作成され、そのオブジェクトの初期化を行うためのコードが実行される
*/

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;

    this.toHex = function () {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    this.toString = function () {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    };
}

const red = new Color(255, 0, 0);
console.log(red.toHex());
console.log(red.toString());

const green = new Color(0, 255, 0);
console.log(green.toHex())
console.log(green.toString())

const blue = new Color(0, 0, 255);
console.log(blue.toHex())
console.log(blue.toString())


/* 
1. `Color`コンストラクタ関数の定義
Color関数は3つのパラメータ（r,g,b)を受け取り、RGBオブジェクトを生成する
thisキーワードを使って、オブジェクトのプロパティとメソッドを定義する
2. プロパティの定義
・this.r、this.g、this.bの各プロパティに、関数の引数として渡される値を代入する
3. メソッドの定義
・toHexメソッド：RGB値を16進数表記にするメソッド
・toStringメソッド：RGB表記の文字列を表示するメソッド
4. オブジェクトの生成
`new`キーワードを使って、`Color`コンストラクタを呼び出し、新しいオブジェクトを作る
生成されたオブジェクトは、コンストラクタ関数内で定義されたプロパティとメソッドを持つ

5. コンストラクタ関数の利点
    (1)一貫性：オブジェクトを作成する際に、一貫した初期化を行うことができる
    (2)再利用性：同じパターンに従って、オブジェクトを何度も生成できる
    (3)構造化：オブジェクトの構造を明確に定義することで、コードの可読性や保守性が向上する
*/