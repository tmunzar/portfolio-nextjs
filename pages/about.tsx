import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Annotation from '../src/Annotation'
import Tag from '../src/Tag'

const RESEARCH_TAGS = [
  'User Interviews',
  'Heuristic Evaluation',
  'Usability Testing',
  'User Personas',
  'Data Analysis',
  'Design Sprints',
]

const DESIGN_TAGS = [
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Sketch',
  'Figma',
  'Framer',
  'Principle',
  'Adobe Suite',
]

const ENGINEERING_TAGS = [
  'ReactJS',
  'TypeScript',
  'SASS',
  'LESS',
  'VueJS',
  'Foundation',
  'Bootstrap',
  'Javascript',
  'PHP',
  'Laravel',
  'CoffeeScript',
  'Ruby on Rails',
  'AngularJS',
  'Redux',
  'NodeJS',
  'Gulp',
  'Webpack',
  'MySQL',
  'SPARQL',
]

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          About Me - Talal Munzar - Designer, Developer, and Researcher of
          Digital Experiences
        </title>
      </Head>
      <article id="about">
        <header className="is-light">
          <div className="container">
            <div className="columns is-mobile">
              <div className="column is-half-tablet is-5-mobile">
                <h1>Talal Munzar</h1>
                <h2>
                  Designer, Developer and Researcher
                  <br />
                  of digital experiences
                </h2>
              </div>
              <div className="column is-half-tablet is-6-mobile is-narrow">
                <Image
                  src="/images/about/me-in-a-circle-01.png"
                  alt="Talal Munzar's face surrouned by sketch doodles relevant to the UI/UX field."
                  width={250}
                  height={250}
                />
              </div>
            </div>

            <div className="columns is-vcentered is-mobile">
              <div className="column is-offset-1-tablet is-3-tablet is-8-mobile is-paddingless-tablet">
                <p>I&apos;m originally from Islamabad ...</p>
              </div>
              <div className="column is-2-tablet is-4-mobile is-paddingless">
                <Image
                  src="/images/about/faisal-masjid-doodle-01.png"
                  alt="A sketch of the Faisal Mosque in Islamabad"
                  width={183}
                  height={146}
                />
              </div>
            </div>

            <div className="columns is-vcentered is-mobile">
              <div className="column is-offset-4-tablet is-3-tablet is-8-mobile relative is-paddingless-tablet">
                did my undergrad in Lahore...
                <Annotation
                  className="is-primary"
                  text="in computer engineering"
                  textRotate="-10deg"
                  style={{
                    width: 180,
                    top: 40,
                    left: -120,
                  }}
                  arrowProps={{
                    rotate: '-95deg',
                    translate: '70px, 140px',
                  }}
                  animDelay={300}
                />
              </div>
              <div className="column is-2-tablet is-4-mobile is-paddingless">
                <Image
                  src="/images/about/minar-e-pakistan-doodle-01.png"
                  alt="A sketch of the Minar-e-Pakistan in Lahore"
                  width={294}
                  height={444}
                  layout="responsive"
                />
              </div>
            </div>

            <div className="columns is-vcentered is-mobile">
              <div className="column is-offset-2-tablet is-4-tablet is-8-mobile relative is-paddingless-tablet">
                <p>... and now I&apos;m in the DC Area.</p>
                <Annotation
                  className="is-primary"
                  text="where I did a Masters in Human-Computer Interaction at the University of Maryland!"
                  textRotate="-10deg"
                  style={{
                    width: 330,
                    bottom: -195,
                    left: -110,
                  }}
                  arrowProps={{
                    rotate: '-110deg',
                    translate: '20px, 340px',
                  }}
                  animDelay={700}
                />
              </div>
              <div className="column is-2-tablet is-4-mobile is-paddingless">
                <Image
                  src="/images/about/washington-monument-doodle-01.png"
                  alt="A sketch of the Faisal Mosque in Islamabad"
                  width={183}
                  height={146}
                />
              </div>
            </div>

            <div className="columns is-vcentered margin-top-100-mid is-reverse-mobile margin-top-50-mobile">
              <div className="column is-offset-3 is-5">
                <p>
                  I have been creating and designing digital experiences in one
                  form or another for the past 9 years. I can do user research,
                  sketch & draw, make wireframes, design, prototype, conduct
                  usability tests, and develop.
                </p>
              </div>
              <div className="column is-3 is-5-mobile">
                <Image
                  src="/images/about/prototype-doodle-01.png"
                  alt="A sketch of a prototype mobile application user-flow"
                  width={183}
                  height={146}
                />
              </div>
            </div>
          </div>
        </header>

        <section className="is-light interests">
          <div className="container">
            <div className="columns is-vcentered is-reverse-mobile">
              <div className="column is-offset-1 is-5">
                <p>
                  One of my biggest interests is teaching. I greatly enjoyed
                  being a graduate teaching assistant for several programming
                  courses at the University of Maryland. I also co-authored a{' '}
                  <a
                    href="https://www.researchgate.net/publication/331296366_Block-based_Comprehension_Exploring_and_Explaining_Student_Outcomes_from_a_Read-only_Block-based_Exam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    research paper
                  </a>{' '}
                  on teaching computer programming using block-based methods.
                </p>
              </div>
              <div className="column is-2  is-5-mobile relative">
                <Image
                  src="/images/about/teaching-doodle-01.png"
                  alt="A sketch of a programming class in session"
                  width={183}
                  height={146}
                />
                <Annotation
                  className="is-primary"
                  text="teaching is a very UX-based process, where you design and teach while incorporating feedback on the fly!"
                  textRotate="-15deg"
                  style={{
                    width: 350,
                    right: 250,
                    bottom: -210,
                  }}
                  arrowProps={{
                    rotate: '-90deg',
                    translate: '175px, 340px',
                  }}
                  animDelay={700}
                />
              </div>
            </div>

            <div className="columns is-vcentered margin-top-200-mid margin-top-50-mobile">
              <div className="column is-offset-1 is-3 is-10-mobile">
                <Image
                  src="/images/about/social-network-doodle-01.png"
                  alt="A quick sketch of a social network"
                  width={183}
                  height={146}
                />
              </div>
              <div className="column is-5">
                <p>
                  I am fascinated by social media’s impact on society,
                  especially misinformation and how it affects the world. I
                  worked on{' '}
                  <a
                    href="https://www.ideals.illinois.edu/handle/2142/103358"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    a graduate school project
                  </a>{' '}
                  where I performed an analysis of fake news networks.
                </p>
              </div>
            </div>

            <div className="columns margin-top-100-mid">
              <div className="column is-half">
                <h2>My Skillset</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column is-2 text-center">
                <Image
                  src="/images/about/research-skills-doodle-01.png"
                  alt="A doodle of user research related images (a bulb, a clipboard, a stopwatch, a manifying glass)"
                  width={160}
                  height={152}
                />
              </div>
              <div className="column is-6">
                <h3>Research & Ideation</h3>
                <div className="tags-list">
                  {RESEARCH_TAGS.map((t) => (
                    <Tag text={t} key={t} />
                  ))}
                </div>
              </div>
            </div>

            <div className="columns margin-top-50-mid">
              <div className="column is-2 text-center">
                <Image
                  src="/images/about/design-skills-doodle-01.png"
                  alt="A doodle of design tool related icons (a Figma icon, a SketchApp icon, a pencil, a digital pen-tool)"
                  width={150}
                  height={142}
                />
              </div>
              <div className="column is-6">
                <h3>Design</h3>
                <div className="tags-list">
                  {DESIGN_TAGS.map((t) => (
                    <Tag text={t} key={t} />
                  ))}
                </div>
              </div>
            </div>

            <div className="columns margin-top-50-mid">
              <div className="column is-2 text-center">
                <Image
                  src="/images/about/engineering-skills-doodle-01.png"
                  alt="A doodle of software engineering related icons (ReactJs icon, VueJS icon, an icon depicting coding, a finger tap)"
                  width={150}
                  height={142}
                />
              </div>
              <div className="column is-6">
                <h3>Engineering</h3>
                <div className="tags-list">
                  {ENGINEERING_TAGS.map((t) => (
                    <Tag text={t} key={t} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default About