import '../styles/globals.scss'
import 'animate.css/animate.min.css'
import type { AppProps } from 'next/app'
import MainNav from '../src/MainNav'
import Footer from '../src/Footer'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>
          Talal Munzar - Designer, Developer, and Researcher of Digital
          Experiences
        </title>
        <meta
          name="description"
          content="Talal Munzar - Designer, Developer, and Researcher of Digital Experiences"
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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-136163126-1"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-136163126-1');
        `}
      </Script>
      <MainNav />
      <TransitionGroup>
        <CSSTransition
          key={router.pathname}
          classNames="page-transition"
          timeout={300}
        >
          <Component {...pageProps} />
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  )
}

export default MyApp
