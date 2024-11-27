var str = document.getElementById("word1").innerHTML;
var word2 = document.getElementById("word2");
let btn_stay = []; //임시로 바뀐 버튼의 정보를 담겨둘 배열__사실상 여기 배열이 버튼 액션 후의 결과값이 된다.
let result = "일치합니다";
for (let i = 0; i < str.length; i++) {
  let btn = document.createElement("button");
  btn.setAttribute("id", i);
  btn.innerHTML = str[i];
  word2.appendChild(btn);
}

let swap = function () {
  for (let i = 0; i < str.length; i++) {
    let call_id = str.length - 1 - i; //바꿀 id 선별
    let call_btn = document.getElementById(call_id).innerHTML; //뒤집을 id 의 HTML저장.
    btn_stay.push(call_btn); //뒤집을 id의 HTML은 임시로 btn_stay 배열에 보관_ 나중에 shift()로 빼서 쓸 예정.
  }

  for (let i = 0; i < str.length; i++) {
    let btn = document.getElementById(i); //바뀜 당할 id 호출
    btn.innerHTML = btn_stay.shift();
  }

  checkout();
};
let shift_R = function () {
  for (let i = 0; i < str.length; i++) {
    let call_id = i - 1; //오른쪽으로 미뤄질 수들의 id 탐색
    if (call_id < 0) {
      call_id = str.length - 1;
    }
    let call_btn = document.getElementById(call_id).innerHTML; //미뤄질 id의 HTML을 추출
    btn_stay.push(call_btn); //btn_stay에 액션 후 결과값이 될 HTML 이 담겨진다.
  }
  for (let i = 0; i < str.length; i++) {
    let btn = document.getElementById(i); //기존 버튼 테그의 id 호출;
    btn.innerHTML = btn_stay.shift();
  }
  checkout();
};

let shift_L = function () {
  for (let i = 0; i < str.length; i++) {
    let call_id = i + 1; //왼쪽으로 미뤄질 수들의 id 탐색
    if (call_id === str.length) {
      call_id = 0;
    }
    let call_btn = document.getElementById(call_id).innerHTML; //미뤄질 id의 HTML을 추출
    btn_stay.push(call_btn); //btn_stay에 액션 후 결과값이 될 HTML 이 담겨진다.
  }
  for (let i = 0; i < str.length; i++) {
    let btn = document.getElementById(i); //기존 버튼 테그의 id 호출;
    btn.innerHTML = btn_stay.shift();
  }
  checkout();
};

var checkout = function () {
  for (let i = 0; i < str.length; i++) {
    let btn = document.getElementById(i).innerHTML;
    if (btn != str[i]) {
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
