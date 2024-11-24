var Gugudan = function (dan, step) {
  this.dan = dan;
  this.step = step;
  //   this.cal = function () {
  //     for (var n = 0; n < step; n++) {
  //       var result = dan * (n + 1);
  //       console.log(result);
  //     }
  //   };
};
Gugudan.prototype.cal = function () {
  for (var n = 0; n < this.step; n++) {
    var result = this.dan * (n + 1);
    console.log(result);
  }
};

var action = function () {
  console.clear();
  var input1 = document.getElementById("input1"); //이 변수 선언이 밖에 있다보면 버튼을 누르지 않으면 실행되지 않기에 함수안에 넣어줘야 한다..
  var input2 = document.getElementById("input2");
  var n = new Gugudan(input1.value, input2.value);
  n.cal();
};
