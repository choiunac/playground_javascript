// 엄격모드 "use strict"
// Vanilla JS로 작성 시 추가 (TS에서는 필요 없음)
// JS의 유연함 때문에 발생되는 비상식적인 것들을 캐치, 브라우저 콘솔창에 에러를 띄움.
// 전체 적용 시 파일 최상단에 선언, 부분 사용 시 함수 내부 최상단에 선언.
// 브라우저가 오래 되어서 콘솔 창에 use strict를 입력하는 게 불가능하다면,
// use strict를 적용하는 가장 확실한 방법은 아래와 같이 코드를 래퍼로 감싸서 적용.
// (function () {
//   "use strict";
//   // ...테스트하려는 코드...
// })();
// 그 밖에도 엔진이 JS를 읽을때 속도를 높혀줌, 그래서 성능 개선의 효과도 볼 수 있다.

"use strict";
// 미선언 시 콘솔창에 에러가 발생하지 않음.
// let a; -> 변수를 선언해야 에러가 발생하지 않음.
// a = 6;

// 1. 변수(variable) mutable(가변)
// let, const(added in ES6)
let userName = "unac";
console.log(userName);
userName = "hello";
console.log(userName);

// block scope(added in ES6)
// 글로벌 변수는 어느곳에서나 접근 가능.
// 주의: 글로벌 변수는 앱 실행 부터 끝날때까지 메모리를 차지 하기 때문에 최소한으로 사용하는 것이 좋다.
// 클래스, 함수, if, for loop 필요한 부분에 선언해서 사용하는 것이 좋다.
let userGender = "male"; //global variable
{
  let userAge = 32; //local variable
  console.log(userAge); //(O)
  console.log(userGender); //(O)
}
// Uncaught ReferenceError: userAge is not defined 에러 발생(로컬 변수 접근 불가능)
//console.log(userAge); // (X)
console.log(userGender); //(O)

// var(ES5) Don't ever use this.
// var를 사용하면 hoisting이 발생됨.
// hoisting(끌어올려주다): 어디에 선언했는지 상관없이 선언을 최상단으로 끌어올려줌.
// var는 블록 스코프가 적용되지 않음.
console.log(age); // undefined
age = 4;
console.log(age); // 4
var age;

// 최신 기능을 사용할 떄는 canIuse에서 사용여부를 확인하자.
// ie는 미지원하는 기술이 많기 때문에 무시하고 ES6로 개발한 뒤 배포 시 babel을 사용하자.
console.clear();

// 2. 상수(constants) Immutable(불변)
// 값을 할당한 뒤 변경할 수 없음. (포인터가 잠겨 있음)
// 상수 사용을 권장하는 이유
// 1) 보안상 안전 > (해커가 코드를 삽입해서 값을 변경할 수 없기 떄문)
// 2) 쓰레드 세이프티 > 다양한 쓰레드가 동시에 돌아갈 때, 동시에 변수 값을 변경할 수 있는데, 상수는 변경할 수 없기 떄문에.
// 3) 코드 변경 시 실수를 줄일 수 있다.
const WEEK = 7;
const MAX_NUMBER = 10;
console.clear();

// 3. 데이터 타입
// primitive(원시 타입, 더이상 작은 단위로 쪼갤 수 없는 한가지 아이템)
// -> null, boolean, number, symbol, string, undefined
// object type(오브젝트 타입): function, object, array
// JS는 fitst-class 함수가 지원된다.
// -> JS에서는 function이 데이터 타입에 할당이 가능.
// -> 인자값이나 매개변수로 사용 가능.
// -> return 값으로도 사용 가능.
// JS는 타입이 다이나믹하기 때문에 값에 따라 데이터타입이 결정됨.
// TS는 데이터 타입을 명시해야 함.
const count = 17;
const size = 18.2;
console.log(`${count}, type: ${typeof count}`);
console.log(`${size}, type: ${typeof size}`);

// number - speicla numeric
const infinity = 1 / 0; //infinity
const negativeInfinity = -1 / 0; //-infinify
const nAn = "not a number" / 2; //NaN

// bigInt
const bigInt = 4875839846739856738567398567389673896386n;
console.log(`${bigInt}, type: ${typeof bigInt}`);
console.clear();

// 4. String Type
const char = "a";
const brenden = "brenden";
console.log(`Hi! ${brenden}`); // template literals(string)
console.log("Hi!" + brenden);
console.clear();

// 5. Boolean(참과 거짓)
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // fasle
console.log(`${canRead}, ${typeof canRead}`);
console.log(`${test}, ${typeof test}`);
console.clear();

// 6. null
// null은 빈값이라고 할당하는 것. (의도적으로 부여)
let nullTest = null;
// 콘솔창에서 object 타입으로 나오지만, 이것은 초기버전 버그.
// 따라서 null값을 체크 할떄는, typeof말고 일치연산자를 사용헤야 한다.
console.log(`${nullTest}, ${typeof nullTest}`);
console.log(`${nullTest} === null`);

// 7. undefined
// 선언은 되었지만 값이 지정 되지않은 상태
let x;
console.log(`${x}, ${typeof x}`);

// 8. symbol, 유니크한 식별자를 나타내기 위함 (added in ES6)
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const symbol3 = Symbol.for("id");
const symbol4 = Symbol.for("id");
console.log(symbol3 === symbol4); // true
//심볼은 콘솔에 변수명 그대로 입력 시 에러가 발생하므로, .description을 붙여줘야 한다.
console.log(`${symbol1.description}`);
console.clear();

// 9. dynamic typing
// 런타임 시 할당된 값에 따라 데이터 타입이 부여됨.
// 위험한 에러가 많아서 TS가 등장함.
let text = "hello"; // t: string
console.log(text.charAt(0)); // v: h
text = 1; // t: number
text = "7" + 5; // t: string
text = "8" / "2"; // t: number
// console.log(text.charAt(0)); // error
console.clear();

// 10.Object Types
const una = { name: "choiuna", age: 32 };
// una객체는 const이기 때문에 재할당은 불가능.
// const una = { name: "unac", age: 40 };
console.log(una);
// 그러나 해당 객체 속성값은 접근 가능.
una.age = 22;
console.log(una);
