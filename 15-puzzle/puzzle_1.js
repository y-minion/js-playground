var str = document.getElementById("word1").innerHTML;
var word2 = document.getElementById("word2");

for (let i = 0; i < str.length; i++) {
  var btn = document.createElement("button");
  btn.innerHTML = str[i];
  word2.appendChild(btn);
}

let swap = function () {
  console.log("swap");
};

let shift = function () {
  console.log("shift");
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
