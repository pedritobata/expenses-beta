import { useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/transactions');
  }, []);

  return (
    <>
      <Head>
        <title>Expenses tracker</title>
        <meta name="description" content="App for managing your monthly expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <h1>Splash</h1>
      </main>
    </>
  )
}
