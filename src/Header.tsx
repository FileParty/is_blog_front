import Link from 'next/link';
import Head from 'next/head';
import { HeaderDiv, HeaderDropDown, HeaderMainLink } from '@/styles/Header.style';

export default function Header() {
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
                    <Link href="/">Home</Link>
                    <Link href="/">HomeHomeHomeHome</Link>
                    <Link href="/">Home</Link>
                </HeaderDropDown>
                
            </div>
            <div>
                version 0.1
            </div>
        </HeaderDiv>
        </>
    )
}