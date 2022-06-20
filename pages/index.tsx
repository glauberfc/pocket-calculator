import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ErrorBoundary } from 'react-error-boundary'

import Calculator from 'components/Calculator'
import ErrorFallback from 'components/ErrorFallback'

const Home: NextPage = () => {
  return (
    <div className="flex items-center min-h-screen bg-secondary-900">
      <Head>
        <title>Equal Experts Calculator</title>
        <meta name="description" content="Equal Experts Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-md mx-auto">
        <div className="relative h-32">
          <Image
            src="/equal-experts.svg"
            alt="Equal Experts Logo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Calculator />
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default Home
