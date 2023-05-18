import type { NextPage } from 'next'
import Head from 'next/head'

const FourOFourPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          404 Page Not Found - Talal Munzar - Designer, Developr, and Researcher
          of Digital Experiences
        </title>
        <meta
          name="description"
          content="Talal Munzar - Designer, Developer, and Researcher of Digital Experiences"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="404">
        <section className="is-light">
          <div className="container">
            <div className="columns is-centered">
              <h1>404 - Page not found</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FourOFourPage
