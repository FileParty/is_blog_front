import Head from 'next/head';
import { HeaderDiv, HeaderDropDown, HeaderDropDownMenu, HeaderDropDownMenuList, HeaderMainLink } from '@/styles/Header.style';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {

    // 임시로 헤더 목록을 여기에 하드코딩해놓고, 나중에 API로 요청하는 방식으로 바꿀것
    const dumy_HeaderList = [
        { menuName: "InfoList", menuList: [ {subMenuNm:"자기소개", subMenuUrl:"/about"}, {subMenuNm:"GitHubLink", subMenuUrl:"https://github.com/FileParty/is_blog_front"} ] },
        { menuName: "FrontEnd", menuList: [ {subMenuNm:"JavaScript", subMenuUrl:"/front/js"} ] },
        { menuName: "BackEnd", menuList: [ {subMenuNm:"Java", subMenuUrl:"/back/java"} ] },
        { menuName: "Algorithm", menuList: [ {subMenuNm:"문제목록", subMenuUrl:"/algorithm"} ] }
    ];

    const [ headerDropDownMenuOpenTarget, headerDropDownMenuOpenTargetState ] = useState(-1);

    function changeOpenHeaderDropDownMenu(idx: number) {
        headerDropDownMenuOpenTargetState(idx);
    }

    return (
        <>
            <Head>
                <title>Is Dev Blog</title>
                <meta name="description" content="김인술의 개발 블로그" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{height:"65px", minWidth:"100vw"}}></div>
            <HeaderDiv>
                <div>
                    <HeaderMainLink href="/">김인술의 개발 블로그</HeaderMainLink>
                    <HeaderDropDown>
                        { dumy_HeaderList.map((headerMenu, headerMenuIdx) => {
                            return <HeaderDropDownMenu key={headerMenu.menuName} onMouseEnter={()=>{changeOpenHeaderDropDownMenu(headerMenuIdx)}}
                                onMouseLeave={()=>{changeOpenHeaderDropDownMenu(-1)}}>
                                <h3>{headerMenu.menuName}</h3>
                                { headerDropDownMenuOpenTarget !== headerMenuIdx 
                                    ? <></>
                                    : <HeaderDropDownMenuList>
                                            { headerMenu.menuList.map((subMenu) => {
                                                return <li>
                                                    <Link href={subMenu.subMenuUrl}>
                                                        {subMenu.subMenuNm}
                                                    </Link>
                                                </li>
                                            })}
                                        </HeaderDropDownMenuList>
                                    }
                                
                            </HeaderDropDownMenu>
                        })}
                        
                    </HeaderDropDown>
                </div>
                <div style={{color:"white"}}>
                    version 0.1
                </div>
            </HeaderDiv>
        </>
    )
}