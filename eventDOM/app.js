const button2Element = document.querySelector('#button2');
button2Element.onclick = function () {
    console.log("hogehoge");
    console.log("mogemoge");
}

function screm() {
    console.log("ああああああああああああ");
    console.log("もーーーーーーーーーーー");
}

button2Element.onmouseenter = screm;