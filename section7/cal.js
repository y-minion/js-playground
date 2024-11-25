var Num = function (n1, n2) {
  //.value로 받으면 문자열로 반환이 되므로 정수로 바꿔줘야한다.
  this.n1 = Number(n1);
  this.n2 = Number(n2);
};
Num.prototype.plus = function () {
  var sum = this.n1 + this.n2;
  return sum;
};
Num.prototype.minus = function () {
  var sum = this.n1 - this.n2;
  return sum;
};
Num.prototype.multi = function () {
  var sum = this.n1 * this.n2;
  return sum;
};
Num.prototype.nanu = function () {
  var sum = this.n1 / this.n2;
  return sum;
};

var main = function () {
  //중복되는 부분은 main함수로 처리
  console.clear();
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var input = new Num(input1.value, input2.value);
  return input; //리턴값이 있어야 함수에서 작동한 값을 사용할수 있다..
};

var func1 = function () {
  var input = main(); //중복되는 부분은 메인함수 선언후 간결화...
  var result = input.plus();
  console.log(result);
}; //button클릭시 함수 작동

var func2 = function () {
  var input = main();
  var result = input.minus();
  console.log(result);
}; //button클릭시 함수 작동

var func3 = function () {
  var input = main();
  var result = input.multi();
  console.log(result);
}; //button클릭시 함수 작동

var func4 = function () {
  var input = main();
  var result = input.nanu();
  console.log(result);
}; //button클릭시 함수 작동
