var num1 = [];
var symbol = [];

while (true) {
  var ans1 = Number(prompt("수를 입력하세요.."));
  num1.push(ans1);
  var ans3 = prompt("사칙연산 문자를 입력하세요..");
  if (ans3 === "p") {
    break;
  }
  symbol.push(ans3);
}
//숫자를 배열에 담기 작업 종료.

//이제 각 배열에 담긴 숫자들 계산시작.

//sum 변수를 선언해서 결과값을 넣어라.
//우선 계산 함수 선언
var sum;
var calculate = function (n1, syms, n2) {
  //계산함수 선언
  switch (syms) {
    case "+":
      sum = n1 + n2;
      break;
    case "=":
      sum = n1 - n2;
      break;
    case "*":
      sum = n1 * n2;
      break;
    case "/":
      sum = n1 / n2;
      break;
  }

  return sum;
};

sum = calculate(num1[0], symbol[0], num1[1]); //첫번째 계산만 따로 해줌

for (var i = 1; i < symbol.length; i++) {
  sum = calculate(sum, symbol[i], num1[i + 1]);
}

var out = document.getElementById("output");
out.innerHTML = sum;
