import { MainDiv, MainTodoListUl } from '@/styles/Index.style';


export default function Home() {


  return (
    <>
      <MainDiv>
        <MainTodoListUl>
          <li><h1>블로그 TODO LIST</h1></li>
          <li><p>백엔드(Spring Boot/Kotlin)</p></li>
          <li><p>포스트 CRUD</p></li>
          <li><p>로그인(JWT 활용)</p></li>
          <li><p>랜덤 함수 기능 (+모던 자바스크립트 책 공부)</p></li>
          <li><p>파일 다중 업로드 제어</p></li>
          <li><p>회원가입와 DB설계(몽고DB)</p></li>
          <li><p>웹 카드게임</p></li>
          <li><p>SSL 적용 / SEO 공부</p></li>
        </MainTodoListUl>
      </MainDiv>
    </>
  )
}
