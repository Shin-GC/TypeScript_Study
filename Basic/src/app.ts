import { SpawnSyncOptionsWithBufferEncoding } from "child_process";

type User = {
  name: string;
  age?: number;
};

export function createUser(name: string, age?: number): User {
  if (age) {
    return {
      name,
      age,
    };
  }
  return {
    name,
  };
}

export let returnName: (name: string) => string;

returnName = function (name) {
  return name;
};

// export let factorial: (n: number) => number = function (n) {
//   if (n < 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };

export let factorial: (n: number) => number = (n) => {
  if (n < 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

type operation = {
  data: number[];
  output: (num: number) => number[];
};

let sum: operation = {
  data: [5, 10, 15],
  output(num) {
    return this.data.map((n) => n + num);
  },
};

// console.log(sum.output(5));

type heroGame = {
  title: string;
  price: string;
  desc: string;
  category: string;
  platform: string;
};

let heroGame_A: heroGame = {
  title: "DC 언체인드",
  price: "인앱 구매 제공",
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: heroGame = {
  title: "MARVEL 퓨처파이트",
  price: "",
  desc: "마블 유니버스 히어로와 함께하는 대규모 블록버스터 액션 RPG!",
  category: "롤플레잉",
  platform: "모바일",
};

console.log("%o\n%o", heroGame_A, heroGame_B);
