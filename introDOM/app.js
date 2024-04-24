// DOM要素を取得する
const heading = document.getElementById("heading"); //getElementById：HTML内の要素をid属性値で取得することができるメソッド

const paragraphs = document.getElementsByTagName('p');  // getElementsByTagName：HTML内の要素を要素名で取得するメソッド
console.log(paragraphs); 

const introElements = document.getElementsByClassName('intro'); // getElementsByClassName：HTML内の要素をクラス名で取得するメソッド
console.log(introElements);