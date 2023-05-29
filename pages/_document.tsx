import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="crossorigin"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png"></link>
          <meta property="og:title" content="Talal Munzar" />
          <meta
            name="twitter:title"
            content="Designer, Developer, and Researcher of Digital
          Experiences"
          />
          <meta property="og:image" content="/logo512.png" />
          <meta name="viewport" content="width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
