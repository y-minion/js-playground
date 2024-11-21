# 함수의 기본 개념

## 1. 함수란 무엇인가?

- 함수는 재사용 가능한 코드 조각이다. 특정 작업을 수행하기 위해 코드를 그룹화한 것으로, 필요할 때 호출하여 실행할 수 있다.

### 함수의 주요 개념

- 입력: 함수에 전달하는 데이터 (매개변수, parameters).
- 출력: 함수가 반환하는 결과값 (return).
- 작업: 함수가 실행 중 수행하는 명령들.

### 예시: 간단한 함수

function add(a, b) {
return a + b; // a와 b를 더한 결과를 반환
}

console.log(add(2, 3)); // 5

#### 주요 구성:

- function 키워드: 함수를 정의할 때 사용.
- add: 함수 이름.
- (a, b): 매개변수(parameter). 함수가 입력값을 받을 자리.
- {}: 함수의 본문(body). 함수가 실행할 작업.
- return: 결과를 반환. (필수는 아님)

## 2.함수의 종류

- JavaScript에서 함수는 다양한 방식으로 정의할 수 있다. 주요 방식은 다음과 같음:

### (1) 함수 선언문 (Function Declaration)

function greet(name) {
return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!

- 이름이 있는 독립적인 함수.
- 호이스팅 가능: 선언 전에 호출할 수 있음.

### (2) 함수 표현식 (Function Expression)

const greet = function (name) {
return `Hello, ${name}!`;
};

console.log(greet("Bob")); // Hello, Bob!

- 변수에 익명 함수(또는 이름 있는 함수)를 할당.
- 호이스팅 불가: 변수에 함수가 할당된 이후에만 호출 가능.

### (3)화살표 함수 (Arrow Function)

const add = (a, b) => a + b;

console.log(add(2, 3)); // 5

- 간결한 문법으로 함수 정의.
- function 대신 => 사용.
- 본문이 한 줄일 경우, {}와 return 생략 가능.

## 3.함수의 호출

함수를 호출하려면 함수 이름 뒤에 **()**를 붙이고, 필요한 인수를 전달합니다.

function multiply(a, b) {
return a \* b;
}

console.log(multiply(3, 4)); // 12

- multiply는 함수 이름.
- (3, 4)는 함수에 전달하는 인수(argument).

## 4. 함수의 매개변수와 인수

### 매개변수(Parameter):

- 함수 정의 시 사용되는 입력 변수.
- 예: function greet(name) {}에서 name이 매개변수.

### 인수(Argument):

- 함수 호출시 전달 하는 값
- 예: greet("Alice")에서 "Alice"가 인수.

- 매개변수와 인수의 연결:
  function add(a, b) {
  return a + b; // 매개변수 a와 b가 합쳐짐
  }

console.log(add(5, 10)); // 15 (5와 10이 인수로 전달됨)

## 5. 함수의 반환값 (Return)

### return 키워드:

- 함수가 실행 결과를 호출자에게 반환.
- 함수가 반환 값을 가지지 않으면 undefined를 반환.

#### 변환값이 있는 함수

function square(num) {
return num \* num; // num의 제곱 반환
}

console.log(square(4)); // 16

#### 변환값이 없는 함수

function greet(name) {
console.log(`Hello, ${name}!`);
}

greet("Alice"); // Hello, Alice! (출력만 하고 반환값 없음)

## 6. 함수의 주요 특징

### (1) 재사용 가능

- 동일한 작업을 여러 번 수행할 때 코드 중복을 줄여줌.
- ex:
  function sayHello(name) {
  return `Hello, ${name}!`;
  }

console.log(sayHello("Alice")); // Hello, Alice!
console.log(sayHello("Bob")); // Hello, Bob!

### (2) 매개변수와 동적 동작

- 다양한 입력값에 따라 다른 결과를 생성.
- ex:
  function multiply(a, b) {
  return a \* b;
  }

console.log(multiply(2, 3)); // 6
console.log(multiply(4, 5)); // 20

### (3) 스코프 (Scope)

- 함수 내부에서 선언된 변수는 함수 외부에서 접근할 수 없음.
- ex:
  function example() {
  let localVariable = "I'm local!";
  console.log(localVariable); // I'm local!
  }

example();
console.log(localVariable); // 오류: localVariable is not defined
