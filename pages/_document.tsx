import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;500;700;900&family=Merriweather:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
