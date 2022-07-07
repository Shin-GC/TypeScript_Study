## 타입스크립트에서 JEST를 사용하기 위한 설정

- yarn add -D jest ts-jest @types/jest

  - `jest` : 테스트 라이브러리
  - `ts-jest` : 타입스크립트 환경에서 jest를 사용하기 위한 라이브러리
  - `@types/jest` : 테스트를 typeScript로 작성할 때 전체 입력 지원을 위한 라이브러리

- `yarn add -D @babel/preset-typescript @babel/preset-env`

  - `@babel/preset-typescript` : 타입스크립트를 js 로 변환해주는 plugin들이 묶여있는 라이브러리
  - `@babel/preset-env`
    - ECMAScript2015+를 변환할 때 사용한다.
    - 바벨 7 이전 버전에는 연도별로 각 프리셋을 제공하지만, 지금은 env 하나로 합쳐졌다

- .babelrc 파일을 생성 후 아래 코드를 통해 설정 넣어주기
  ```babel
  {
  "presets": ["@babel/preset-typescript", "@babel/preset-env"]
  }
  ```
