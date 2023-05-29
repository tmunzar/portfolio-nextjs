import { ReactElement } from 'react'
import Tag, { ITagProps } from '../Tag'
import ImageModal from '../ImageModal'

import styles from './ArticleHeader.module.scss'

interface IArticleHeadingProps {
  title: string | React.ReactNode
  description: string
  children: React.ReactNode
  img: { src: string; alt: string }
  tags: ITagProps[]
}

export const ArticleHeader = (props: IArticleHeadingProps): ReactElement => {
  const { title, description, children, img, tags } = props
  return (
    <header className={styles.root}>
      <div className="container">
        <div className="columns">
          <div className="column is-two-fifths">
            <h1>{title}</h1>
            <p className={styles.description}>{description}</p>

            <div className={styles.details}>{children}</div>

            <div className="tags-list is-hidden-mobile">
              {tags.map((tag) => (
                <Tag {...tag} />
              ))}
            </div>
          </div>
          <div className="column">
            <ImageModal img={img} />
          </div>
        </div>
      </div>
    </header>
  )
}
