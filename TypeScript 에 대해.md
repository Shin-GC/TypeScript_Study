# πTypeScript λ?

- νμμ€ν¬λ¦½νΈλ μλ°μ€ν¬λ¦½νΈμ νμμ λΆμ¬ν μΈμ΄μ΄λ€.
- `JavaScript`, `ECMAScript`λ₯Ό ν¬ν¨νλ `Superset` μΌλ‘ `JavaScript` λλ `ECMAScript`μμ μ§μνμ§ μλ κΈ°λ₯μ μ§μν©λλ€.
  > `Superset` μ΄λ?
  > : νΉμ ν μΈμ΄μ λͺ¨λ  κΈ°λ₯μ ν¬ν¨νλ©΄μ, λ€λ₯Έ κΈ°λ₯κΉμ§ ν¬ν¨νλλ‘ ν₯μ λλ νμ₯λ κ²μ λ§νλ€.
- νμμ€ν¬λ¦½νΈλ μλ°μ€ν¬λ¦½νΈμ λ¬λ¦¬ λΈλΌμ°μ μμ μ€ννλ €λ©΄ νμΌμ νλ² λ³νν΄μ£Όμ΄μΌ νλλ° μ΄ λ³ν κ³Όμ μ `μ»΄νμΌ(complile)` μ΄λΌκ³  νλ€.
- νμμ€ν¬λ¦½νΈλ MSμμ κ°λ°νκ³  κ΄λ¦¬νλ μ€νμμ€ νλ‘κ·Έλλ° μΈμ΄λ‘ μ΄λ€ λΈλΌμ°μ λ νΈμ€νΈ, μ΄μμ²΄μ μμλ λμνλ€.
- ES6μ μλ‘μ΄ κΈ°λ₯λ€μ μ¬μ©νκΈ° μν΄ Babelκ³Ό κ°μ λ³λ νΈλμ€νμΌλ¬λ₯Ό μ¬μ©νμ§ μμλ ES6μ μλ‘μ΄ κΈ°λ₯μ κΈ°μ‘΄μ μλ°μ€ν¬λ¦½νΈ μμ§μμ μ¬μ©ν  μ μλ€.

---

## TypeScript μ₯λ¨μ 

#### `TypeScript`μ μ₯μ 

- μ μ  νμ μΈμ΄(static type language)μ΄κΈ° λλ¬Έμ μ»΄νμΌ μ μκ°μ΄ μ‘°κΈ κ±Έλ¦¬λλΌλ μμ μ±μ λ³΄μ₯νλ€λ μ μ΄λ€.
- IDE(ν΅ν©κ°λ°νκ²½)λ₯Ό ν¬ν¨ν λ€μν λκ΅¬μ μ§μμ λ°μ μ μλ€λ κ²μ΄λ€. IDEμ κ°μ λκ΅¬μ νμ μ λ³΄λ₯Ό μ κ³΅ν¨μΌλ‘μ¨ λμ μμ€μ μΈνλ¦¬μΌμ€(IntelliSense), μ½λ μ΄μμ€νΈ, νμ μ²΄ν¬, λ¦¬ν©ν λ§ λ±μ μ§μλ°μ μ μλ€.
- μΈν°νμ΄μ€, μ λ€λ¦­ λ±κ³Ό κ°μ κ°λ ₯ν κ°μ²΄μ§ν₯ νλ‘κ·Έλλ° μ§μμ ν¬κ³  λ³΅μ‘ν νλ‘μ νΈμ μ½λ κΈ°λ°μ μ½κ² κ΅¬μ±ν  μ μλλ‘ λμμ€λ€.

#### `TypeScript`μ λ¨μ 

- νμμ μ§μ ν΄μ£Όκ³ , λ―Έλ¦¬ λ§λ€μ΄λκΈ° λλ¬Έμ μ½λκ° κΈΈμ΄μ§λ€.

---

## π¨βπ νμ μ€ν¬λ¦½νΈλ₯Ό κ³΅λΆνκ² λ μ΄μ 

