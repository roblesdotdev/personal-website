import { Navbar } from '@components/shared'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Personal Site(work in progress...)</title>
      </Head>
      <Navbar />
      <div style={{ height: '2040px' }}></div>
    </div>
  )
}

export default Home
