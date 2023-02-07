import Link from "next/link";
import styled, { keyframes } from "styled-components"

export const HeaderDiv = styled.div`
  display:flex;
  min-width:98.1%;
  height:65px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding:0 15px;
  border-bottom: 1px solid black;
  position: fixed;
  top:0;
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
  height:50px;
  padding:0;
  margin:0 0 0 50px;
  position: relative;
  > li:first-child {
    border-left: 1px solid white;
  }
`;

export const HeaderDropDownMenu = styled.li`
  display:inline-flex;
  align-items: center;
  min-width: 125px;
  height:100%;
  position: relative;
  text-align: center;
  justify-content: center;
  font-family: fantasy;
  color: white;
  font-size: 26px;
  cursor:pointer;
  padding:0 8px;
  border-right: 1px solid white;
  letter-spacing: 2px;
  :hover {
    color: green;
    text-shadow: 1px 1px 1px rgb(196, 203, 245);
  }
  h3{
    font-weight: 200;
  }
`;

export const HeaderDropDownMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 110%;
  min-height: 40px;
  padding: 5px;
  position: absolute;
  top:51px;
  li {
    background-color: white;
    width:100%;
    border:1px solid black;
    font-size: 19px;
    padding:5px 0px;
    :hover {
      a {
        color: red !important;
      }
    }
  }
`;