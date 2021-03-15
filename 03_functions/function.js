"use script";

// 1. function(함수)
// 프로그램을 구성하는 빌딩 블록, sub program 이라고도 불리며 재사용하기에 용이하다.

// 2. 문법
// 하나의 함수는 한가지 기능만 하도록 개발
// 함수 네이밍 규칙 : 동작 + 명령 +동사 (ex: createCardForm)
// 함수는 오브젝트 타입이다.

// 함수는 데이터 타입이 없기 때문에, 엄격한 개발을 위해 TS가 있음.
// (공홈: https://www.typescriptlang.org/play?ssl=5&ssc=21&pln=1&pc=1#code/GYVwdgxgLglg9mABABwE4zFAEgUwDZ5wAUAtjgM7kCGA5jogFyLlTpg0CUTYIJARjlSIA3gChEiCAnJw8OAHSEapCtTocA3OMSocUEKiQAGLQF9RaDNnyEiAIgAWNuHc1A)
printHello("h: hello"); //호이스팅 일어남
function printHello(message) {
  console.log(message);
}
printHello("hello");

/* version TS
인자는 string인데, return값은 number로 보내는 TS.
function printHello(message : string): number {
  console.log(message);
  return 0;
}
printHello("hello");
*/

// 3. parameters
// 기본 타입 파라미터: 메모리에 값이 전달.
// 오브젝트 타입 파라미터: 메모리에 번지수가 전달.
function changeName(obj) {
  obj.name = "이름변경 후";
}
// 오브젝트 생성
const userName = {
  name: "이름변경 전",
};
changeName(userName);
console.log(userName); //이름 변경 후

// 4. default parameters (added in ES6)
// 인자가 파라미터보다 적을 때 처리
//version ES5
function showMessage1(message, from) {
  if (from === undefined) {
    from = "파라미터2 없음";
  }
  console.log(`ES5:  ${message} by ${from}`);
}
showMessage1("파라미터1");

//version ES6
function showMessage2(message, from = "파라미터2 없음") {
  console.log(`ES6: ${message} by ${from}`);
}
showMessage2("파라미터1");

// 5. rest parameters (added in ES6)
// 인자가 여러개일때 파라미터를 배열로 받아옴. (...args)
function loopParameterView(...args) {
  // 01
  for (let i = 0; i < args.length; i++) {
    console.log(`TYPE 01: ${args[i]}`);
  }
  // 02
  for (const arg of args) {
    console.log(`TYPE 02: ${arg}`);
  }
  // 03(arrow func)
  args.forEach(arg => console.log(`TYPE 03: ${arg}`));
  // 04
  args.forEach(function (arg) {
    console.log(`TYPE 04: ${arg}`);
  });
}
loopParameterView("P1", true, 32);

// 6. 함수는 오브젝트이다.

// 7. local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
// 함수, 변수 스코프 때문에 접근이 불가능
// 자식은 부모의 변수를 참조할 수 있다.
// 부모는 자식의 변수 볼 수 없다.

const globalName = "전역 최윤아"; // global variable
function printOuter() {
  // 함수 내부에서는 전역, 지역 변수 모두 접근 가능
  const localName = "지역 최윤아";
  console.log(globalName); // global variable
  console.log(localName); // local variable
  printInner();
  function printInner() {
    console.log(localName); // 부모 함수의 변수 접근 가능
    // 중첩된 함수에서 자식의 값을 보무가 볼 수 있도록 하는것이 클로저
    const innerName = "전역 최윤아2";
  }
  // 부모 함수가 자식 함수 내부 값에 접근 할 수 없음, 에러.
  //console.log(innerName);
}
printOuter();

// 08. return of value
// 함수에 return을 지정해주지 않으면, 기본값 return undefined;
function sumCal(width, height) {
  // 1. 값을 리턴
  return width + height;
}
const total = sumCal(20, 30);
console.log(`total: width + height = ${total}`);

// 09. elary return, elary exit (현업 팁)
// return: null값을 반환.
// return ture: 예를 들어 유효성 검사 시 값이 없어도 true를 리턴, 즉 submit을 실행은 된다는 소리.
// return false: 값이 없다면 submit을 false로 반환한다.

