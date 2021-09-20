import { Twitter, Github } from '@components/icons'
import { Navbar } from '@components/shared'
import { Hero } from '@components/ui'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Personal Site(work in progress...)</title>
      </Head>
      <Navbar />
      <Hero
        headline="Aldo R. Robles"
        description="I'm an independent developer helping brands and people build things."
        imageUrl=""
        socialLinks={[
          {
            label: 'Twitter',
            icon: <Twitter className="w-4 h-4" />,
            href: 'https://twitter.com',
          },
          {
            label: 'Github',
            icon: <Github className="w-4 h-4" />,
            href: 'https://github.com',
          },
        ]}
      />
      <div style={{ height: '2040px' }}></div>
    </div>
  )
}

export default Home
