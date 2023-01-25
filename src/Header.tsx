import Link from 'next/link';
import Head from 'next/head';
import { HeaderDiv, Text } from '@/styles/Header.style';

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
                <Link href="/">Home</Link>
            </div>
            <div>
                <Text done={true}>김인술 개발 블로그</Text>
            </div>
            <div>
                version 0.1
            </div>
        </HeaderDiv>
        </>
    )
}