let currentPoint = 20;
function upgradePoint(userPoint) {
  // 만약 포인트가 10보다 값이 클 때 업그레이드 로직이 실행되야 한다면,
  // 먼저 0~10 까지의 값을 체크해서 제외한 뒤, 로직을 그 다음에 실행시키는 것이 좋다.
  if (userPoint <= 10) {
    return false;
  }
  currentPoint++;
  console.log(`레벨업: ${currentPoint}`);
}
upgradePoint(currentPoint);

// 10. first class function
// 함수는 값으로 할당할 수 있다.
// 함수는 인자로 전달할 수 있다.
// 함수는 다른 함수를 리턴값으로 사용할 수 있다.
// 함수 표현식
// 함수를 변수에 할당.
// 변수에 함수를 할당하면 호이스팅이 불가능.

// 변수에 이름없는 함수를 할당.
const print = function () {
  // 익명 함수(함수 이름이 없음)
  console.log("print");
};
print();
const pritnAgain = print; //함수를 값으로 할당.
pritnAgain();

// 11. callback function(콜백 함수)
// 함수의 인자값으로 함수를 전달할 수 있다.
// 비동기처리에서 많이 사용한다.
// 함수의 인자를 판단해서 인자로 던진 함수로 결과를 처리한다.
function randomQuiz(answer, printYes, printNo) {
  if (answer === "wrong") {
    printNo();
  } else {
    printYes();
  }
}
const printYes = function () {
  console.log("printYes");
};
const printNo = function () {
  console.log("printNo");
};
randomQuiz("wrong", printYes, printNo);

// 12. recursion function(재귀 함수)
// 함수 내부에서 자기 자신 함수를 다시 부름.
// 재귀함수는 stack이라는 메모리 공간을 계속해서 이용하기 때문에 메모리의 제한이 있다.
// stack overflow가 뜨면서 메모리가 펑!하고 터져버림.
// 반복문보다 재귀함수가 더 느리다.
const recFunc = function recPrint() {
  console.log("나는 재귀함수 입니다.");
  // 자기 자신을 호출 -> 호출 시 무한으로 호출해서 에러남.
  recPrint();
};

// 13. arrow function (화살표 함수 added in ES6)
// 간단한 함수 표현식
// 문법: 변수 + 매개변수() + 화살표(=>) + 리턴값
const arrowFunc = () => console.log("화살표 함수");
const deConArrowFunc = function () {
  console.log("화살표 함수를 ES5로");
};
arrowFunc();
const sumNumber = (a, b) => a + b;
console.log(sumNumber(2, 4));

// 14. IIFE (즉시 실행 함수)
(function hello() {
  console.log("즉시 실행 함수를 실행! IIFE");
})();

// Func Quiz!
// 함수에서 명령과 인자 2개를 받아, 명령에 맞게 실행하라.
// function(command, a, b)
// command (add, substract, divide, mutiply, remainder)

function calcurator(command, num1, num2) {
  if (command === add) {
    add(num1, num2);
  }
  if (command === substract) {
    substract(num1, num2);
  }
  if (command === divide) {
    divide(num1, num2);
  }
  if (command === mutiply) {
    mutiply(num1, num2);
  }
  if (command === remainder) {
    remainder(num1, num2);
  }

  // switch (command) {
  //   case add:
  //     add(num1, num2);
  //     break;
  //   case substract:
  //     substract(num1, num2);
  //     break;
  //   case divide:
  //     divide(num1, num2);
  //     break;
  //   case mutiply:
  //     mutiply(num1, num2);
  //     break;
  //   case remainder:
  //     remainder(num1, num2);
  //     break;
  //   default:
  //     console.log("not a function");
  //     break;
  // }
}
const add = function (num1, num2) {
  return console.log(num1 + num2);
};
const substract = function (num1, num2) {
  return console.log(num1 - num2);
};
const divide = function (num1, num2) {
  return console.log(num1 / num2);
};
const mutiply = function (num1, num2) {
  return console.log(num1 * num2);
};
const remainder = function (num1, num2) {
  return console.log(num1 % num2);
};
calcurator(add, 10, 20);
calcurator(substract, 10, 20);
calcurator(divide, 10, 20);
calcurator(mutiply, 10, 20);
calcurator(remainder, 10, 20);
