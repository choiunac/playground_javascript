"use strict";

// 1. Striing Concatenation
console.log("my" + "cat");
console.log("1" + 2); // t: string
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 3

// 2. Numeric operators (산술연산자)
console.log(1 + 1); //더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 몫
console.log(2 ** 4); //2의 4승
console.clear();

// 3. 증감 연산자(전위, 후위)
let counter = 2;
const perIncrement = ++counter; //전위 연산자, 3
const postIncrement = counter++; //후위 연산자, 4
console.log(counter);
console.clear();

// 4. 할당 연산자
let x = 10;
let y = 20;
console.log((x += y)); // x = x + y, 30
console.log((x -= y)); // x = x - y, -10
console.log((x *= y)); // x = x * y, 200
console.log((x /= y)); // x = x / y,

// 5. 비교 연산자
console.log(10 < 2); // 10이 2보다 작다, false
console.log(10 <= 2); // 10이 2보다 작거나 같다, false
console.log(10 > 2); // 10이 2보다 크다, true
console.log(10 >= 2); // 10이 2보다 크거나 같다, true
console.clear();

// 6. 논리 연산자 (||(or), &&(and), !(not))
const value1 = false; // false
const value2 = 4 < 2; // false

// 논리합(or), ||
// 셋 중에 하나만 true여도 true를 반환한다.
// or연산자에서는 a < b < c 순서로 true인 값(즉 헤비한 연산일수록)을 맨 뒤에 배치시켜야 한다.
// 왜냐하면 or연산자는 첫번째 a가 true이면 그 뒤 b와 c를 실행하지 않기 때문이다.
console.log(`${value1 || value2 || check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time..
    console.log("...");
  }
  return true;
}

//논리곱(and), &&
// 세가지 모두 true여야 true를 반환한다.
// and연산자에서는 a < b < c 순서로 true인 값(즉 헤비한 연산일수록)을 맨 뒤에 배치시켜야 한다.
// 왜냐하면 and연산자에서 조건 첫번째 a가 false이면 그 뒤 b와 c를 실행하지 않기 때문이다.
console.log(`${value1 && value2 && check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time..
    console.log("...");
  }
  return true;
}
// and연산자는 null값을 체크할때 유용하게 사용됨.
// nullObject && nullObject.someting
// if (nullObject != null) {
//   nullObject.something;
// }
console.clear();

// 부정(not), ! 결과를 반대로 뒤집음
const bool = false;
console.log(!bool); // true

// 동등 연산자, equality
const strFive = "5";
const numFive = 5;
//타입은 체크하지 않고 값만 체크
console.log(strFive == numFive); // true
console.log(strFive != numFive); // false
//타입까지 체크.
console.log(strFive === numFive); // false
console.log(strFive !== numFive); // true

// 객체 비교
const una1 = { name: "una" };
const una2 = { name: "una" };
const una3 = una1; // una1과 ref(번지수)가 같으므로 같은 객체.
console.log(una1 == una2); // ref가 다름, false
console.log(una1 === una2); // ref가 다름, false
console.log(una1 === una3); // ref가 같음, true

// 퀴즈
console.log(0 == false); // true
console.log(0 === false); // false, 0은 bool타입이 아니기 때문에
console.log("" == false); // true
console.log("" === false); // false, 0은 bool타입이 아니기 때문에
console.log(null == undefined); // true
console.log(null === undefined); // false,  null과 undefined는 같은 타입이 아니기 때문에

// 7. 제어문, if, else if, else
const userName = "una";
if (userName == "una") {
  console.log("una");
} else if (userName == "coder") {
  console.log("coder");
} else {
  console.log("unkwnon");
}

// 8. 삼항연산자
// 간단하게 한 줄로 끝낼 수 있을때 사용, 중첩하지 않는다.
console.log(userName === "una" ? "yes" : "no");

// 9. switch문 (제어문)
// 조건에 따라 분기한다. 조건 중 해당이 없다면 default문을 실행.
const browser = "chrome";
switch (browser) {
  case "ie":
    console.log("ie");
    break;
  case "chrome":
    console.log("chrome");
    break;
  default:
    console.log("default");
    break;
}

// 10. loops, while
// 조건이 false가 될때까지 반복.
let i = 1;
while (i < 20) {
  console.log(`while : ${i}`);
  i++;
}

// 11. loops, do while
// 코드를 먼저 실행 후 반복 한다.
do {
  console.log(`do while : ${i}`);
  i--;
} while (i > 0);

// 12. loops, for
// for(시작, 조건, 스텝), 정해진 횟수에 만큼 반복해야 할때 사용.
for (let k = 1; k <= 10; k++) {
  console.log(`for : ${k}`);
}

// 13. nested loops
// 중첩 반복문 사용은 지양 CPU에 좋지 않음! bigO가 n의 2승
for (let i = 2; i < 10; i++) {
  for (let k = 1; k < 10; k++) {
    console.log(`${i} * ${k} = ${i * k}`);
  }
}
console.clear();

// break: 해당 루프를 완전히 종료
// continue: 해당 루프를 스킵

// 퀴즈
// 1. 숫자 0 ~ 10까지 짝수만 출력 continue
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
console.log("\n");

// 2. 숫자 0 ~ 10까지 반복, 숫자 8을 만나면 break;
for (let k = 0; k <= 10; k++) {
  if (k > 8) {
    break;
  }
  console.log(k);
}
