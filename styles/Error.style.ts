import styled, { keyframes } from "styled-components"

export const ErrorDiv = styled.div`
    display:flex;
    width:100%;
    min-height: 65vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
        font-size: 60px;
        font-weight: 600;
        padding:12px 0;
    }
    h3 {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 15px;
    }
`;

export const ErrorBackButton = styled.button`
    display:inline-block;
    width:120px;
    height:35px;
    font-size: 18px;
    border: 2px solid black;
    color: black;
    background-color: white;
`;
