import { createUser } from "../src/app";

test("테스트 코드 작동 확인을 위한 테스트", () => {
  expect("테스트").toStrictEqual("테스트");
});

test("유저 생성 성공 테스트 [이름, 나이]", () => {
  expect(createUser("Shin", 26)).toStrictEqual({ name: "Shin", age: 26 });
});

test("유저 생성 성공 테스트 [ 이름 ]", () => {
  expect(createUser("Shin")).toStrictEqual({ name: "Shin" });
});
