import Link from "next/link";
import styled, { css, keyframes } from "styled-components"

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
  background-color: rgb(0, 0, 10);
  * {
    vertical-align: middle;
  }
`;

const HeaderMainLinkTranslate = keyframes`
  0% {
    transform: translateY(0);
    color:rgb(187, 250, 255);
  }
  50% {
    transform: translateY(-4px);
    color:rgb(98, 216, 224);
  }
  100% {
    transform: translateY(0);
    color:white;
  }
`;

export const HeaderMainLink = styled(Link)`
  display: inline-flex;
  font-size: 28px;
  color: white;
  :hover {
    animation: ${HeaderMainLinkTranslate} 1s linear infinite;
  }
`

export const HeaderDropDown = styled.ul`
  display:inline-flex;
  flex-direction: row;
  align-items: center;
  width:auto;
  height:40px;
  position: relative;
  border-left: 1px solid white;
  padding:0;
  margin:0 0 0 50px;
  /* > a {
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 60px;
    height: 35px;
    border: 1px solid black;
    padding: 3px;
    :hover {
      //background-color: rgb(199, 233, 255);
      border-color: rgb(199, 233, 255);
      border-radius: 3px;
      color:white;
    }
  } */
`;

export const HeaderDropDownMenu = styled.li`
  display:inline-flex;
  align-items: center;
  height: 40px;
  min-width: 125px;
  text-align: center;
  justify-content: center;
  font-family: fantasy;
  color: white;
  font-size: 24px;
  cursor:pointer;
  padding:0 8px;
  border-right: 1px solid white;
  letter-spacing: 2px;
  :hover {
    color: rgb(196, 203, 245);
    text-shadow: 1px 1px 1px white;
  }
`

export const HeaderDropDownMenuList = styled.div<{ isShow: boolean }>`
  display: none;
  flex-direction: column;
  min-width: 75px;
  min-height: 40px;
  padding: 5px 0;
  position: fixed;
  top:61px;
  background-color: green;
  ${ ({isShow}) => 
    isShow && 
    css`
      display: flex;
  `}
`;