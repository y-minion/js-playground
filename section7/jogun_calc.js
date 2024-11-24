var act = function () {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var sign = document.getElementById("sign").value;

  var sum = "";
  switch (sign) {
    case "+":
      sum += "덧셈은:" + num1 + "+" + num2 + "=" + (num1 + num2) + "<br>";
      break;
    case "-":
      sum += "뺼셈은:" + num1 + "-" + num2 + "=" + (num1 - num2) + "<br>";
      break;
    case "*":
      sum += "곱셈은:" + num1 + "X" + num2 + "=" + num1 * num2 + "<br>";
      break;
    case "/":
      sum += "나눗셈은:" + num1 + "/" + num2 + "=" + num1 / num2 + "<br>";
  }

  console.log(sum); //얘는 작동함..

  var out = document.getElementById("output");
  out.innerHTML = sum; //HTML대문자 문제였다!.
  //   out.innerHtml = sum;     //근데 얘는 작동을 안함...
};
