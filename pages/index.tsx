import { Container } from '@components/ui'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Container>
        <h1 className="font-bold text-2xl text-gray-800">It works</h1>
      </Container>
    </div>
  )
}

export default Home
