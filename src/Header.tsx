import Link from 'next/link';
import Head from 'next/head';
import { Text } from '@/styles/Header.style';

export default function Header() {
    return (
        <>
        <Head>
            <title>Is Dev Blog</title>
            <meta name="description" content="김인술의 개발 블로그" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Text done={true}>김인술 이력서</Text>
            </div>
            <div>
                update 2023.01.03
            </div>
        </header>
        </>
    )
}