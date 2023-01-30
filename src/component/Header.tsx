import Head from 'next/head';
import { HeaderDiv, HeaderDropDown, HeaderDropDownMenu, HeaderDropDownMenuList, HeaderMainLink } from '@/styles/Header.style';
import { useState } from 'react';

export default function Header() {

    // 임시로 헤더 목록을 여기에 하드코딩해놓고, 나중에 API로 요청하는 방식으로 바꿀것
    const dumy_HeaderList = [
        { menuName: "InfoList", menuList: ["About Me", "development Info"] },
        { menuName: "Algorithm", menuList: ["test"] },
        { menuName: "FrontEnd", menuList: ["test", "test23"] },
        { menuName: "BackEnd", menuList: ["test", "test", "test"] }
    ];

    const [ headerDropDownMenuList, headerDropDownMenuListState ] = useState({menuName: "", menuList: [""]});

    function changeOpenHeaderDropDownMenu(idx: number) {
        console.log(idx);
        console.log(headerDropDownMenuList);
        if( idx !== -1 ) {
            const headerDropDownMenuListCopy = {...headerDropDownMenuList};
            headerDropDownMenuListCopy.menuName = dumy_HeaderList[idx].menuName;
            headerDropDownMenuListCopy.menuList = dumy_HeaderList[idx].menuList;
            headerDropDownMenuListState(headerDropDownMenuListCopy);
        }
        // if( isOpen.id !== id ) {
        //     let isOpenCopy = {...isOpen};
        //     isOpenCopy.flag = flag;
        //     isOpenCopy.id = id;
        //     isOpenStat(isOpenCopy);
        // }
    }

    return (
        <>
            <Head>
                <title>Is Dev Blog</title>
                <meta name="description" content="김인술의 개발 블로그" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderDiv>
                <div>
                    <HeaderMainLink href="/">김인술의 개발 블로그</HeaderMainLink>
                    <HeaderDropDown>
                        { dumy_HeaderList.map((headerMenu, headerMenuIdx) => {
                            return <HeaderDropDownMenu key={headerMenu.menuName} onMouseEnter={()=>{changeOpenHeaderDropDownMenu(headerMenuIdx)}}>
                                {headerMenu.menuName}
                            </HeaderDropDownMenu>
                        })}
                        <HeaderDropDownMenuList isShow={false}>
                            <div>test1</div><div>test2</div><div>test3</div>
                        </HeaderDropDownMenuList>
                    </HeaderDropDown>
                </div>
                <div style={{color:"white"}}>
                    version 0.1
                </div>
            </HeaderDiv>
        </>
    )
}


function HeaderDropDownMenuListComponent() {

    return (
        <div>

        </div>
    )
}