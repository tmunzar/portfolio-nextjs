import '../styles/globals.scss'
import 'animate.css/animate.min.css'
import type { AppProps } from 'next/app'
import MainNav from '../src/MainNav'
import Footer from '../src/Footer'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
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
