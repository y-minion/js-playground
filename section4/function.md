# function\_\_함수 표현식과 함수 선언문의 차이

## 1.구조적인 차이

- 함수 선언문(function declaration)

function add(a, b) {
return a + b;
}

*독립적으로 선언된 함수
*이름이 반드시 있어야 한다.
*항상 호이스팅(어디에 있던 최상단으로 호출됨)되며, 코드 작성 위치에 관계없이 호출할 수 있습니다.
*제일 앞에 function으로 시작해서 컴퓨터가 어디에 있던 바로 찾을수 있어서 호이스팅 되는것 같다...(내 생각)

- 함수 표현식 (Function Expression)

const add = function (a, b) {
return a + b;
};

*변수에 익명 함수나 이름 있는 함수를 할당합니다.
*이름이 없는 익명 함수(function (a, b))를 사용할 수 있습니다. \*호이스팅되지 않으므로, 선언 이후에만 호출 가능합니다.

## 2.호이스팅(호출 가능 시점)

호이스팅은 함수 선언이나 변수가 스코프의 맨 위로 끌어올려지는 동작을 말한다..

- 함수 선언문:호이스팅O

console.log(add(5, 3)); // 8 (정상 작동)

function add(a, b) {
return a + b;
}

\*함수 선언문은 코드의 어디에 작성되었든 상관없이 호출 가능합니다. (브라우저가 선언을 코드 최상단으로 끌어올립니다.)

- 함수 표현식: 호이스팅 X

console.log(add(5, 3)); // 오류: add is not defined

const add = function (a, b) {
return a + b;
};

## 3.익명 함수와 이름 있는 함수

- 함수 선언문: 이름이 반드시 필요

function add(a, b) {
return a + b;
} \*이름을 반드시 지정해야 합니다.

- 함수 표현식: 익명 함수 가능

const add = function (a, b) {
return a + b;
}; \*익명 함수로 작성 가능하며, 이름 없는 함수가 변수에 할당됩니다.

- 이름 있는 함수 표현식

const add = function multiply(a, b) {
return a + b;
}; \*이름을 지정할 수도 있지만, 이름은 함수 내부에서만 사용 가능합니다.
