import { ArticleCard } from '@components/articles'
import { Twitter, Github } from '@components/icons'
import { Footer, Navbar } from '@components/shared'
import { AppLink, Container, Hero, SocialLink, ELink } from '@components/ui'
import { fakePosts } from 'data'
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
      <section className="py-12">
        <Container>
          <h2 className="mb-8 text-sm">Recent Posts</h2>
          <div className="grid space-y-8">
            {fakePosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
          <p className="text-center text-sm font-light text-gray-700 py-12">
            Read all the articles{' '}
            <AppLink href="/blog" className="font-bold">
              on the blog
            </AppLink>
          </p>
        </Container>
      </section>
      <section className="py-12 bg-gray-200">
        <Container className="flex flex-col justify-center items-center space-y-8">
          <p className="text-center font-normal text-sm text-gray-700">
            This site was created with{' '}
            <ELink href="https://nextjs.org/">nextjs</ELink>,{' '}
            <ELink href="https://tailwindcss.com/">tailwindcss </ELink>and{' '}
            <ELink href="https://www.typescriptlang.org/">typescript</ELink>.
          </p>
          <SocialLink
            href="https://github.com/roblesdotdev"
            label="View Source"
            icon={<Github />}
          />
        </Container>
      </section>
      <div style={{ height: '2040px' }}></div>
      <Footer />
    </div>
  )
}

export default Home
