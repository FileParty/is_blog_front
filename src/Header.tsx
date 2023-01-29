import Head from 'next/head';
import { HeaderDiv, HeaderDropDown, HeaderDropDownMenu, HeaderDropDownSubMenu, HeaderMainLink } from '@/styles/Header.style';
import { useState } from 'react';

export default function Header() {

    const [ isOpen, isOpenStat ] = useState({flag:false, id:-1});



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
                <HeaderMainLink href="/">김인술 개발 블로그</HeaderMainLink>
                <HeaderDropDown>
                    <HeaderDropDownMenu>Info Menu</HeaderDropDownMenu>
                    <HeaderDropDownMenu>Coding Test</HeaderDropDownMenu>
                    <HeaderDropDownMenu>Algorithm</HeaderDropDownMenu>
                    {/* <Link href="https://github.com/FileParty/is_blog_front">GitHub</Link>
                    <Link href="/">HomeHomeHomeHome</Link>
                    <Link href="/">Home</Link> */}
                    <HeaderDropDownSubMenu isShow={isOpen.flag}>
                    <div>test1</div><div>test2</div><div>test3</div>
                    </HeaderDropDownSubMenu>
                </HeaderDropDown>
            </div>
            <div>
                version 0.1
            </div>
        </HeaderDiv>
        </>
    )
}