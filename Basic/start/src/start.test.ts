import {createUser} from "./start";

describe("createUser Success Test", () => {
  test("createUser only name", () => {
    expect(createUser("테스트")).toStrictEqual({ name: "테스트" });
  });

  test("createUser with name and age", () => {
    expect(createUser("테스트", 26)).toStrictEqual({
      name: "테스트",
      age: 26,
    });
  });
});
