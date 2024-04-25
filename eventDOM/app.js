const btn2 = document.querySelector('#button2');
btn2.onclick = function () {
    console.log("hogehoge");
    console.log("mogemoge");
}

function screm() {
    console.log("ああああああああああああ");
    console.log("もーーーーーーーーーーー");
}

btn2.onmouseenter = screm;

const helloBtn = document.querySelector('#hello');

helloBtn.addEventListener("click",
    function () {
        console.log('hello');
    }
)

const goodbyeBtn = document.querySelector('#goodbye');

goodbyeBtn.addEventListener("click",
    function () {
        console.log('goodbye');
    }
)

