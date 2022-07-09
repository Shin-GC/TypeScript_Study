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
