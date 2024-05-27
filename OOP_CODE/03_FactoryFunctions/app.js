/* 
ファクトリー関数とは、オブジェクト（プロパティとメソッドの集合体）を作成するための関数
特定のパターンに従って、オブジェクトを簡単に作成できる
*/

function createColor(r, g, b) {
    return {
        r: r,
        g: g,
        b: b,
        toHex: function () {
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        toString: function () {
            return `rgb(${r}, ${g}, ${b})`;
        }
    };
}

const red = createColor(255,0,0);
console.log(red.toString());
console.log(red.toHex());

const green = createColor(0, 255, 0);
console.log(green.toString());
console.log(green.toHex());

const blue = createColor(0, 0, 255);
console.log(blue.toString());
console.log(blue.toHex());

/* 
1. createColorファクトリー関数の定義
createColor関数は、3つのパラメータを（r, g, b)を受け取り、RGBオブジェクトを生成する
この関数は、以下のプロパティとメソッドを持つオブジェクトを返す！
r, g, b：各RGB値の値をそのまま保持するプロパティ
toHexメソッド：RGBの値を16進数表記（HEX）に変換するメソッド
toStringメソッド：RGB表記の文字列を返すメソッド

2. オブジェクトの生成
createColor関数を使って、red, green, blueオブジェクトを作成している
各オブジェクトのtoStringメソッドを呼び出して、RGB表記の文字列をコンソールに出力している
各オブジェクトのtoHexメソッドを呼び出して、RGBの値を16進数表記の文字列をコンソールに出力している

3. ファクトリー関数の利点
    (1)再利用性：同じパターンに従ったオブジェクトを何度でも簡単に生成できる
    (2)カプセル化；オブジェクトの生成ロジックを関数内で隠蔽することで、外部空の変更を防ぐ
    (3)柔軟性：新しいプロパティやメソッドを追加する際に、関数を修正するだけで済む
*/