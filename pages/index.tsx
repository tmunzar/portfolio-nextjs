import type { NextPage } from 'next'
import Annotation from '../src/components/Annotation'
import Link from 'next/link'

import ArticleListing from '../src/components/ArticleListing'
import {
  Trav2TravListing,
  RmiListing,
  Kb2017Listing,
  ConnectavoListing,
  AngryBallerinaListing,
  JellyfishListing,
} from '../src/components/work-listings'
import styles from './index.module.scss'

const Home: NextPage = () => {
  return (
    <div id={styles.homePage}>
      <section id={styles.intro} className="relative">
        <div className="container is-full-height">
          <div className="columns is-vcentered is-full-height">
            <div className="column is-two-thirds">
              <img
                src="/images/about/me-in-a-circle-02.png"
                alt="Talal Munzar's face surrouned by sketch doodles relevant to the UI/UX field."
                style={{
                  width: 200,
                  display: 'block',
                  margin: '0 auto 50px',
                }}
                className="show-only-for-mobile"
              />
              <h1
                className={styles.introHeading}
              >{`Hi, I'm Talal and I like to`}</h1>
              <h1
                className={`${styles.introHeading} ${styles.introHeadingPrimary}`}
              >
                Engineer & Design
              </h1>
              <h1 className={styles.introHeading}>
                human-centered & joyful digital experiences.
              </h1>

              <div className="relative is-inline-block hide-for-mobile">
                <Link href="/about">
                  <img
                    src="/images/home-doodle-01.png"
                    alt="A sketched doodle representation of my research, design and development skills. It contains icons representing those skills."
                    className="dm-invert"
                    style={{ width: 300, marginTop: 15 }}
                  />
                </Link>
                <Annotation
                  style={{
                    top: 20,
                    right: -210,
                    width: 170,
                  }}
                  text="some of the things i can do!"
                  textRotate="-12deg"
                  arrowProps={{
                    flip: true,
                    translate: '25px, 20px',
                  }}
                  animProps={{
                    animDelay: 500,
                    onScroll: false,
                  }}
                />
              </div>
            </div>
            <div
              className="column is-half is-paddingless hide-for-mobile"
              style={{ marginTop: 'auto' }}
            >
              <Annotation
                style={{
                  top: -10,
                  right: 230,
                }}
                text="this is me"
                textRotate="-20deg"
                arrowProps={{
                  translate: '7px, 12px',
                }}
                animProps={{
                  onScroll: false,
                }}
              />
            </div>
          </div>
        </div>
        <img
          src="/images/me-02.png"
          alt="It's a me! Talal Munzar!"
          style={{
            width: 340,
            position: 'absolute',
            right: 0,
            top: 20,
          }}
          className="hide-for-mobile"
        />
      </section>

      <section className="is-grey">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="section-heading">Case Studies</h1>
            </div>
          </div>

          <div>
            <ArticleListing
              title={
                <>
                  Engineering a User Experience for
                  <br /> a technical audience
                </>
              }
              description="As a UX Engineer at Stardog, I was tasked to design the
                      second iteration of Stardog Studio after its first UI
                      release failed with its audience."
              img={{
                src: '/images/stardog-studio/screen-01.jpg',
                alt: 'Screen of the workspace section of Stardog Studio, a Graph Database querying application.',
              }}
              tags={[
                { text: 'Engineer', icon: 'develop' },
                { text: 'Design', icon: 'design' },
                { text: 'Prototype', icon: 'prototype' },
              ]}
              href="/engineering-a-user-experience-for-a-technical-audience"
            />

            <ArticleListing
              title="Designing an online learning platform for Independent
                Filmmakers"
              description="For my Masters Human-Computer Interaction Capstone
                Project, I designed an online learning platform for an
                industry client that sought to introduce the concept of
                certification to the independent film industry."
              img={{
                src: '/images/studao/main-01.png',
                alt: 'Mobile Screens for StuDAO, an online learning platform for Independent Filmmakers',
              }}
              tags={[
                { text: 'Design', icon: 'design' },
                { text: 'Prototype', icon: 'prototype' },
                { text: 'Research', icon: 'research' },
              ]}
              href="/designing-an-online-learning-platform-for-independent-filmmakers"
            />
          </div>
        </div>
      </section>

      <section id={styles.prevWork}>
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="section-heading">Past Work</h1>
              <p>
                Before I set upon a dedicated UX career path, I co-ran a web
                design agency called{' '}
                <a
                  href="http://jellyfish.com.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jellyfish
                </a>{' '}
                for 7 years . That time consisted of communincating with
                clients, collaborating with graphic designers, and managing work
                on 30+ projects. I was the principal Full-Stack Developer on all
                the projects Here are some examples:
              </p>
            </div>
          </div>

          <div className={styles.prevWorkList}>
            <Trav2TravListing />
            <RmiListing />
            <Kb2017Listing />
            <ConnectavoListing />
            <AngryBallerinaListing />
            <JellyfishListing />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
