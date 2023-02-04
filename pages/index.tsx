import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useState } from 'react';

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <main>
        <div>
          <h3>코딩테스트 문제풀이</h3> <br/>
          <Link href="/codingtest01">코딩테스트01 일곱 난쟁이의 키</Link>
        </div>
      </main>
    </>
  )
}
