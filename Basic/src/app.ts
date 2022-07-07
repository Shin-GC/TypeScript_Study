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
