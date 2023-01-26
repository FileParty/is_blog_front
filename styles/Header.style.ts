import Link from "next/link";
import styled, { css } from "styled-components"

export const HeaderDiv = styled.div`
  display:flex;
  max-width:100%;
  min-height:40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding:10px 15px;
  border-bottom: 1px solid black;
  position: relative;
`;

export const HeaderMainLink = styled(Link)`
  display: inline-flex;

`

export const HeaderDropDown = styled.div`
  display:inline-flex;
  flex-direction: row;
  width:auto;
  > a {
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 60px;
    height: 35px;
    border: 1px solid black;
    padding: 3px;
    :hover {
      background-color: rgb(199, 233, 255);
      border-color: rgb(199, 233, 255);
      border-radius: 3px;
      color:white;
    }
  }
`;

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

