interface User {
  name?: string;
  age?: number;
}

export function createUser(name: string, age?: number): User {
  if (age === undefined) {
    const user = {
      name,
    };
    return user;
  }
  const user = {
    name,
    age,
  };
  return user;
}

export function updateUser(name?: string, age?: number): User {
  console.log(name, age);
  const test = {
    name,
    age,
  };
  return test;
}

