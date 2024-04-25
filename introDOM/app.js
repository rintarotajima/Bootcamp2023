// DOM要素を取得する
// const heading = document.getElementById("heading"); //getElementById：HTML内の要素をid属性値で取得することができるメソッド

// const paragraphs = document.getElementsByTagName('p');  // getElementsByTagName：HTML内の要素を要素名で取得するメソッド
// console.log(paragraphs); 

// const introElements = document.getElementsByClassName('intro'); // getElementsByClassName：HTML内の要素をクラス名で取得するメソッド
// console.log(introElements);


// /* getElementsByTagNameやgetElementByClassNameはHTMLCollectionオブジェクトを返す
// 名前の通り，HTML要素の集合体を表すオブジェクトだから，paragraphs[0]というふうにインデックス番号を使って個々の要素をアクセスできる */


// for (let i=0; i < introElements.length; i++) {   //7行目の変数（要素を取得したものの箱）を利用して，要素の数-1回分，スタイルを操作する処理
//     introElements[i].style.color = 'blue';
// }

// for (let i=0; i < paragraphs.length; i++) {      //4行目の変数（要素を取得したものの箱) を利用して，要素の数-1回分，スタイルを操作する処理
//     if (!paragraphs[i].className) {
//         paragraphs[i].style.textDecoration = 'underline'
//     }
// }


const container = document.querySelector('#container'); // div#containerの要素が返る
const introElement = document.querySelector('.intro'); //class='intro'の最初の要素が返る
const listItems = document.querySelectorAll('li'); // NodeListオブジェクト(li要素の配列)が返る
const highlightElement = document.querySelector('.highlight'); //class='highlight'の最初の要素が返る

// textContentの変更
highlightElement.textContent = 'テキストを変更しました';

// innerHTMLの変更
const firstListItem = listItems[0];
firstListItem.innerHTML = '<strong>リスト1(強調)</strong>';


/* 
querySelectorとquerySelectorAllについて
CSSセレクタを使って，要素を取得できる便利なメソッド
querySelectorAllは，NodeListオブジェクトを返すので，配列のようにインデックスアクセスができる
*/

/* 
textContentは，テキストノードの値を取得し，変更する.
innerTextは，レンダリングされた状態のテキストを取得する
innerHTMLは，HTML文字列を取得・変更できる 
*/


const link = document.createElement('a');
link.href = 'https://google.com';
link.textContent = 'リンク';
container.appendChild(link);

const heading = document.querySelector('h1');
heading.title = 'DOM操作は楽しい';


// スタイル操作
heading.style.color = 'blue';
heading.style.textDecoration = 'underline'

// classList 
introElement.classList.add('highlighted');
introElement.classList.remove('intro');
introElement.classList.toggle('highlighted');


// 親要素
const parentDiv = introElement.parentElement;
// 子要素
const childNodes = parentDiv.childNodes;
const children = parentDiv.children;
// 兄弟要素
const nextSibling = introElement.nextElementSibling;
const prevSibling = introElement.previousElementsSibling;


function actionToggle() {
    const target = document.querySelector('#target');
    target.classList.toggle('apple');
}


const newparagraphs = document.createElement('p');
newparagraphs.textContent = '新しい段落です';

container.append(newparagraphs);
container.appendChild(newparagraphs.cloneNode(true))

firstListItem.remove();
target.removeChild(target.firstChild);


/* 
appendとappendChildは，どちらも要素を追加する機能だけ，appendはテキストノードも追加できる
removeとremoveChildは，どちらも要素を削除するが，removeは要素自信のメソッド，removeChildは親ノードのメソッドを削除する
*/




