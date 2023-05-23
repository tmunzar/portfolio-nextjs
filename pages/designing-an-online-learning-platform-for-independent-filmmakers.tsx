import type { NextPage } from 'next'
import Head from 'next/head'
import Tag from '../src/Tag'
import ImageModal from '../src/ImageModal'
import Annotation from '../src/Annotation'

const StudaoPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          An online learning platform for Independent Filmmakers - Talal Munzar
          - Engineering human-centered & joyful digital experiences.
        </title>
        <meta
          name="description"
          content="Talal Munzar - Designer, Developer, and Researcher of Digital Experiences"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <header>
          <div className="container">
            <div className="columns">
              <div className="column is-two-fifths">
                <h1>
                  Designing an online learning platform for Independent
                  Filmmakers
                </h1>
                <p>
                  For my Masters Human-Computer Interaction Capstone Project, I
                  designed an online learning platform for an industry client
                  that sought to introduce the concept of certification to the
                  independent film industry.
                </p>

                <div className="details">
                  <p>
                    <strong>Role:</strong> UX Researcher & Commiunications Lead
                  </p>
                  <p>
                    <strong>Collaborators:</strong> Capstone Team of five other
                    UX researchers and designers, Independent Filmmakers
                  </p>
                  <p>
                    <strong>Duration:</strong> 9 Months (University of Maryland
                    HCI-Masters Final Year Capstone Project)
                  </p>
                </div>

                <div className="tags-list is-hidden-mobile">
                  <Tag text="Design" icon="design" />
                  <Tag text="Prototype" icon="prototype" />
                  <Tag text="Research" icon="research" />
                </div>
              </div>
              <div className="column">
                <ImageModal
                  img={{
                    src: '/images/studao/main-01.png',
                    alt: 'Filmmaker Learning Mobile app',
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-two-fifths">
                <h2>
                  Why make a filmmaking learning platform in the first place?
                </h2>
                <p>
                  Our clients who had experience working in the film industry
                  presented us with the thesis that the film industry lacks a
                  certification program, unlike other industries such as law,
                  accounting or medicine. What would precede a certification is
                  a learning program, and the best way to deliver teachable
                  content these days is online.
                </p>
              </div>
              <div className="column is-offset-1 is-4 hide-for-mobile">
                <img
                  src="images/studao/certificate-doodle-01.png"
                  alt="A sketch about certifications in the medical, finance and the law industries."
                />
              </div>
            </div>

            <div className="columns is-vcentered">
              <div className="column is-4">
                <img
                  src="images/studao/clueless-filmmaker-doodle-01.png"
                  alt="A sketch about a clueless aspiring filmmaker."
                />
              </div>
              <div className="column is-offset-1 is-4">
                <p>
                  A lack of any standardized learning program meant that
                  aspiring filmmakers trying to get into the film industry were
                  wholly unequipped to make a breakthrough, or secure funding
                  for the movies they wanted to make.
                </p>
              </div>
            </div>

            <div className="columns is-vcentered is-reverse-mobile">
              <div className="column is-offset-1 is-two-fifths">
                <p>
                  The average filmmaker trying to enter the industry lacks the
                  fundamental business knowledge to prepare a film pitch
                  complete with budget line items, and to earn the trust of a
                  potential investor.
                </p>
              </div>
              <div className="column is-4 relative">
                <img
                  src="images/studao/investor-doodle-01.png"
                  alt="A sketch about a clueless aspiring filmmaker."
                />
                <Annotation
                  text="I can never be as fashionable as this dude ..."
                  textRotate="15deg"
                  style={{
                    width: 200,
                    top: -50,
                    right: -110,
                  }}
                  arrowProps={{
                    translate: '-120px, 40px',
                    rotate: '80deg',
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                  className="is-primary offset-margin-right-neg-20-tablet"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-5">
                <h2>Background Research</h2>
                <p>
                  To get started, we conducted some background research via
                  semi-structured interviews with established industry
                  professionals that our client was kind enough to connect us
                  to. One of them was Eduardo Sanchez, the director of the Blair
                  Witch Project!
                </p>
                <p>
                  The purpose of this research was to immerse ourselves in the
                  workings of the film industry before we set out to research
                  and design a learning platform catered to it.
                </p>
              </div>

              <div className="column is-1 is-5">
                <p>Our core background research questions:</p>
                <ul className="font-cursive">
                  <li>
                    What is their attitude about learning business when making a
                    film?
                  </li>
                  <li>
                    How do they currently feel about the quality of their film
                    business education so far?
                  </li>
                  <li>
                    How have they attempted to fill in these knowledge gaps
                    throughout their career?
                  </li>
                  <li>
                    What forms of learning have they responded well to in the
                    past? and why?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="is-primary">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <h2>How to get access to a peoples’ business?</h2>
                <p>
                  {`The film industry is already a tight-knit peoples' business,
                  with outsiders having a tough time accessing it. It was even
                  harder to get access to a group of students. Despite our
                  client providing us with some help, we were mostly left on our
                  own to recruit the right kind of end-users for our research.`}
                </p>
                <p>
                  So we decided to explore users in contexts similar to what we
                  were building. We decided to also reach out to people from
                  other creative professions who needed to learn the business
                  and technical skills to succeed in their industry.
                </p>
              </div>
              <div className="column is-offset-1 is-two-fifths relative">
                <img
                  src="images/studao/outsider-doodle-01.png"
                  alt="A sketch about an outsider trying to get access to the film industry."
                />
                <Annotation
                  className="is-white"
                  text="this is an outsider trying to get in"
                  textRotate="-20deg"
                  style={{
                    width: 150,
                    top: -30,
                    left: 0,
                  }}
                  arrowProps={{
                    translate: '-20px, 0',
                    rotate: '15deg',
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                />
                <Annotation
                  className="is-white"
                  textRotate="-15deg"
                  text="that's the proverbial wall!"
                  style={{
                    width: 180,
                    bottom: -160,
                    left: 110,
                  }}
                  arrowProps={{
                    translate: '60px, 125px',
                    rotate: '-160deg',
                    flip: true,
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                />
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-half">
                <h3 className="text-center">
                  We ended up recruiting users who had gone through learning
                  programs to earn certifications in the nursing and law
                  professions, in addition to career filmmakers and film
                  students.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h2>Key User Interview Findings</h2>
              </div>
            </div>
            <div className="columns is-vcentered is-reverse-mobile">
              <div className="column is-offset-1 is-5">
                <p>
                  Online learners are receptive to self-paced learning,
                  especially if the content comes from a known and reputable
                  source.
                </p>
              </div>
              <div className="column is-4 relative">
                <img
                  src="images/studao/self-paced-expert-doodle-01.png"
                  alt="A sketch about self-paced learning and expert sources of information."
                />
                <Annotation
                  text="She seems fairly reputable don’t you think?"
                  className="is-primary"
                  textRotate="-15deg"
                  style={{
                    width: 200,
                    right: -150,
                    bottom: -110,
                  }}
                  arrowProps={{
                    translate: '80px, 70px',
                    rotate: '-80deg',
                    flip: true,
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                />
              </div>
            </div>

            <div className="columns is-vcentered margin-top-50-mobile">
              <div className="column is-offset-2 is-3 is-8-mobile relative">
                <img
                  src="images/studao/biz-learning-doodle-01.png"
                  alt="A sketch a bored film student trying to learn business skills."
                />
              </div>
              <div className="column is-offset-1 is-4">
                <p>
                  Filmmakers or film students aren’t particularly receptive to
                  business learning unless it is taught in the context of making
                  movies.
                </p>
              </div>
            </div>

            <div className="columns is-vcentered is-reverse-mobile margin-top-50-mobile">
              <div className="column is-offset-2 is-4">
                <p>
                  Since filmmaking is a very collaborative and hands-on
                  exercise, the holy grail of learning for any filmmaker is to
                  visit a film set and shadow a filmmaker.
                </p>
              </div>
              <div className="column is-5">
                <img
                  src="images/studao/on-set-doodle-01.png"
                  alt="A sketch of a film student learning by being on set"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="is-light-grey">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h2>Brainstorming & Ideation</h2>
                <p>
                  Once armed with the key insights, we started exploring
                  different ideas via visions and storyboards:
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half">
                <ImageModal
                  img={{
                    src: 'images/studao/storyboard-01.jpg',
                    alt: 'A collection of storyboarding design idea sketches',
                  }}
                />
              </div>
              <div className="column is-half">
                <ImageModal
                  img={{
                    src: 'images/studao/storyboard-02.jpg',
                    alt: 'A collection of storyboarding design idea sketches',
                  }}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-half">
                <p>
                  The storyboards were discussed among the team, and also with
                  the client to come up with a consensus of the best combination
                  of achievable and effective design ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h2>Lo-Fi Prototype</h2>
                <p>
                  We decided it best to do our Lo-Fi prototypes using Paper
                  prototypes, so that we could make changes to our designs on
                  the fly while user-testing.
                </p>
              </div>
            </div>
            <div className="columns ">
              <div className="column is-half">
                <ImageModal
                  img={{
                    src: 'images/studao/lofi-prototype-01.png',
                    alt: 'Low-fi paper prototype images',
                  }}
                />
              </div>
              <div className="column is-half">
                <ImageModal
                  img={{
                    src: 'images/studao/lofi-prototype-02.png',
                    alt: 'Low-fi paper prototype images',
                  }}
                />
              </div>
            </div>
            <div className="columns ">
              <div className="column">
                <ImageModal
                  img={{
                    src: 'images/studao/lofi-prototype-03.png',
                    alt: 'Low-fi paper prototype images',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="is-light">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h2>High Fidelity Prototype</h2>
                <p>
                  Once we validated our design via the lo-fi prototype testing,
                  we set out to make a final high fidelity design and produce an
                  interactive online prototype as part of the final deliverables
                  of the project. Below is a preview. You can also view the
                  working prototype{' '}
                  <a
                    href="https://projects.invisionapp.com/share/SWS3X9ODK4E#/screens/364666372_Value_Proposition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-8">
                <ImageModal
                  img={{
                    src: 'images/studao/hifi-prototype-01.png',
                    alt: 'Hi-fi prototype images',
                  }}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-offset-4 is-8">
                <ImageModal
                  img={{
                    src: 'images/studao/hifi-prototype-02.png',
                    alt: 'Hi-fi prototype images',
                  }}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-8">
                <ImageModal
                  img={{
                    src: 'images/studao/hifi-prototype-03.png',
                    alt: 'Hi-fi prototype images',
                  }}
                />
              </div>
            </div>
            <div className="columns is-reverse is-gapless">
              <div className="column is-3">
                <a
                  className="button"
                  href="https://projects.invisionapp.com/share/SWS3X9ODK4E#/screens/364666372_Value_Proposition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to InVision Prototype
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h2>Style Guide</h2>
                <p>
                  We delivered the final design complete with a Style Guide, so
                  that the client could build any additional components on top
                  of the proposed application design in the future.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <ImageModal
                  img={{
                    src: 'images/studao/style-guide-01.png',
                    alt: 'Style Guide - Logo and Branding',
                  }}
                />

                <ImageModal
                  img={{
                    src: 'images/studao/style-guide-02.png',
                    alt: 'Style Guide - Icons',
                  }}
                />
              </div>

              <div className="column is-offset-1 is-4 ">
                <ImageModal
                  img={{
                    src: 'images/studao/style-guide-03.png',
                    alt: 'Style Guide - color pallete',
                  }}
                />
                <ImageModal
                  img={{
                    src: 'images/studao/style-guide-04.png',
                    alt: 'Style Guide - color pallete',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default StudaoPage
