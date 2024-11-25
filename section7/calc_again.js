var act = function () {
  var num1 = Number(document.getElementById("num1").value); //.value를 안해주면 그냥 id테그만 불러오고 값을 읽어 오지 못한다...
  var num2 = Number(document.getElementById("num2").value);

  var sum = "";
  sum += "덧셈은:" + num1 + "+" + num2 + "=" + (num1 + num2) + "<br>";
  sum += "뺼셈은:" + num1 + "-" + num2 + "=" + (num1 - num2) + "<br>";
  sum += "곱셈은:" + num1 + "X" + num2 + "=" + num1 * num2 + "<br>";
  sum += "나눗셈은:" + num1 + "/" + num2 + "=" + num1 / num2 + "<br>";

  var out = document.getElementById("output");
  out.innerHTML = sum;
};
