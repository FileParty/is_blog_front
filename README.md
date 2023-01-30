## next.js 프로젝트 구성 가이드 블로그 
https://velog.io/@kim98111/Next.js-프로젝트

## 프로젝트 구성
npx create-react-app [프로젝트명] --template=typescript
typescript / eslint
# styled Components(css-in-js)
yarn add styled-components
# props className did not match warning을 해결하기 위해 설치하였음.
yarn add -D babel-plugin-styled-components

참고 https://tesseractjh.tistory.com/164
# nextJs에서 redux 설치 및 적용
yarn add redux
yarn add redux-thunk
yarn add @redux-devtools/extension
yarn add next-redux-wrapper

참고 https://devkkiri.com/post/59cb38dd-f939-462d-9e7f-afcc338b621f
참고2(redux 미들웨어) https://react.vlpt.us/redux-middleware/


## Getting Started

npm run dev
or
yarn dev

npm build

run url : http://localhost:3000

# 프로젝트 폴더 구성
## pages
실제 컴포넌트 파일 구성
# Tip
pages/index.tsx 식으로 root파일이 구성됨.
ex) pages/news/index.tsx <- /news URL 요청시 해당 파일이 렌더링됨
ex2) pages/news/content.tsx <- /news/content URL 요청시 해당파일이 렌더링됨

## public
정적 파일들이 위치하는 폴더
# Tip
public 폴더에 존재하는 정적 파일들은 반드시 서버 파일 시스템의 루트 경로에 존재하기 때문에
런타임에는 루트 경로("/")를 통해서 접근해야함.
정적 파일 접근시 파일 확장자도 전부 작성할것.
# Tip2
public의 내 파일들은 pages 폴더 내 페이지 컴포넌트 파일 이름과 겹치지 않도록 해야함.
겹치면 충돌이 발생하게 됨.
# Tip3
public의 파일들은 빌드시 서버측에만 존재하기 때문에 빌드 이후에 런타임에 추가된 정적 파일들에 대해서는
서버측에 존재하지 않기 때문에 접근이 불가능함 

## styles
css/scss 등 스타일 스크립트 언어 파일들을 보관하는 곳
해당 css/scss 파일들을 호출할 때는 import 임포트명 from '파일 상대경로' 로 호출한 후
className='{임포트명.css/scss 클래스명}'으로 호출하면 됨
ex)
`` import styles from '../styles/Home.module.css' ``
`` <div className={styles.description}></div> ``

# Git 명령어 사이트
https://medium.com/@joongwon/git-git-명령어-정리-c25b421ecdbd

### 2023.01.21 해당 글들 참고함
# next-js styled-components 블로그
https://velog.io/@eunnbi/NextJS-styled-components와-함께-사용하기
# styled-components 문법글
https://www.daleseo.com/react-styled-components/
### 2023.01.21 해당 글들 참고함









