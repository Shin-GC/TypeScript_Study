# 📝TypeScript 란?

- 타입스크립트는 자바스크립트에 타입을 부여한 언어이다.
- `JavaScript`, `ECMAScript`를 포함하는 `Superset` 으로 `JavaScript` 또는 `ECMAScript`에서 지원하지 않는 기능을 지원합니다.
  > `Superset` 이란?
  > : 특정한 언어의 모든 기능을 포함하면서, 다른 기능까지 포함하도록 향상 또는 확장된 것을 말한다.
- 타입스크립트는 자바스크립트와 달리 브라우저에서 실행하려면 파일을 한번 변환해주어야 하는데 이 변환 과정을 `컴파일(complile)` 이라고 한다.
- 타입스크립트는 MS에서 개발하고 관리하는 오픈소스 프로그래밍 언어로 어떤 브라우저나 호스트, 운영체제에서도 동작한다.
- ES6의 새로운 기능들을 사용하기 위해 Babel과 같은 별도 트랜스파일러를 사용하지 않아도 ES6의 새로운 기능을 기존의 자바스크립트 엔진에서 사용할 수 있다.
---

## TypeScript 장단점

#### `TypeScript`의 장점

- 정적 타입 언어(static type language)이기 때문에 컴파일 시 시간이 조금 걸리더라도 안정성을 보장한다는 점이다.
- IDE(통합개발환경)를 포함한 다양한 도구의 지원을 받을 수 있다는 것이다. IDE와 같은 도구에 타입 정보를 제공함으로써 높은 수준의 인텔리센스(IntelliSense), 코드 어시스트, 타입 체크, 리팩토링 등을 지원받을 수 있다.
- 인터페이스, 제네릭 등과 같은 강력한 객체지향 프로그래밍 지원은 크고 복잡한 프로젝트의 코드 기반을 쉽게 구성할 수 있도록 도와준다.

#### `TypeScript`의 단점

- 타입을 지정해주고, 미리 만들어놓기 때문에 코드가 길어진다.

---

## 👨‍🎓 타입 스크립트를 공부하게 된 이유

> express 를 사용하여 프로젝트를 진행하며 Request로 들어오는 값들의 유효성 검사를 만들고, 에러 처리 하고, JSDoc을 통해 어떤 인자에 어떤 Type이 들어가야 하는지에 대해 적다보니 애초에 타입이 정해져 있는 정적 타입 언어면 이런걸 안해도 괜찮았을텐데.. 라는 생각을 하다가 TypeScript가 떠올라 바로 공부를 시작했다!
---

### 타입 지정해보기

: 타입스크립트의 기본 타입 \[ 12 종류 ]

- Boolean
- Number
- String
- Object
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never

### String

---

```js
let str: string = "문자열 입니다.";
```

![](https://velog.velcdn.com/images/soshin_dev/post/e45076a4-9206-4fec-ae17-05f3ea14198f/image.png)

만약 위 처럼 타입을 지정 해준 후, 지정해 준 것과 다른 타입을 사용하면 위와 같이 `TypeScript`에서 바로 문제점을 알려준다.

> 📌 이때 위와 같이 `:`를 이용하여 자바스크립트 코드에 타입을 정의하는 방식을 타입 표기(`Type Annotation`)라고 합니다.
---

### Number

```js
let num: number = 5;
```

---

### Boolean

```js
let bool: boolean = false;
```

---

### Object

```js
let obj: object = {
  name: "Shin",
};
```

---

### Array

```js
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ["a", "b", "c", "d"];
let boolArr: boolean[] = [true, false, true, false];
```

---

### Tuple

: 튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미한다.

```js
let tuple: [string, number] = ["test", 123];
```

---

### Enum

: 특정 값(상수)들의 집합을 의미한다.

```js
enum Avengers {
  Capt = "캡틴",
  IronMan = "아이언맨",
  Thor = "토르",
}
let hero: Avengers = Avengers.Capt;
  // 캡틴
```

---

### Any

: `Any`는 모든 타입을 허용한다는 뜻으로 쉽게 타입 스크립트의 타입 방어를 해제하고 기존 자바스크립트 처럼 사용한다는 뜻이다.
`Any`를 사용하게 되면 타입 스크립트를 사용하는 의미가 사라지므로 되도록 사용하지 않도록 하자.

```js
let all: any = 2;
all = "테스트";
all = true;
```

---

### Void

: `Void` 타입은 `undefined` 값을 가진 변수를 선언하거나 반환 값을 가지지 않는 함수에 사용하는 타입 이다.

```js
let unuseful: void = undefined;
function notuse(): void {
  console.log("void 타입은 반환 값이 없습니다.");
}
```

### Never

: `Never` 타입은 종료하지 않는 함수 즉 함수의 끝에 도달할 수 없는 함수에 사용하는 타입 이다.
항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.

```js
function neverEnd(): never {
  while (true) {}
}
```

[test](https://github.com/Shin-GC/TypeScript_Study/blob/main/TypeScript%20에%20대해.md)