> express λ₯Ό μ¬μ©νμ¬ νλ‘μ νΈλ₯Ό μ§ννλ©° Requestλ‘ λ€μ΄μ€λ κ°λ€μ μ ν¨μ± κ²μ¬λ₯Ό λ§λ€κ³ , μλ¬ μ²λ¦¬ νκ³ , JSDocμ ν΅ν΄ μ΄λ€ μΈμμ μ΄λ€ Typeμ΄ λ€μ΄κ°μΌ νλμ§μ λν΄ μ λ€λ³΄λ μ μ΄μ νμμ΄ μ ν΄μ Έ μλ μ μ  νμ μΈμ΄λ©΄ μ΄λ°κ±Έ μν΄λ κ΄μ°?μμνλ°.. λΌλ μκ°μ νλ€κ° TypeScriptκ° λ μ¬λΌ λ°λ‘ κ³΅λΆλ₯Ό μμνλ€!

---

### νμ μ§μ ν΄λ³΄κΈ°

: νμμ€ν¬λ¦½νΈμ κΈ°λ³Έ νμ \[ 12 μ’λ₯ ]

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
let str: string = "λ¬Έμμ΄ μλλ€.";
```

![](https://velog.velcdn.com/images/soshin_dev/post/e45076a4-9206-4fec-ae17-05f3ea14198f/image.png)

λ§μ½ μ μ²λΌ νμμ μ§μ  ν΄μ€ ν, μ§μ ν΄ μ€ κ²κ³Ό λ€λ₯Έ νμμ μ¬μ©νλ©΄ μμ κ°μ΄ `TypeScript`μμ λ°λ‘ λ¬Έμ μ μ μλ €μ€λ€.

> π μ΄λ μμ κ°μ΄ `:`λ₯Ό μ΄μ©νμ¬ μλ°μ€ν¬λ¦½νΈ μ½λμ νμμ μ μνλ λ°©μμ νμ νκΈ°(`Type Annotation`)λΌκ³  ν©λλ€.

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

: ννμ λ°°μ΄μ κΈΈμ΄κ° κ³ μ λκ³  κ° μμμ νμμ΄ μ§μ λμ΄ μλ λ°°μ΄ νμμ μλ―Ένλ€.

```js
let tuple: [string, number] = ["test", 123];
```

---

### Enum

: νΉμ  κ°(μμ)λ€μ μ§ν©μ μλ―Ένλ€.

```js
enum Avengers {
  Capt = "μΊ‘ν΄",
  IronMan = "μμ΄μΈλ§¨",
  Thor = "ν λ₯΄",
}
let hero: Avengers = Avengers.Capt;
  // μΊ‘ν΄
```

---

### Any

: `Any`λ λͺ¨λ  νμμ νμ©νλ€λ λ»μΌλ‘ μ½κ² νμ μ€ν¬λ¦½νΈμ νμ λ°©μ΄λ₯Ό ν΄μ νκ³  κΈ°μ‘΄ μλ°μ€ν¬λ¦½νΈ μ²λΌ μ¬μ©νλ€λ λ»μ΄λ€.
`Any`λ₯Ό μ¬μ©νκ² λλ©΄ νμ μ€ν¬λ¦½νΈλ₯Ό μ¬μ©νλ μλ―Έκ° μ¬λΌμ§λ―λ‘ λλλ‘ μ¬μ©νμ§ μλλ‘ νμ.

```js
let all: any = 2;
all = "νμ€νΈ";
all = true;
```

---

### Void

: `Void` νμμ `undefined` κ°μ κ°μ§ λ³μλ₯Ό μ μΈνκ±°λ λ°ν κ°μ κ°μ§μ§ μλ ν¨μμ μ¬μ©νλ νμ μ΄λ€.

```js
let unuseful: void = undefined;

function notuse(): void {
  console.log("void νμμ λ°ν κ°μ΄ μμ΅λλ€.");
}
```

### Never

: `Never` νμμ μ’λ£νμ§ μλ ν¨μ μ¦ ν¨μμ λμ λλ¬ν  μ μλ ν¨μμ μ¬μ©νλ νμ μ΄λ€.
ν­μ μ€λ₯λ₯Ό μΆλ ₯νκ±°λ λ¦¬ν΄ κ°μ μ λλ‘ λ΄λ³΄λ΄μ§ μμμ μλ―Ένλ€.

```js
function neverEnd(): never {
  while (true) {}
}
```
