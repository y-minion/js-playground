var str = document.getElementById("word1").innerHTML;
var word2 = document.getElementById("word2"); //버튼 생성할 테그 id.
let array = [];
let result = "일치합니다.";
var game = {};
game.word = str.split(""); //기존 단어 배열 생성.
game.btns = []; //버튼테그의 배열 생성.
game.copyBtnText = function () {
  for (let i = 0; i < this.word.length; i++) {
    this.btns[i].innerHTML = this.word[i];
  }
};
for (let i = 0; i < str.length; i++) {
  //초반 버튼 생성.
  let btn = document.createElement("button"); //버튼 테그 생성.
  btn.innerHTML = str[i];
  word2.appendChild(btn); //버튼을 화면에 뿌려주는 역할.
  game.btns.push(btn); //button테그들이 game.btns배열안에 들어가게 된다.
}

let swap = function (event) {
  for (let i = 0; i < str.length; i++) {
    let s = game.word.pop();
    array.push(s);
  }
  for (let i = 0; i < str.length; i++) {
    let s = array.shift();
    game.word.push(s);
  }
  game.copyBtnText();
  checkout();
};
let rshift = function (event) {
  let s = game.word.pop();
  game.word.unshift(s);
  game.copyBtnText();
  checkout();
};

let lshift = function (event) {
  var s = game.word.shift();
  game.word.push(s); //game.word 배열이 바뀜
  game.copyBtnText();

  checkout();
};

let str_array = [];
str_array = str.split("");

let checkout = function () {
  for (let i = 0; i < game.word.length; i++) {
    if (game.btns[i].innerHTML != str_array[i]) {
      result = "안 맞는데용?";
      break;
    }
    result = "일치합니다!!!";
  }
  let check = document.getElementById("check");
  check.innerHTML = result;
};

// let word2 = document.getElementById("word2");

// let btn1 = document.createElement("button");
// btn1.innerHTML = "H";
// word2.appendChild(btn1);

// let btn2 = document.createElement("button");
// btn2.innerHTML = "E";
// word2.appendChild(btn2);

// let btn3 = document.createElement("button");
// btn3.innerHTML = "L";
// word2.appendChild(btn3);

// let btn4 = document.createElement("button");
// btn4.innerHTML = "L";
// word2.appendChild(btn4);

// let btn5 = document.createElement("button");
// btn5.innerHTML = "O";
// word2.appendChild(btn5);
