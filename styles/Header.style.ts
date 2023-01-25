import styled, { css } from "styled-components"

export const HeaderDiv = styled.div`
  display:flex;
  width:100vw;
  height:50px;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding:5px;
`

export const Text = styled.div<{ done: boolean }>`
    flex: 1;
    font-weight: 600;
    font-size: 21px;
    color: #495057;
    ${({ done }) =>
        done && 
        css`
          color: #black;
    `}
`;

