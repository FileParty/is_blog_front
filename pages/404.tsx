import { ErrorDiv, ErrorBackButton } from '@/styles/Error.style';


export default function Custom404() {

    return (
        <>
            <ErrorDiv>
                <h1>404 Error</h1>
                <h3>잘못된 페이지 접근입니다!</h3>
                <ErrorBackButton onClick={()=>{ history.back(); }}>뒤로가기</ErrorBackButton>
            </ErrorDiv>
        </>
    )
}