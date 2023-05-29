import { ReactElement } from 'react'
import Link from 'next/link'
import Button from '../Button'
import Tag, { ITagProps } from '../Tag'
import styles from './ArticleListing.module.scss'

interface IArticleListingProps {
  title: string | React.ReactNode
  description: string
  href: string
  img: { src: string; alt: string }
  tags: ITagProps[]
  actionText?: string
}

export const ArticleListing = (props: IArticleListingProps): ReactElement => {
  const {
    title,
    description,
    href,
    img,
    tags,
    actionText = 'View Case Study',
  } = props
  return (
    <div className={styles.articleListing}>
      <div className="columns">
        <div className="column is-two-fifths">
          <img src={img.src} alt={img.alt} />
        </div>
        <div className="column">
          <h2 className={styles.title}>
            <Link href={href} passHref>
              <a>{title}</a>
            </Link>
          </h2>
          <p className={styles.description}>{description}</p>
          <div className={`tags-list ${styles.tagsList}`}>
            {tags.map((tag) => (
              <Tag {...tag} />
            ))}
          </div>
          <Link passHref href={href}>
            <Button className="column is-4-desktop is-6-tablet">
              {actionText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
