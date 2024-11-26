var input = {};
input.init = function (put) {
  this.list = put.split(" ");
};

input.getValue = function () {
  //고민_한개의 메소드로 기호와 숫자를 받을까 or 따로 나눌까? => 두개로 나누자.
  //숫자만 추출하는 메소드
  var str = Number(this.list.shift());
  return str;
};

input.empty = function () {
  return this.list.length == 0;
}; //여기 부분 구현 못해서 보고 했음...

input.getOperation = function () {
  var op = this.list.shift();
  if (op === "+" || op === "-" || op === "*" || op === "/") {
    return op;
  } else {
    return "$";
  }
}; //사칙연산 기호 판별 메소드.

var calculate = {};
calculate.calculator = function (num1, num2, op) {
  var ret;
  switch (op) {
    case "+":
      ret = num1 + num2;
      break;
    case "-":
      ret = num1 - num2;
      break;
    case "*":
      ret = num1 * num2;
      break;
    case "/":
      ret = num1 / num2;
      break;
    default:
      ret = NaN;
  }
  return ret;
};

var output = {};
output.out = document.getElementById("out");

output.print = function (value) {
  this.out.innerHTML = "결과값은 " + value + "입니다.";
};

var act = function () {
  var put = document.getElementById("input").value;
  input.init(put);
  var result = input.getValue(); //우선  첫번째 인덱스 삽입

  while (!input.empty()) {
    var op = input.getOperation();
    var num2 = input.getValue();
    result = calculate.calculator(result, num2, op);
  }
  output.print(result);
};
